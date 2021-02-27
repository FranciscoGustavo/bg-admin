import React, { useState, useEffect } from 'react';
import { ProductForm, ToolsHeader } from '../../components/molecules';
import { Table } from '../../components/organisms';
import { LayoutAdmin } from '../../components/templates';
import { useStateValue } from '../../store/StateProvider';
import { addProducts, openFormProduct, addProduct } from '../../store/actions';
import { getProducts, saveProduct } from '../../localdata/products';
import './styles.css';

const Products = () => {
  const [{ products, product }, dispatch] = useStateValue();
  const [tryLoadDataAgain, setTryLoadDataAgain] = useState(0);

  const hanldeTryLoadDataAgain = () => setTryLoadDataAgain(tryLoadDataAgain + 1);

  const handleEdit = (uid) => {
    const data = products.data.filter((product) => product.uid === uid)[0];
    dispatch(openFormProduct({ data, isOpenModal: true }));
  }
 
  const handleColoseModal = () => {
    dispatch(openFormProduct({ data: false, isOpenModal: false }));
  }

  const handleNew = () => {
    dispatch(openFormProduct({ data: { uid: false, name: '', price: 0, unity: 'kg' }, isOpenModal: true }));
  }

  const handlePrint = () => {
    window.print();
  }

  const handleSendEmail = () => {
    alert('handleButtonSendEmail');
  }

  const handleSave = (data) => {
    const saveData = async () => {
      const product = await saveProduct(data);
      dispatch(addProduct(product));
      handleColoseModal();
    }

    saveData();
  }

  const columns = [
    { Header: 'Nombre', accessor: 'name' },
    { Header: 'Precio', accessor: 'price' },
    { Header: 'Unidad', accessor: 'unity' },
    {
      accessor: 'uid',
      Cell: ({ value }) => (<button onClick={() => handleEdit(value)}>Editar</button>)
    }
  ];

  useEffect(() => {
    const getData = async () => {
      dispatch(addProducts({ data: false, loading: true, error: false }));

      let data = false;
      let error = false;

      try {
        data = await getProducts();
      } catch (err) {
        error = err.message;
      }

      dispatch(addProducts({ data, loading: false, error }));
      return data
    }

    return !products.data ? getData() : null;
  
  }, [tryLoadDataAgain, dispatch, products.data]);

  return (
    <LayoutAdmin title="Productos">
      <div className="main products">

        <ToolsHeader
          onNew={handleNew}
          onPrint={handlePrint}
          onSendEmail={handleSendEmail}
        />

        { products.data && <Table handleColumns={columns} handleData={products.data} /> }
        { products.loading && <p>Cargando</p> }
        { products.error && <p onClick={hanldeTryLoadDataAgain}>Error al cargar</p> }

        { product.isOpenModal && (
          <ProductForm
            product={product.data}
            close={handleColoseModal}
            save={handleSave}
          />
        ) }
  
      </div>
    </LayoutAdmin>
  );
}

export default Products; 