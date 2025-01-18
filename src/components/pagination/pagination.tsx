import { FC } from "react";
import { TPaginationProps } from "./types";
import { PaginationUI } from "../ui/pagination-ui/pagination-ui";
import { usePagination } from "@/hooks/usePagination";

export const Pagination: FC<TPaginationProps> = (props) => {
  const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);
  const paginationRange = usePagination(totalPages, props.currentPage, props.maxVisiblePages);

  const handlePrevious = () => {
    if (props.currentPage > 1) {
      props.onPageChange(props.currentPage - 1);
    }
  };

  const handleNext = () => {
    if (props.currentPage < totalPages) {
      props.onPageChange(props.currentPage + 1);
    }
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === "number") {
      props.onPageChange(page);
    }
  };

  return (
    <PaginationUI
      paginationRange={paginationRange}
      totalPages={totalPages}
      currentPage={props.currentPage}
      handlePrevious={handlePrevious}
      handleNext={handleNext}
      handlePageClick={handlePageClick}
    />
  );
};
