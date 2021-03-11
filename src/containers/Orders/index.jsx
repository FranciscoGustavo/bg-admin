import React, { useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { ToolsHeader } from '../../components/molecules';
import { Table } from '../../components/organisms';
import { LayoutAdmin } from '../../components/templates';
import { useStateValue } from '../../store/StateProvider';
import { addOrders } from '../../store/actions';
import { getOrders } from '../../localdata/orders';
import './styles.css';

const Orders = () => {
  const history = useHistory();
  const [{ orders }, dispatch] = useStateValue();

  const handleNew = () => history.push('/orders/new');
  const handlePrint = () => {};
  const handleSendEmail = () => {};

  const handleSelectedRows = useCallback((data) => {
    console.log(data);
  }, []);

  const cellEdit = ({ value }) => <Link to={`/orders/${value}`}>Editar</Link>;
  cellEdit.propTypes = {
    value: PropTypes.string.isRequired,
  };

  const columns = useMemo(
    () => [
      { Header: 'Codigo', accessor: 'code' },
      { Header: 'Cliente', accessor: 'clientName' },
      { Header: 'Articulos', accessor: 'totalItems' },
      { Header: 'Precio Total', accessor: 'total' },
      {
        accessor: 'uid',
        Cell: cellEdit,
      },
    ],
    []
  );

  const data = useMemo(() => orders.data, [orders.data]);

  useEffect(() => {
    const getData = async () => {
      dispatch(addOrders({ data: false, loading: true }));

      let dataOrders = false;
      let error = false;

      try {
        dataOrders = await getOrders();
      } catch (err) {
        error = err.message;
      }

      dispatch(addOrders({ data: dataOrders, loading: false, error }));
      return data;
    };

    if (!orders.data) getData();
  }, [dispatch, orders.data]);

  return (
    <LayoutAdmin title="Pedidos">
      <div className="main orders">
        <ToolsHeader
          onNew={handleNew}
          onPrint={handlePrint}
          onSendEmail={handleSendEmail}
        />

        {orders.data && (
          <Table
            columns={columns}
            data={data}
            handleSelectedRows={handleSelectedRows}
          />
        )}
        {orders.loading && <p>Cargando</p>}
        {orders.error && <p>Error al cargar</p>}
      </div>
    </LayoutAdmin>
  );
};

export default Orders;
