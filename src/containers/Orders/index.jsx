import React, { useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ToolsHeader } from '../../components/molecules';
import { Table } from '../../components/organisms';
import { LayoutAdmin } from "../../components/templates";
import './styles.css';

const Orders = () => {

  const handleNew = () => {}
  const handlePrint = () => {}
  const handleSendEmail = () => {}

  const handleSelectedRows = useCallback((data) => {
    console.log(data);
  }, []);

  const columns = useMemo(() => [
    { Header: 'Codigo', accessor: 'code' },
    { Header: 'Cliente', accessor: 'name' },
    { Header: 'Articulos', accessor: 'price' },
    { Header: 'Precio Total', accessor: 'unity' },
    { Header: 'Descripcion', accessor: 'desc' },
    {
      accessor: 'uid',
      Cell: ({ value }) => (<Link to={`/orders/${value}`} >Editar</Link>)
    }
  ], []);

  const data = useMemo(() => [
    { uid: '1', name: 'El BUEN TIBURON SA DE CV', price: 5, unity: 200, desc: 'lorem ipsum' },
    { uid: '2', name: 'El BUEN TIBURON SA DE CV', price: 5, unity: 200, desc: 'lorem ipsum' },
    { uid: '3', name: 'El BUEN TIBURON SA DE CV', price: 5, unity: 200, desc: 'lorem ipsum' },
  ], [])

  return (
    <LayoutAdmin title="Pedidos">
      <div className="main orders">
        <ToolsHeader
          onNew={handleNew}
          onPrint={handlePrint}
          onSendEmail={handleSendEmail}
        />
        <Table columns={columns} data={data} handleSelectedRows={handleSelectedRows} />
      </div>
    </LayoutAdmin>
  );
}

export default Orders; 