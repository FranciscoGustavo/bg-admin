import React, { useMemo } from 'react';
import { useTable, useRowSelect } from 'react-table';
import './styles.css';

const Table = ({ handleColumns, handleData }) => {

  const columns = useMemo(() => handleColumns, []);
  const data = useMemo(() => handleData, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table className="table" {...getTableProps()}>
          
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
        {rows.map((row, i) => {
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
  );
}

export default Table; 