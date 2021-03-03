import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { AutocompleteInput } from '../../components/atoms';
import { OrderForm } from '../../components/molecules';
import { LayoutAdmin } from "../../components/templates";
import { getOrder } from '../../localdata/orders';
import { getClientsCode } from '../../localdata/clients';
import './styles.css';

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
  const onChange = useCallback((_event) => {
    // console.log('DATA', data);
    const name = _event.target.name;
    const regex = /products/;
    if (regex.test(name)) {
      const [ _, index, propertyName ] = name.split('-');
      console.log(data);
      const products = data?.products || [];
      products[index] = {
        ...products[index],
        [propertyName]: _event.target.value,
      }
      console.log({
        ...data,
        products
      });
      setData({
        ...data,
        products
      });
      /*console.log(Number(index), properyName);
      const newData = { ...data };
      console.log(newData[products]);/*
      newData.products[Number(index)] = {
        ...newData.products[Number(index)],
        [properyName]: _event.target.value,
      };
*/
      // setData(data);

    } else {
      setData({
        ...data,
        [_event.target.name]: _event.target.value
      });
    }
  }, [data]);

  const onSubmit = (_event) => {
    _event.preventDefault();
    console.log(data);
  }

  const columns = useMemo(() => [
    {
      Header: 'Articulo',
      accessor: 'code',
      Cell: ({ name, value, onChange }) => (<AutocompleteInput type="text" name={`products-${name}-code`} value={value} onChange={onChange} onSearching={getClientsCode} />)
    },
    {
      Header: 'Nombre',
      accessor: 'name',
      Cell: ({ name, value, onChange }) => (<AutocompleteInput type="text" name={`products-${name}-name`} value={value} onChange={onChange} onSearching={getClientsCode} />)
    },
    { Header: 'Unidad', accessor: 'unity' },
    {
      Header: 'Cantidad',
      accessor: 'count',
      Cell: ({ name, value, onChange }) => (<input type="number" name={`products-${name}-count`} value={value} onChange={onChange} />)
    },
    {
      Header: 'Precio',
      accessor: 'price',
      Cell: ({ name, value, onChange }) => (<input type="number" name={`products-${name}-price`} value={value} onChange={onChange} />)
    },
    { Header: 'Importe', accessor: 'totalPrice' }
  ], []);

  // const order = useMemo(() => data, [data]);

  useEffect(() => {
    const getData = async () => {
      try {
        const order = await getOrder(uid);
        setData(order);
      } catch (err) {
        console.log(err);
      }
    }
    
    if (!data) getData();
  }, [uid, data]);

  return (
    <LayoutAdmin title="Pedido" >

      { data && <OrderForm onSubmit={onSubmit} onChange={onChange} columns={columns} data={data} /> }
      { !data && <h1>Cargando</h1> }

    </LayoutAdmin>
  );
}

export default Order; 