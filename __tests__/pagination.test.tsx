import { render, screen, fireEvent } from '@testing-library/react';
import { PaginationUI } from '../src/components/ui/pagination-ui/pagination-ui';
import React from 'react';
import { TPaginationUIProps } from '../src/components/ui/pagination-ui/types';

let mockProps: TPaginationUIProps;

beforeEach(() => {
  mockProps = {
    paginationRange: [1, 2, 3, "...", 6],
    totalPages: 6,
    currentPage: 3,
    handlePrevious: jest.fn(),
    handleNext: jest.fn(),
    handlePageClick: jest.fn(),
  };
});

describe('Проверка рендера компонента PaginationUI', () => {
  it('Проверка простого рендера компонента', () => {
    render(<PaginationUI {...mockProps} />);

    // Проверяем, что компонент отрендерился
    expect(screen.getByText('Назад')).toBeInTheDocument();
    mockProps.paginationRange.forEach((page) => {
      if (page === '...') {
        expect(screen.getByText('...')).toBeInTheDocument();
      } else {
        expect(screen.getByText(String(page))).toBeInTheDocument();
      }
    });
    expect(screen.getByText('Вперед')).toBeInTheDocument();
  });

  it('Проверка состояния кнопок Назад и Вперед', () => {
    render(<PaginationUI {...mockProps} />);

    // Кнопка Назад должна быть включена, если currentPage > 1
    const backButton = screen.getByText('Назад');
    expect(backButton).not.toBeDisabled();

    // Кнопка Вперед должна быть включена, если currentPage < totalPages
    const nextButton = screen.getByText('Вперед');
    expect(nextButton).not.toBeDisabled();
  });

  it('Проверка состояния кнопок на последней странице', () => {
    const propsOnLastPage = { ...mockProps, currentPage: mockProps.totalPages };
    render(<PaginationUI {...propsOnLastPage} />);

    // Кнопка Вперед должна быть отключена на последней странице
    const nextButton = screen.getByText('Вперед');
    expect(nextButton).toBeDisabled();

    // Кнопка Назад должна быть включена на последней странице
    const backButton = screen.getByText('Назад');
    expect(backButton).not.toBeDisabled();
  });

  it('Проверка вызова обработчиков при клике', () => {
    render(<PaginationUI {...mockProps} />);

    // Клик по отключенной кнопке Назад
    const backButton = screen.getByText('Назад') as HTMLButtonElement;
    fireEvent.click(backButton);
    expect(mockProps.handlePrevious).toHaveBeenCalledTimes(1);

    // Клик по кнопке Вперед
    const nextButton = screen.getByText('Вперед') as HTMLButtonElement;
    fireEvent.click(nextButton);
    expect(mockProps.handleNext).toHaveBeenCalledTimes(1);

    // Клик по кнопке страницы
    const pageButton = screen.getByText('2') as HTMLButtonElement;
    fireEvent.click(pageButton);
    expect(mockProps.handlePageClick).toHaveBeenCalledWith(2);
  });

  it('Проверка наличия многоточий', () => {
    render(<PaginationUI {...mockProps} />);

    // Проверка отображения многоточия
    const ellipsis = screen.getByText('...')  as HTMLSpanElement;
    expect(ellipsis).toBeInTheDocument();
  });
});
