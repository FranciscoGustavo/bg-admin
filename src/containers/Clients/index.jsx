import React, { useEffect } from 'react';
import { ToolsHeader } from '../../components/molecules';
import { Table } from '../../components/organisms';
import { LayoutAdmin } from "../../components/templates";
import { useStateValue } from '../../store/StateProvider';
import { addClients } from '../../store/actions';
import { getClients } from '../../localdata/clients';
import './styles.css';

const Clients = () => {
  const [{ clients }, dispatch] = useStateValue();

  const handleNew = () => {}

  const handlePrint = () => {
    window.print();
  }

  const handleSendEmail = () => {
    alert('handleButtonSendEmail');
  }

  const columns = [
    { Header: 'Nombre', accessor: 'name' },
    { Header: 'Dirección', accessor: 'address' },
    { Header: 'Telefono', accessor: 'phone' },
    { Header: 'Correo', accessor: 'email' },
    {
      accessor: 'uid',
      Cell: () => <button>Editar</button>
    }
  ];

  useEffect(() => {
    const getData = async () => {
      dispatch(addClients({ data: false, loading: true, error: false }));

      let data = false;
      let error = false;

      try {
        data = await getClients();
      } catch (err) {
        error = err.message;
      }

      dispatch(addClients({ data, loading: false, error }));
      return data
    }

    return !clients.data ? getData() : null;
  
  }, [dispatch, clients.data]);

  return (
    <LayoutAdmin title="Clientes">
      <div className="clients" >

      <ToolsHeader
        onNew={handleNew}
        onPrint={handlePrint}
        onSendEmail={handleSendEmail}
      />

      { clients.data && <Table handleColumns={columns} handleData={clients.data} /> }
      { clients.loading && <p>Cargando</p> }
      { clients.error && <p>Error al cargar</p> }

      </div>
    </LayoutAdmin>
  );
}

export default Clients; 