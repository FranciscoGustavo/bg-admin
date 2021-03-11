import React, { useEffect, useMemo, useCallback } from 'react';
import { ToolsHeader, ClientForm } from '../../components/molecules';
import { Table } from '../../components/organisms';
import { LayoutAdmin } from '../../components/templates';
import { useStateValue } from '../../store/StateProvider';
import {
  addProviders,
  addProvider,
  openFormProvider,
} from '../../store/actions';
import {
  getProviders,
  saveProvider,
  SCHEMA_PROVIDER,
} from '../../localdata/providers';
import './styles.css';

const Providers = () => {
  const [{ providers, provider }, dispatch] = useStateValue();

  const onNew = () => {
    dispatch(
      openFormProvider({
        data: { ...SCHEMA_PROVIDER },
        isOpenModal: true,
        error: false,
      })
    );
  };

  const handleCloseModal = () => {
    dispatch(openFormProvider({ data: false, isOpenModal: false }));
  };

  const handleSave = (data) => {
    const saveData = async () => {
      const uid = data.uid;
      const provider = {
        code: data.code,
        name: data.name,
        address: data.address,
        phone: data.phone,
        email: data.email,
      };

      const savedProvider = await saveProvider(uid, provider);
      dispatch(addProvider({ uid, savedProvider }));
      handleCloseModal();
    };
    saveData();
  };

  const handleEdit = useCallback(
    (uid) => {
      const data = providers.data.filter((provider) => provider.uid === uid)[0];
      dispatch(openFormProvider({ data, isOpenModal: true, error: false }));
    },
    [dispatch, providers.data]
  );

  const onPrint = () => {};
  const handleSendEmail = () => {};
  const handleSelectedRows = () => {};

  const columns = useMemo(
    () => [
      { Header: 'Codigo', accessor: 'code' },
      { Header: 'Nombre', accessor: 'name' },
      { Header: 'Dirección', accessor: 'address' },
      { Header: 'Telefono', accessor: 'phone' },
      { Header: 'Correo', accessor: 'email' },
      {
        accessor: 'uid',
        Cell: ({ value }) => (
          <button onClick={() => handleEdit(value)}>Editar</button>
        ),
      },
    ],
    [handleEdit]
  );

  const data = useMemo(() => providers.data, [providers.data]);

  useEffect(() => {
    const getData = async () => {
      dispatch(addProviders({ data: false, loading: true, error: false }));

      let data = false;
      let error = false;

      try {
        data = await getProviders();
      } catch (err) {
        error = err.message;
      }

      dispatch(addProviders({ data, loading: false, error }));
      return data;
    };

    if (!providers.data) getData();
  }, [dispatch, providers.data]);

  return (
    <LayoutAdmin title="Provedores">
      <div className="main">
        <ToolsHeader
          onNew={onNew}
          onPrint={onPrint}
          onSendEmail={handleSendEmail}
        />

        {providers.data && (
          <Table
            columns={columns}
            data={data}
            handleSelectedRows={handleSelectedRows}
          />
        )}
        {providers.loading && <p>Cargando</p>}
        {providers.error && <p>Error al cargar</p>}

        {provider.isOpenModal && (
          <ClientForm
            client={provider.data}
            close={handleCloseModal}
            save={handleSave}
          />
        )}
      </div>
    </LayoutAdmin>
  );
};

export default Providers;
