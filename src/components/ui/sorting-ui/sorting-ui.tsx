import { FC } from "react";
import { TSortingIOProps } from "./types";
import './sorting-ui.scss';

export const SortingUI: FC<TSortingIOProps> = ( props ) => (
    <div className="sorting">
        <button className="sorting__button" onClick={props.onClick}>
            Сортировать
        </button>
        {props.isOpen && (
            <ul className="sorting__dropdown">
            {props.options.map((option) => (
                <li
                    key={option.value}
                    className="sorting__option"
                    onClick={() => props.handleSort(option.value)}
                >
                    {option.label}
                </li>
            ))}
        </ul>)}
    </div>
)