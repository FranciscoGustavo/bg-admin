import React from 'react';
import PropTypes from 'prop-types';
import { AutocompleteInput } from '../../atoms';
import {
  getProvidersName,
  getProvidersCode,
} from '../../../localdata/providers';
import './styles.css';

const RecemptionForm = ({ onSubmit, onChange, onKeyUp, data, columns }) => (
  <form className="orderForm">
    <div className="orderForm__info">
      <div className="orderForm__client">
        <div>
          <button
            className="orderForm__submit"
            type="button"
            onClick={onSubmit}
          >
            Guardar
          </button>
        </div>
        <AutocompleteInput
          type="text"
          label="Provedor (No.):"
          name="providerCode"
          value={data.providerCode}
          onChange={onChange}
          onSearching={getProvidersCode}
        />
        <AutocompleteInput
          type="text"
          label="Nombre:"
          name="providerName"
          value={data.providerName}
          onChange={onChange}
          onSearching={getProvidersName}
        />
      </div>

      <div className="orderForm__dates">
        <div className="orderForm__createdDate">
          <div>
            <label className="orderForm__createdHead" htmlFor="createdAt">
              Fecha
            </label>
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
          <label htmlFor="deliveryDate">Entrega:</label>
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

    <table className="orderForm__table">
      <thead>
        <tr>
          {columns.map(({ Header }) => (
            <th>{Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.products.map((item, idx) => (
          <tr>
            {columns.map(({ accessor, Cell }) => (
              <td>
                {Cell ? (
                  Cell({
                    name: idx,
                    value: data.products[idx][accessor],
                    onChange,
                    onKeyUp,
                  })
                ) : (
                  <span>{item[accessor]}</span>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

    <div className="orderForm__total">
      <p>
        <span>Numero de productos</span>
        <span>{data.products.length}</span>
      </p>
      <p>
        <span>El total es:</span>
        <span>${data.total}</span>
      </p>
    </div>
  </form>
);

RecemptionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired,
  data: PropTypes.objectOf().isRequired,
  columns: PropTypes.objectOf().isRequired,
};

export default RecemptionForm;
