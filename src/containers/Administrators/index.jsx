import React, { useEffect, useMemo } from 'react';
import { Loading } from '../../components/atoms';
import { ToolsHeader } from '../../components/molecules';
import { Table } from '../../components/organisms';
import { LayoutAdmin } from '../../components/templates';
import { useStateValue } from '../../store/StateProvider';
import { addAdministrators } from '../../store/actions';
import { getUsers } from '../../localdata/users';
import './styles.css';

const Administrators = () => {
  const [{ administrators }, dispatch] = useStateValue();

  const handleNew = () => {};

  const handlePrint = () => {
    window.print();
  };

  const handleSendEmail = () => {};

  const handleSelectedRows = () => {};

  const columns = useMemo(
    () => [
      { Header: 'Nombre', accessor: 'name' },
      { Header: 'Telefono', accessor: 'phone' },
      { Header: 'Correo', accessor: 'email' },
      {
        accessor: 'uid',
        Cell: () => <button type="button">Editar</button>,
      },
    ],
    [],
  );

  const data = useMemo(() => administrators.data, [administrators.data]);

  useEffect(() => {
    const getData = async () => {
      dispatch(addAdministrators({ data: false, loading: true, error: false }));

      let dataAdministrators = false;
      let error = false;

      try {
        dataAdministrators = await getUsers();
      } catch (err) {
        error = err.message;
      }

      dispatch(
        addAdministrators({ data: dataAdministrators, loading: false, error }),
      );
      return data;
    };

    if (!administrators.data) getData();
  }, [dispatch, administrators.data]);

  return (
    <LayoutAdmin title="Usuarios">
      <div className="main users">
        <ToolsHeader
          onNew={handleNew}
          onPrint={handlePrint}
          onSendEmail={handleSendEmail}
        />

        {administrators.data && (
          <Table
            columns={columns}
            data={data}
            handleSelectedRows={handleSelectedRows}
          />
        )}
        {administrators.loading && <Loading />}
        {administrators.error && <p>Error al cargar</p>}
      </div>
    </LayoutAdmin>
  );
};

export default Administrators;
