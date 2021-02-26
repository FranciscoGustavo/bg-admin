import React from 'react';
import { Table } from '../../components/organisms';
import { LayoutAdmin } from '../../components/templates';
import './styles.css';

const Products = () => {

  const handleColumns = [
    { Header: 'Nombre', accessor: 'name' },
    { Header: 'Precio', accessor: 'price' },
    { Header: 'Unidad', accessor: 'unity' },
    {
      id: 'edit',
      Cell: () => (<button>Editar</button>)
    }
  ];
  const handleData = [
    { name: 'PAPA 1', price: 5, unity: 'KG' },
    { name: 'PAPA 1', price: 5, unity: 'KG' },
    { name: 'PAPA 1', price: 5, unity: 'KG' },
  ]

  return (
    <LayoutAdmin title="Productos">
      <div className="products">
        <Table handleColumns={handleColumns} handleData={handleData} />
      </div>
    </LayoutAdmin>
  );
}

export default Products; 