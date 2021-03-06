import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { AutocompleteInput } from '../../components/atoms';
import { OrderForm } from '../../components/molecules';
import { LayoutAdmin } from "../../components/templates";
import { getOrder } from '../../localdata/orders';
import { getClientsName } from '../../localdata/clients';
import './styles.css';

const Order = () => {
  const { uid } = useParams();
  const [data, setData] = useState(null);
  
  const handleCell = (type, nameInput) => {
    return ({ name, value, onChange, onKeyUp }) => (
      <input
        className="orderForm__input"
        type={type}
        name={`${nameInput}-${name}`}
        value={value}
        onKeyUp={onKeyUp}
        onChange={onChange}
      />
    )
  }

  const handleKeyPress = (e) => {
    const keyCode = e.keyCode;
    const splitedNameInput = e.target.name.split('-');

    // When key enter is pressed
    if (keyCode === 13 && splitedNameInput[1] === 'price') {
      splitedNameInput[1] = 'code';
      splitedNameInput[2] = Number(splitedNameInput[2]) + 1;
    } else if (keyCode === 13 && splitedNameInput[1] === 'code') {
      splitedNameInput[1] = 'name';
    } else if (keyCode === 13 && splitedNameInput[1] === 'name') {
      splitedNameInput[1] = 'count';
    } else if (keyCode === 13 && splitedNameInput[1] === 'count') {
      splitedNameInput[1] = 'price';
    }

    // When key up and key down is pressed
    if (e.keyCode === 38) {
      splitedNameInput[2] = Number(splitedNameInput[2]) - 1;
    } else if (e.keyCode === 40) {
      splitedNameInput[2] = Number(splitedNameInput[2]) + 1;
    }

    const element = document.querySelector(`input[name=${splitedNameInput.join('-')}`);
    
    if (element) element.focus();

    if (
      (keyCode === 13 && splitedNameInput[1] === 'code' && !element) ||
      (keyCode === 40 && splitedNameInput[1] === 'price' && !element)
      ) {
      setData({
        ...data,
        products: [
          ...data?.products,
          {
            code: '',
            name: '',
            unity: '',
            count: 0,
            price: 0,
            totalPrice: 0,
          }
        ]
      });
    }
  }

  const onChange = useCallback((_event) => {
    const name = _event.target.name;
    const regex = /products/;
    if (regex.test(name)) {
      const splitedName = name.split('-');
      const index = splitedName[2];
      const propertyName = splitedName[1]
      const products = data?.products || [];
      products[index] = {
        ...products[index],
        [propertyName]: _event.target.value,
      }
      /* console.log({
        ...data,
        products
      }); */
      setData({
        ...data,
        products
      });
    } else {
      setData({
        ...data,
        [_event.target.name]: _event.target.value
      });
    }
  }, [data]);

  const onSubmit = (_event) => {
    _event.preventDefault();
    // console.log(data, 'Enviando');
  }

  const columns = useMemo(() => [
    {
      Header: 'Articulo',
      accessor: 'code',
      Cell: handleCell('text', 'products-code'),
    },
    {
      Header: 'Nombre',
      accessor: 'name',
      Cell: ({ name, value, onChange, onKeyUp }) => <AutocompleteInput className="orderForm__inputSuggestion" type="text" name={`products-name-${name}`} value={value} onChange={onChange} onSearching={getClientsName} onKeyUp={onKeyUp} />,
    },
    { Header: 'Unidad', accessor: 'unity' },
    {
      Header: 'Cantidad',
      accessor: 'count',
      Cell: handleCell('text', 'products-count'),
    },
    {
      Header: 'Precio',
      accessor: 'price',
      Cell: handleCell('text', 'products-price'),
    },
    { Header: 'Importe', accessor: 'totalPrice' }
  ], []);

  const order = useMemo(() => data, [data]);

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

      { data && <OrderForm onSubmit={onSubmit} onChange={onChange} onKeyUp={handleKeyPress} columns={columns} data={order} /> }
      { !data && <h1>Cargando</h1> }

    </LayoutAdmin>
  );
}

export default Order; 