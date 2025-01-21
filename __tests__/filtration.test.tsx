import { render, screen, fireEvent } from '@testing-library/react';
import { FiltrationUI } from '../src/components/ui/filtration-ui/filtration-ui';
import React from 'react';
import { TFiltrationUIProps } from '../src/components/ui/filtration-ui/types';

const mockProps: TFiltrationUIProps = {
  filterText: '',
  handleInputChange: jest.fn(),
  handleClearFilter: jest.fn(),
  onClick: jest.fn(),
  isOpen: false,
  options: [],
  handleFilter: jest.fn(),
};

describe('Проверка рендера компонента FiltrationUI', () => {
  it('Проверка простого рендера компонента', () => {
    render(<FiltrationUI {...mockProps} />);
    
    // Проверяем, что компонент отрендерился
    expect(screen.getByPlaceholderText('Искать...')).toBeInTheDocument();
    expect(screen.getByText('Фильтровать')).toBeInTheDocument();
  });

  it('Проверка рендера кнопки очистки инпута', () => {
    // Мокаем props с текстом фильтра
    const newProps = { ...mockProps, filterText: 'test' };

    render(<FiltrationUI {...newProps} />);

    // Проверяем, что кнопка очистки отображается
    expect(screen.getByLabelText('Очистить поле ввода')).toBeInTheDocument();
  });

  it('Проверка вызова handleInputChange при изменении текста в инпуте', () => {
    render(<FiltrationUI {...mockProps} />);

    const input = screen.getByPlaceholderText('Искать...')  as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });

    // Проверяем, что функция обработчик была вызвана
    expect(mockProps.handleInputChange).toHaveBeenCalled();
  });

  it('Проверка вызова handleClearFilter при клике на кнопку очистки инпута', () => {
    const newProps = { ...mockProps, filterText: 'test' };

    render(<FiltrationUI {...newProps} />);
    const clearButton = screen.getByLabelText('Очистить поле ввода') as HTMLButtonElement;
    fireEvent.click(clearButton);

    // Проверяем, что функция очистки была вызвана
    expect(mockProps.handleClearFilter).toHaveBeenCalled();
  });

  it('Проверка вызова onClick при клике на кнопку Фильтровать', () => {
    render(<FiltrationUI {...mockProps} />);
    const button = screen.getByText('Фильтровать') as HTMLButtonElement;
    fireEvent.click(button);

    // Проверяем, что onClick был вызван
    expect(mockProps.onClick).toHaveBeenCalled();
  });

  it('Проверка отображаения дропдауна', () => {
    const newProps = {
      ...mockProps,
      isOpen: true,
      options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
      ],
    };

    render(<FiltrationUI {...newProps} />);

    // Проверяем, что выпадающий список отображается
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('Проверка вызова handleFilter при изменении значения в дропдауне', () => {
    const newProps = {
      ...mockProps,
      isOpen: true,
      options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
      ],
    };

    render(<FiltrationUI {...newProps} />);

    // Кликаем по первому элементу списка
    fireEvent.click(screen.getByText('Option 1'));

    // Проверяем, что обработчик фильтрации был вызван
    expect(mockProps.handleFilter).toHaveBeenCalledWith('1');
  });
});
