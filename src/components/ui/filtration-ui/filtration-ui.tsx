import { FC } from "react";
import { TFiltrationUIProps } from "./types";
import './filtration-ui.scss';

export const FiltrationUI: FC<TFiltrationUIProps> = ( props ) => (
    <div className="filtration">
        <div className="filtration__input-wrapper">
            <input
                type="text"
                placeholder="Искать..."
                value={props.filterText}
                onChange={props.handleInputChange}
                className="filtration__input"
            />
            {props.filterText && (
                <button
                    className="filtration__clear-button"
                    onClick={props.handleClearFilter}
                    aria-label="Очистить поле ввода"
                >
                    &times;
                </button>
            )}
        </div>
        <button
            className="filtration__button"
            onClick={props.onClick}
        >
            Фильтровать
        </button>
        {props.isOpen && (
            <ul className="filtration__dropdown">
                {props.options.map((option) => (
                    <li
                        key={option.value}
                        className="filtration__option"
                        onClick={() => props.handleFilter(option.value)}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
            )}
    </div>
)