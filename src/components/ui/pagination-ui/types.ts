export type TPaginationUIProps = {
    paginationRange: (number | string)[];
    totalPages: number,
    currentPage: number;
    handlePrevious: () => void;
    handleNext: () => void;
    handlePageClick: (page: number | string) => void;
  };