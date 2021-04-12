import React, { memo, useEffect, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { usePagination, useRowSelect, useTable } from 'react-table';
import { TablePagination } from '../../molecules';
import './styles.css';

const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolveRef = ref || defaultRef;

  useEffect(() => {
    resolveRef.current.indeterminate = indeterminate;
  }, [resolveRef, indeterminate]);

  return <input type="checkbox" ref={resolveRef} {...rest} />;
});

IndeterminateCheckbox.propTypes = {
  indeterminate: PropTypes.bool.isRequired,
};

const Table = memo(({ columns, data, handleSelectedRows }) => {
  const headerSelection = ({ getToggleAllPageRowsSelectedProps }) => (
    <div>
      <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
    </div>
  );

  headerSelection.propTypes = {
    getToggleAllPageRowsSelectedProps: PropTypes.func.isRequired,
  };

  const cellSelection = ({ row }) => (
    <div>
      <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
    </div>
  );

  cellSelection.propTypes = {
    row: PropTypes.objectOf().isRequired,
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable({ columns, data }, usePagination, useRowSelect, (hooks) => {
    hooks.visibleColumns.push((visibleColumns) => [
      {
        id: 'selection',
        Header: headerSelection,
        Cell: cellSelection,
      },
      ...visibleColumns,
    ]);
  });

  useEffect(() => {
    handleSelectedRows(selectedRowIds);
  }, [selectedRowIds, handleSelectedRows]);

  return (
    <div className="table">
      <table className="table__table" {...getTableProps()}>
        <thead className="table__header">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="table__body" {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <TablePagination
        total={data.length}
        gotoPage={gotoPage}
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
        pageCount={pageCount}
        pageOptions={pageOptions}
        pageSize={pageSize}
      />
    </div>
  );
});

Table.propTypes = {
  columns: PropTypes.objectOf().isRequired,
  data: PropTypes.objectOf().isRequired,
  handleSelectedRows: PropTypes.func.isRequired,
};

export default Table;
