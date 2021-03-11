import React, { useEffect } from 'react';
import { ToolsHeader } from '../../components/molecules';
import { Table } from '../../components/organisms';
import { LayoutAdmin } from '../../components/templates';
import { useStateValue } from '../../store/StateProvider';
import { addUsers } from '../../store/actions';
import { getUsers } from '../../localdata/users';
import './styles.css';

const Administrators = () => {
  const [{ users }, dispatch] = useStateValue();

  const handleNew = () => {};

  const handlePrint = () => {
    window.print();
  };

  const handleSendEmail = () => {
    alert('handleButtonSendEmail');
  };

  const columns = [
    { Header: 'Nombre', accessor: 'name' },
    { Header: 'Telefono', accessor: 'phone' },
    { Header: 'Correo', accessor: 'email' },
    {
      accessor: 'uid',
      Cell: () => <button type="button">Editar</button>,
    },
  ];

  useEffect(() => {
    const getData = async () => {
      dispatch(addUsers({ data: false, loading: true, error: false }));

      let data = false;
      let error = false;

      try {
        data = await getUsers();
      } catch (err) {
        error = err.message;
      }

      dispatch(addUsers({ data, loading: false, error }));
      return data;
    };

    return !users.data ? getData() : null;
  }, [dispatch, users.data]);

  return (
    <LayoutAdmin title="Usuarios">
      <div className="main users">
        <ToolsHeader
          onNew={handleNew}
          onPrint={handlePrint}
          onSendEmail={handleSendEmail}
        />

        {users.data && (
          <Table handleColumns={columns} handleData={users.data} />
        )}
        {users.loading && <p>Cargando</p>}
        {users.error && <p>Error al cargar</p>}
      </div>
    </LayoutAdmin>
  );
};

export default Administrators;
