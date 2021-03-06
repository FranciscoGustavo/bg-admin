import React from 'react';
import PropTypes from 'prop-types';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import './styles.css';

const TablePagination = ({
  total,
  gotoPage,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  setPageSize,
  pageIndex,
  pageCount,
  pageOptions,
  pageSize,
}) => (
  <div className="tablePagination">
    <div className="tablePagination__left">
      <span className="tablePagination__detailCount">
        <strong>{(pageIndex + 1) * pageSize - pageSize + 1}</strong>
        <RemoveOutlinedIcon />
        <strong>
          {(pageIndex + 1) * pageSize} de
          {total}
        </strong>
      </span>

      <input
        type="number"
        className="tablePagination__input"
        defaultValue={pageIndex + 1}
        onChange={(e) => {
          const page = e.target.value ? Number(e.target.value - 1) : 0;
          gotoPage(page);
        }}
      />

      <select
        className="tablePagination__select"
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSizeOption) => (
          <option key={pageSizeOption} value={pageSizeOption}>
            Mostrar {pageSizeOption}
          </option>
        ))}
      </select>
    </div>
    <div className="tablePagination__right">
      <button
        type="button"
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      >
        <ArrowBackIosOutlinedIcon />
      </button>
      <button
        type="button"
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        <ArrowBackOutlinedIcon />
      </button>
      <span>
        {pageIndex + 1} de
        {pageOptions.length}
      </span>
      <button type="button" onClick={() => nextPage()} disabled={!canNextPage}>
        <ArrowForwardOutlinedIcon />
      </button>
      <button
        type="button"
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      >
        <ArrowForwardIosOutlinedIcon />
      </button>
    </div>
  </div>
);

TablePagination.propTypes = {
  total: PropTypes.number.isRequired,
  gotoPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  canPreviousPage: PropTypes.bool.isRequired,
  canNextPage: PropTypes.bool.isRequired,
  setPageSize: PropTypes.func.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  pageOptions: PropTypes.arrayOf().isRequired,
  pageSize: PropTypes.number.isRequired,
};

export default TablePagination;
