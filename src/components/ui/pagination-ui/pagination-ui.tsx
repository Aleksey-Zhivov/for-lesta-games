import { FC } from "react";
import { TPaginationUIProps } from "./types";
import "./pagination-ui.scss";

export const PaginationUI: FC<TPaginationUIProps> = (props) => (
  <div className="pagination">
    <button
      onClick={props.handlePrevious}
      disabled={props.currentPage === 1}
      className="pagination__button"
    >
        Назад
    </button>

    {props.paginationRange.map((page, index) => {
      if (page === "...") {
        return (
          <span key={`ellipsis-${index}`} className="pagination__ellipsis">
            {page}
          </span>
        );
      }

      return (
        <button
          key={page}
          onClick={() => props.handlePageClick(page)}
          className={`pagination__button ${
            props.currentPage === page ? "active" : ""
          }`}
        >
          {page}
        </button>
      );
    })}

    <button
      onClick={props.handleNext}
      disabled={props.currentPage === props.totalPages}
      className="pagination__button"
    >
        Вперед
    </button>
  </div>
);
