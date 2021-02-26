import React, { useState, useEffect } from 'react';
import { ProductForm } from '../../components/molecules';
import { Table } from '../../components/organisms';
import { LayoutAdmin } from '../../components/templates';
import { useStateValue } from '../../store/StateProvider';
import { addProducts } from '../../store/actions';
import { getProducts  } from '../../localdata/products';
import './styles.css';

const Products = () => {
  const [{ products }, dispatch] = useStateValue();
  const [isOpenModal, setIsOpenModal] = useState(true);

  const columns = [
    { Header: 'Nombre', accessor: 'name' },
    { Header: 'Precio', accessor: 'price' },
    { Header: 'Unidad', accessor: 'unity' },
    {
      id: 'edit',
      Cell: () => (<button>Editar</button>)
    }
  ];

  useEffect(() => {
    const getData = async () => {
      const products = await getProducts();
      dispatch(addProducts(products));
      return products
    }

    getData();

  }, [products])

  const handleColoseModal = () => {
    setIsOpenModal(false);
  }

  const handleButtonNew = () => {
    setIsOpenModal(true)
    alert('handleButtonNew');
  }

  const handleButtonPrint = () => {
    alert('handleButtonPrint');
  }

  const handleButtonSendEmail = () => {
    alert('handleButtonSendEmail');
  }

  return (
    <LayoutAdmin title="Productos">
      <div className="products">

        <div className="products__header">
          <button onClick={handleButtonNew}>Nuevo</button>
          <button onClick={handleButtonPrint}>Imprimir</button>
          <button onClick={handleButtonSendEmail}>Enviar por correo</button>
        </div>

        { products && <Table handleColumns={columns} handleData={products} /> }
        { !products && <p>Cargando</p> }

        { isOpenModal && <ProductForm close={handleColoseModal} /> }
      </div>
    </LayoutAdmin>
  );
}

export default Products; 