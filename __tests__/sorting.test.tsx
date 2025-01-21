import { render, screen, fireEvent } from '@testing-library/react';
import { TSortingIOProps } from "../src/components/ui/sorting-ui/types";
import React from "react";
import { SortingUI } from '../src/components/ui/sorting-ui/sorting-ui';

const mockProps: TSortingIOProps = {
    isOpen: false,
    options: [],
    onClick: jest.fn(),
    handleSort: jest.fn(),
}

describe('Проверка рендера компонента SortingUI', () => {
    it('Проверка простого рендера компонента', () => {
        render(<SortingUI {...mockProps}/>)

        // Проверяем, что компонент отрендерился
        expect(screen.getByText('Сортировать')).toBeInTheDocument();
    });

    it('Проверка вызова onClick при клике на кнопку Сортировать', () => {
        render(<SortingUI {...mockProps}/>);
        const button = screen.getByText('Сортировать') as HTMLButtonElement;
        fireEvent.click(button);

        //Проверяем, что onClick был вызван
        expect(mockProps.onClick).toHaveBeenCalled();
    })

    it('Проверка отображаения дропдауна', () => {
        const newProps = {
          ...mockProps,
          isOpen: true,
          options: [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
          ],
        };
    
        render(<SortingUI {...newProps} />);
    
        // Проверяем, что выпадающий список отображается
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });
    
    it('Проверка вызова handleSort при изменении значения в дропдауне', () => {
        const newProps = {
          ...mockProps,
          isOpen: true,
          options: [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
          ],
        };
    
        render(<SortingUI {...newProps} />);
    
        // Кликаем по первому элементу списка
        fireEvent.click(screen.getByText('Option 1'));
    
        // Проверяем, что обработчик фильтрации был вызван
        expect(mockProps.handleSort).toHaveBeenCalledWith('1');
    });
});