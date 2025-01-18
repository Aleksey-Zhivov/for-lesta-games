import { useMemo } from "react";

export const usePagination = (
  totalPages: number,
  currentPage: number,
  maxVisiblePages: number
) => {
  return useMemo(() => {
    const halfVisible = Math.floor(maxVisiblePages / 2);
    const start = 1;
    const end = totalPages;

    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const left = Math.max(currentPage - halfVisible, start + 1);
    const right = Math.min(currentPage + halfVisible, end - 1);

    const pages: (number | string)[] = [];
    pages.push(start);

    if (left > start + 1) {
      pages.push("...");
    }

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < end - 1) {
      pages.push("...");
    }

    pages.push(end);
    return pages;
  }, [totalPages, currentPage, maxVisiblePages]);
};
