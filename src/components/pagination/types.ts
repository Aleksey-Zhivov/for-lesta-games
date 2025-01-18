export type TPaginationProps = {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    maxVisiblePages: number;
    onPageChange: (page: number) => void;
  };