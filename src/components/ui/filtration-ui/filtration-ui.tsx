import { FC } from "react";
import { TFiltrationUIProps } from "./types";
import './filtration-ui.scss';

export const FiltrationUI: FC<TFiltrationUIProps> = ( props ) => (
    <>
        <div className="filtration">
            <input
                type="text"
                placeholder="Искать... "
                value={props.filterText}
                onChange={props.handleInputChange}
                className="filtration__input"
            />
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
    </>

)