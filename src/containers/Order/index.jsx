import React, { useState, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { AutocompleteInput } from '../../components/atoms';
import { OrderForm } from '../../components/molecules';
import { LayoutAdmin } from '../../components/templates';
import { getProductsName, getProductDetails } from '../../localdata/products';
import { getOrder, saveOrder } from '../../localdata/orders';
import { getClient } from '../../localdata/clients';
import './styles.css';

const Order = () => {
  const { uid } = useParams();
  const [data, setData] = useState(null);

  const handleKeyPress = (e) => {
    const { keyCode } = e;
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

    const element = document.querySelector(
      `input[name=${splitedNameInput.join('-')}`
    );

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
          },
        ],
      });
    }
  };

  const onChange = useCallback(
    (_event) => {
      const { name, value } = _event.target;
      const regex = /products/;

      /**
       * This part change of array of products
       */
      if (regex.test(name)) {
        const splitedName = name.split('-');
        const index = splitedName[2];
        const propertyName = splitedName[1];

        const products = data?.products || [];

        products[index] = {
          ...products[index],
          [propertyName]: value,
        };

        setData({
          ...data,
          products,
        });

        if (propertyName === 'count' || propertyName === 'price') {
          const count =
            propertyName === 'count' ? value : products[index].count;
          const price =
            propertyName === 'price' ? value : products[index].price;

          products[index] = {
            ...products[index],
            count,
            price,
            totalPrice: Number(count) * Number(price),
          };

          setData({
            ...data,
            total: products.reduce((a, b) => a + b.totalPrice, 0),
            products,
          });
        }

        if (propertyName === 'name' || propertyName === 'code') {
          const getProduct = async () => {
            const product = await getProductDetails(propertyName, value);
            if (product) {
              products[index] = {
                code: product.code,
                name: product.name,
                unity: product.unity,
                count: 1,
                price: product.price,
                totalPrice: product.price,
              };

              setData({
                ...data,
                total: products.reduce((a, b) => a + b.totalPrice, 0),
                products,
              });
            }
          };

          getProduct();
        }

        return;
      }

      /**
       * This part change other field of order
       */
      setData({
        ...data,
        [name]: value,
      });

      /**
       * If is the code or name by client then find a complete all data
       */
      if (name === 'clientCode' || name === 'clientName') {
        const getClientNameAndCode = async () => {
          try {
            const client = await getClient(
              name.substr(6, 10).toLocaleLowerCase(),
              value
            );
            if (client) {
              setData({
                ...data,
                clientCode: client.code,
                clientName: client.name,
              });
            }
          } catch (err) {
            console.log(err);
          }
        };
        getClientNameAndCode();
      }
    },
    [data]
  );

  const onSubmit = (_event) => {
    _event.preventDefault();
    const saveData = async () => {
      const { uid: dataUid } = data;
      const emptyOrder = {
        code: data.code,
        clientCode: data.clientCode,
        clientName: data.clientName,
        createdAt: data.createdAt,
        deliveryDate: data.deliveryDate,
        total: data.total,
        products: data.products,
      };

      const createdOrder = await saveOrder(dataUid, emptyOrder);
      alert(`Pedido con el uid: ${createdOrder.uid} fue creado`);
    };
    saveData();
  };

  const cellInputPropTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onKeyUp: PropTypes.func.isRequired,
  };

  const cellDefault = (type, nameInput) => {
    const cellInputDefault = ({
      name,
      value,
      onChange: onInputSubmit,
      onKeyUp,
    }) => (
      <input
        className="orderForm__input"
        type={type}
        name={`${nameInput}-${name}`}
        value={value}
        onKeyUp={onKeyUp}
        onChange={onInputSubmit}
      />
    );

    cellInputDefault.propTypes = cellInputPropTypes;
    return cellInputDefault;
  };

  cellDefault.propTypes = {
    name: PropTypes.string.isRequired,
    nameInput: PropTypes.string.isRequired,
  };

  const cellNameProduct = ({
    name,
    value,
    onChange: onInputSubmit,
    onKeyUp,
  }) => (
    <AutocompleteInput
      className="orderForm__inputSuggestion"
      type="text"
      name={`products-name-${name}`}
      value={value}
      onChange={onInputSubmit}
      onSearching={getProductsName}
      onKeyUp={onKeyUp}
    />
  );

  cellNameProduct.propTypes = cellInputPropTypes;

  const columns = useMemo(
    () => [
      {
        Header: 'Articulo',
        accessor: 'code',
        Cell: cellDefault('text', 'products-code'),
      },
      {
        Header: 'Nombre',
        accessor: 'name',
        Cell: cellNameProduct,
      },
      { Header: 'Unidad', accessor: 'unity' },
      {
        Header: 'Cantidad',
        accessor: 'count',
        Cell: cellDefault('text', 'products-count'),
      },
      {
        Header: 'Precio',
        accessor: 'price',
        Cell: cellDefault('text', 'products-price'),
      },
      { Header: 'Importe', accessor: 'totalPrice' },
    ],
    []
  );

  const order = useMemo(() => data, [data]);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataOrder = await getOrder(uid);
        setData(dataOrder);
      } catch (err) {
        console.log(err);
      }
    };

    if (!data) getData();
  }, [uid, data]);

  return (
    <LayoutAdmin title="Pedido">
      {data && (
        <OrderForm
          onSubmit={onSubmit}
          onChange={onChange}
          onKeyUp={handleKeyPress}
          columns={columns}
          data={order}
        />
      )}
      {!data && <h1>Cargando</h1>}
    </LayoutAdmin>
  );
};

export default Order;
