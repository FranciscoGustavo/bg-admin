import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { Loading } from '../../components/atoms';
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
  const [, setSelectedRows] = useState();

  const hanldeTryLoadDataAgain = () => setTryLoadDataAgain(tryLoadDataAgain + 1);

  const handleEdit = useCallback(
    (uid) => {
      const data = products.data.filter(
        (filterProduct) => filterProduct.uid === uid,
      )[0];
      dispatch(openFormProduct({ data, isOpenModal: true }));
    },
    [dispatch, products.data],
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
      }),
    );
  };

  const handleSelectedRows = useCallback((data) => {
    setSelectedRows(Object.keys(data));
  }, []);

  const handlePrint = () => {
    // console.info(selectedRows);
  };

  const handleSendEmail = () => {};

  const handleSave = (data) => {
    const saveData = async () => {
      const { uid } = data;
      const emptyProduct = {
        code: data.code,
        isActive: Boolean(data.isActive),
        name: data.name,
        price: data.price,
        unity: data.unity,
      };
      const createdProduct = await saveProduct(uid, emptyProduct);
      dispatch(addProduct({ uid, createdProduct }));
      handleColoseModal();
    };

    saveData();
  };

  const cellIsActive = ({ value }) => (value ? <p>Activo</p> : <p>No Activo</p>);
  cellIsActive.propTypes = { value: PropTypes.string.isRequired };

  const cellEdit = ({ value }) => (
    <button type="button" onClick={() => handleEdit(value)}>
      Editar
    </button>
  );
  cellEdit.propTypes = { value: PropTypes.string.isRequired };

  const columns = useMemo(
    () => [
      { Header: 'Codigo', accessor: 'code' },
      { Header: 'Nombre', accessor: 'name' },
      { Header: 'Precio', accessor: 'price' },
      { Header: 'Unidad', accessor: 'unity' },
      { Header: 'Estado', accessor: 'isActive', Cell: cellIsActive },
      { accessor: 'uid', Cell: cellEdit },
    ],
    [handleEdit],
  );

  const data = useMemo(() => products.data, [products.data]);

  useEffect(() => {
    const getData = async () => {
      dispatch(addProducts({ data: false, loading: true, error: false }));

      let dataProduct = false;
      let error = false;

      try {
        dataProduct = await getProducts();
      } catch (err) {
        error = err.message;
      }

      dispatch(addProducts({ data: dataProduct, loading: false, error }));
      return dataProduct;
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
        {products.loading && <Loading />}
        {products.error && (
          <button type="button" onClick={hanldeTryLoadDataAgain}>
            Error al cargar
          </button>
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
