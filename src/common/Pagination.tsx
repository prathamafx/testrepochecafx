import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "../hooks/usePagination";
import "./pagination.scss";
import PropTypes from "prop-types";
import { PaginationProps } from "../interfaces";
const Pagination = (props: PaginationProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
    onPageSizeChange,
    otherHtml,
  } = props;

  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange?.length < 1) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const onChangePageSize = (event) => {
    onPageSizeChange(Number(event.target.value));
  };

  const lastPage =
    paginationRange && paginationRange[paginationRange?.length - 1];
  if (lastPage) {
    return (
      <>
        <div className="items-center p-2 pt-0 pagination-responsive-container">
          <div className="w-24">
            <select
              id="state"
              name="state"
              autoComplete="state"
              value={pageSize}
              onChange={onChangePageSize}
              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-themecolor focus:border-themecolor sm:text-sm"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          {otherHtml ? <div>{otherHtml}</div> : ""}
          <div className="">
            <ul
              className={classnames("pagination-container", {
                [className]: className,
              })}
            >
              <li
                className={classnames("pagination-item", {
                  disabled: currentPage === 1,
                })}
                onClick={onPrevious}
              >
                <span className="text-sm font-medium px-2">PREVIOUS</span>
              </li>
              {paginationRange?.map((pageNumber) => {
                if (pageNumber === DOTS) {
                  return <li className="pagination-item dots">&#8230;</li>;
                }

                return (
                  <li
                    key={Math.random()}
                    className={classnames("pagination-item", {
                      selected: pageNumber === currentPage,
                    })}
                    onClick={() => onPageChange(pageNumber)}
                  >
                    {pageNumber}
                  </li>
                );
              })}
              <li
                className={classnames("pagination-item", {
                  disabled: currentPage === lastPage,
                })}
                onClick={onNext}
              >
                <span className="text-sm font-medium px-2">NEXT</span>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  } else return <></>;
};

export default Pagination;

Pagination.prototype = {
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  className: PropTypes.string,
};
Pagination.defaultProps = {
  totalCount: 10,
  siblingCount: 1,
  currentPage: 1,
  pageSize: 10,
};
