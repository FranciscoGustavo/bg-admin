import React from 'react';
import { LayoutAdmin } from "../../components/templates";
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

const AutocompleteInput = ({ type, label }) => {
  return (
    <div className="autocomplete">
      <label className="autocomplete__label" htmlFor="">{label}</label>
      <input className="autocomplete__input" type={type}/>
    </div>
  );
}

const order = {
  code: '056',
  codeClient: 'C.0005',
  client: 'OSCAR EL TIBURON',
  createdAt: '',
  deliveryDate: '',
  products: [
    {
      code: 'P.0005',
      name: 'PAPA BLANCA GRANDE',
      unity: 'KG',
      count: 5,
      price: 16,
      totalPrice: 16 * 5,
    },
    {
      code: 'P.0005',
      name: 'PAPA BLANCA GRANDE',
      unity: 'KG',
      count: 5,
      price: 16,
      totalPrice: 16 * 5,
    },
    {
      code: 'P.0005',
      name: 'PAPA BLANCA GRANDE',
      unity: 'KG',
      count: 5,
      price: 16,
      totalPrice: 16 * 5,
    },
    {
      code: 'P.0005',
      name: 'PAPA BLANCA GRANDE',
      unity: 'KG',
      count: 5,
      price: 16,
      totalPrice: 16 * 5,
    }
  ]
}

const Product = () => {
  const handleClick = (e) => {
    if (e.keyCode === 39 || e.keyCode === 13) {
      console.log('DERECHA');
      console.log(e.target.parentElement.nextElementSibling.children[0].focus() /*nextElementSibling*/);
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

  return (
    <LayoutAdmin title="Pedido" >
      <div className="order">
        <div className="order__info">
          <div className="order__client">
            <AutocompleteInput
              type="text"
              label="Cliente (No.):"
            />
            <AutocompleteInput
              type="text"
              label="Nombre:"
            />
          </div>
          <div className="order__dates">
            <div className="order__createdDate">
              <div>
                <label className="order__createdHead" htmlFor="">Fecha</label>
                <input className="order__createdBody" type="date" value={order.createdAt}/>
              </div>
              <div>
                <p className="order__createdHead">Folio</p>
                <p className="order__createdBody">{order.code}</p>
              </div>
            </div>
            <div className="order__deliveyDate">
              <AutocompleteInput
                type="date"
                label="Entrega:"
              />
            </div>
          </div>
        </div>
        <div className="order__products">
          <table>
            <thead>
              <tr>
                <th>Articulo</th>
                <th>Nombre</th>
                <th>Unidad</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Importe</th>
              </tr>
            </thead>

            <tbody>
              {
                order.products.map((product) => (
                  <OrderRow product={product}/>
                ))
              }
              {Array(50).fill().map(() => (
                <tr>
                  {
                    Array(6).fill().map(() =>
                      <td>
                        <input type="text" onKeyUpCapture={handleClick}/>
                      </td>
                    )
                  }
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default Product; 