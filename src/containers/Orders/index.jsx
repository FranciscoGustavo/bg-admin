import React, { useEffect, useMemo, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ToolsHeader } from '../../components/molecules';
import { Table } from '../../components/organisms';
import { LayoutAdmin } from "../../components/templates";
import { useStateValue } from '../../store/StateProvider';
import { addOrders } from '../../store/actions';
import { getOrders } from '../../localdata/orders';
import './styles.css';

const Orders = () => {
  const history = useHistory();
  const [{ orders }, dispatch] = useStateValue();

  const handleNew = () => history.push('/orders/new');
  const handlePrint = () => {}
  const handleSendEmail = () => {}

  const handleSelectedRows = useCallback((data) => {
    console.log(data);
  }, []);

  const columns = useMemo(() => [
    { Header: 'Codigo', accessor: 'code' },
    { Header: 'Cliente', accessor: 'clientName' },
    { Header: 'Articulos', accessor: 'totalItems' },
    { Header: 'Precio Total', accessor: 'total' },
    {
      accessor: 'uid',
      Cell: ({ value }) => (<Link to={`/orders/${value}`} >Editar</Link>)
    }
  ], []);

  const data = useMemo(() => orders.data, [orders.data]);

  useEffect(() => {
    const getData = async () => {
      dispatch(addOrders({ data: false, loading: true }));

      let data = false;
      let error = false;

      try {
        data = await getOrders();
      } catch (err) {
        error = err.message;
      }

      dispatch(addOrders({ data, loading: false, error }));
      return data;
    }

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

        { orders.data && <Table columns={columns} data={data} handleSelectedRows={handleSelectedRows} /> }
        { orders.loading && <p>Cargando</p> }
        { orders.error && <p>Error al cargar</p> }
      </div>
    </LayoutAdmin>
  );
}

export default Orders; 