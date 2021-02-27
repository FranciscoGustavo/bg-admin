import React, { useEffect, useMemo, useRef, forwardRef } from 'react';
import { usePagination, useRowSelect, useTable } from 'react-table';
import './styles.css';

const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolveRef = ref || defaultRef;

    useEffect(() => {
      resolveRef.current.indeterminate = indeterminate;
    }, [resolveRef, indeterminate]);

    return (
      <input type="checkbox" ref={resolveRef} {...rest} />
    );
  }
);

const Table = ({ handleColumns, handleData }) => {

  const columns = useMemo(() => handleColumns, [handleColumns]);
  const data = useMemo(() => handleData, [handleData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
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
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    { columns, data },
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()}/>
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()}/>
            </div>
          ),
        },
        ...columns,
      ])
    }
  );

  console.log({
    selectedFlatRows,
    selectedRowIds
  });

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
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            )
          })}
        </tbody>

      </table>
      
      <div className="table__pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
          
        <span>
          Page
          <strong>{pageIndex + 1} of {pageOptions.length}</strong>
        </span>

        <span>
          | Go to page:
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value - 1) : 0;
              gotoPage(page)
            }}
          />
        </span>

        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>

      </div>

    </div>
  );
}

export default Table; 