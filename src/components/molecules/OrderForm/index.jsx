import React from 'react';
import { AutocompleteInput } from '../../atoms';
import { getClientsName, getClientsCode } from '../../../localdata/clients';
import './styles.css';

const OrderForm = ({ onSubmit, onChange, data }) => {
  return (
    <form className="orderForm" onSubmit={onSubmit}>
      <div className="orderForm__info">
        
        <div className="orderForm__client">
          <div>
            <button type="submit">Guardar</button>
          </div>
          <AutocompleteInput
            type="text"
            label="Cliente (No.):"
            name="clientCode"
            value={data.clientCode}
            onChange={onChange}
            onSearching={getClientsCode}
          />
          <AutocompleteInput
            type="text"
            label="Nombre:"
            name="clientName"
            value={data.clientName}
            onChange={onChange}
            onSearching={getClientsName}
          />
        </div>

        <div className="orderForm__dates">

          <div className="orderForm__createdDate">
            <div>
              <label
                className="orderForm__createdHead"
                htmlFor="createdAt"

              >Fecha</label>
              <input
                className="orderForm__createdBody"
                type="date"
                id="createdAt"
                name="createdAt"
                value={data.createdAt}
                onChange={onChange}
              />
            </div>

            <div>
              <p className="orderForm__createdHead">Folio</p>
              <p className="orderForm__createdBody">{data.code}</p>
            </div>
          </div>

          <div className="orderForm__deliveryDate">
            <label htmlFor="">Entrega:</label>
            <input
              type="date"
              id="deliveryDate"
              name="deliveryDate"
              value={data.deliveryDate}
              onChange={onChange}
            />
          </div>
        </div>

      </div>
    </form>
  );
}

export default OrderForm; 