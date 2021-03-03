import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { OrderForm } from '../../components/molecules';
import { LayoutAdmin } from "../../components/templates";
import { getOrder } from '../../localdata/orders';
import './styles.css';

const OrderRow = ({ product }) => {
  return (
    <tr>
      <td><input type="text" value={product.code} /></td>
      <td><input type="text" value={product.name} /></td>
      <td><input type="text" value={product.unity} disabled={true} /></td>
      <td><input type="text" value={product.count} /></td>
      <td><input type="text" value={product.price} /></td>
      <td><input type="text" value={product.totalPrice} disabled={true} /></td>
    </tr>
  );
}

const Order = () => {
  const { uid } = useParams();
  const [data, setData] = useState(null);
/*
  const handleClick = (e) => {
    if (e.keyCode === 39 || e.keyCode === 13) {
      console.log('DERECHA');
      console.log(e.target.parentElement.nextElementSibling.children[0].focus() /*nextElementSibling);
      // console.log(e.target.nextElementSibling.focus());
    } else if (e.keyCode === 37) {
      console.log('IZQUERDA')
    } else if (e.keyCode === 38) {
      console.log('ARRIBA')
    } else if (e.keyCode === 40) {
      console.log('ABAJO')
    } else if (e.keyCode === 13) {
      console.log('ENTER');
    }
  }
*/
  const onChange = (_event) => {
    setData({
      ...data,
      [_event.target.name]: _event.target.value
    })
  }

  const onSubmit = (_event) => {
    _event.preventDefault();
  }

  const columns = useMemo(() => [

  ], []);

  const order = useMemo(() => data, [data]);

  useEffect(() => {
    const getData = async () => {
      const order = await getOrder(uid);
      setData(order);
    }
    
    getData();
  }, [uid])
  return (
    <LayoutAdmin title="Pedido" >

      { order && <OrderForm onSubmit={onSubmit} onChange={onChange} columns={columns} data={order} /> }
      { !order && <h1>Cargando</h1> }

    </LayoutAdmin>
  );
}

export default Order; 