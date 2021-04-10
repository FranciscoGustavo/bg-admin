import React, { useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { Loading } from '../../components/atoms';
import { ToolsHeader } from '../../components/molecules';
import { Table } from '../../components/organisms';
import { LayoutAdmin } from '../../components/templates';
import { useStateValue } from '../../store/StateProvider';
import { addReceptions } from '../../store/actions';
import { getReceptions } from '../../localdata/receptions';
import './styles.css';

const MerchandiseReception = () => {
  const history = useHistory();
  const [{ receptions }, dispatch] = useStateValue();

  const handleNew = () => history.push('/merchandise-reception/new');
  const handlePrint = () => {};
  const handleSendEmail = () => {};

  const handleSelectedRows = useCallback(() => {}, []);

  const cellEdit = ({ value }) => (
    <Link to={`/merchandise-reception/${value}`}>Editar</Link>
  );
  cellEdit.propTypes = {
    value: PropTypes.string.isRequired,
  };

  const columns = useMemo(
    () => [
      { Header: 'Codigo', accessor: 'code' },
      { Header: 'Provedor', accessor: 'providerName' },
      { Header: 'Articulos', accessor: 'totalItems' },
      { Header: 'Precio Total', accessor: 'total' },
      {
        accessor: 'uid',
        Cell: cellEdit,
      },
    ],
    [],
  );

  const data = useMemo(() => receptions.data, [receptions.data]);

  useEffect(() => {
    const getData = async () => {
      dispatch(addReceptions({ data: false, loading: true }));

      let dataReceptions = false;
      let error = false;

      try {
        dataReceptions = await getReceptions();
      } catch (err) {
        error = err.message;
      }

      dispatch(addReceptions({ data: dataReceptions, loading: false, error }));
      return data;
    };

    if (!receptions.data) getData();
  }, [dispatch, receptions.data]);

  return (
    <LayoutAdmin title="Recepción de mercancia">
      <div className="main reception">
        <ToolsHeader
          onNew={handleNew}
          onPrint={handlePrint}
          onSendEmail={handleSendEmail}
        />

        {receptions.data && (
          <Table
            columns={columns}
            data={data}
            handleSelectedRows={handleSelectedRows}
          />
        )}
        {receptions.loading && <Loading />}
        {receptions.error && <p>Error al cargar</p>}
      </div>
    </LayoutAdmin>
  );
};

export default MerchandiseReception;
