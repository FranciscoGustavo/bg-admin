import React, { useState, useEffect, useMemo, useCallback } from 'react';
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
  const [selectedRows, setSelectedRows] = useState();

  const hanldeTryLoadDataAgain = () =>
    setTryLoadDataAgain(tryLoadDataAgain + 1);

  const handleEdit = useCallback(
    (uid) => {
      const data = products.data.filter((product) => product.uid === uid)[0];
      dispatch(openFormProduct({ data, isOpenModal: true }));
    },
    [dispatch, products.data]
  );

  const handleColoseModal = () => {
    dispatch(openFormProduct({ data: false, isOpenModal: false }));
  };

  const handleNew = () => {
    dispatch(
      openFormProduct({
        data: {
          uid: false,
          code: '',
          isActive: true,
          name: '',
          price: 0,
          unity: 'kg',
        },
        isOpenModal: true,
      })
    );
  };

  const handleSelectedRows = useCallback((data) => {
    setSelectedRows(Object.keys(data));
  }, []);

  const handlePrint = () => {
    console.log(selectedRows);
  };

  const handleSendEmail = () => {
    alert('handleButtonSendEmail');
  };

  const handleSave = (data) => {
    const saveData = async () => {
      const uid = data.uid;
      const product = {
        code: data.code,
        isActive: Boolean(data.isActive),
        name: data.name,
        price: data.price,
        unity: data.unity,
      };
      const createdProduct = await saveProduct(uid, product);
      dispatch(addProduct({ uid, createdProduct }));
      handleColoseModal();
    };

    saveData();
  };

  const columns = useMemo(
    () => [
      { Header: 'Codigo', accessor: 'code' },
      { Header: 'Nombre', accessor: 'name' },
      { Header: 'Precio', accessor: 'price' },
      { Header: 'Unidad', accessor: 'unity' },
      {
        Header: 'Estado',
        accessor: 'isActive',
        Cell: ({ value }) => (value ? <p>Activo</p> : <p>No Activo</p>),
      },
      {
        accessor: 'uid',
        Cell: ({ value }) => (
          <button onClick={() => handleEdit(value)}>Editar</button>
        ),
      },
    ],
    [handleEdit]
  );

  const data = useMemo(() => products.data, [products.data]);

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
      return data;
    };

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

        {products.data && (
          <Table
            columns={columns}
            data={data}
            handleSelectedRows={handleSelectedRows}
          />
        )}
        {products.loading && <p>Cargando</p>}
        {products.error && (
          <p onClick={hanldeTryLoadDataAgain}>Error al cargar</p>
        )}

        {product.isOpenModal && (
          <ProductForm
            product={product.data}
            close={handleColoseModal}
            save={handleSave}
          />
        )}
      </div>
    </LayoutAdmin>
  );
};

export default Products;
