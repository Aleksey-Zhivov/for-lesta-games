import { FC } from "react";
import { TRadioUIProps } from "./types";
import './radio-ui.scss';

export const RadioUI: FC<TRadioUIProps> = ( props ) => (
    <div className="controls">
        <span className="controls__text">Элементов на странице:</span>
        <div className="controls__radio-group">
            {props.ITEMS_PER_PAGE.map((value) => (
                <label key={value} className="controls__radio-group_label">
                    <input
                        type="radio"
                        name="itemsPerPage"
                        value={value}
                        checked={props.itemsPerPage === value}
                        onChange={() => props.handleItemsPerPageChange(value)}
                        className="controls__radio-group_input"
                    />
                    <span className="controls__radio-group_text">{value}</span>
                </label>
            ))}
        </div>
    </div>
)