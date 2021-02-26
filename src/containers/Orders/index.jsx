import React from 'react';
import { LayoutAdmin } from "../../components/templates";
import { Table } from '../../components/organisms';
import './styles.css';

const Orders = () => {
  const handleColumns = [
    { Header: 'Cliente', accessor: 'name' },
    { Header: 'Articulos', accessor: 'price' },
    { Header: 'Precio Total', accessor: 'unity' },
    { Header: 'Descripcion', accessor: 'desc' },
    {
      id: 'edit',
      Cell: () => (<button>Editar</button>)
    }
  ];
  const handleData = [
    { name: 'El BUEN TIBURON SA DE CV', price: 5, unity: 200, desc: 'lorem ipsum' },
    { name: 'El BUEN TIBURON SA DE CV', price: 5, unity: 200, desc: 'lorem ipsum' },
    { name: 'El BUEN TIBURON SA DE CV', price: 5, unity: 200, desc: 'lorem ipsum' },
  ]

  return (
    <LayoutAdmin title="Pedidos">
      <div className="orders">
        <Table handleColumns={handleColumns} handleData={handleData} />
      </div>
    </LayoutAdmin>
  );
}

export default Orders; 