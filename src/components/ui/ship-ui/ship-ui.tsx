import { FC, forwardRef } from "react";
import { TShipUIProps } from "./types";
import './ship-ui.scss';
import { CharacteristicUI } from "../characteristics-ui/characteristic-ui";

export const ShipUI: FC<TShipUIProps> = forwardRef(( props, ref ) => {
    return (
        <div className="ship" ref={ref}>
            {props.isVisible && (
                <div onClick={props.onClick}>
                    <img src={props.data.icons.large} alt={`Корабль ${props.data.title}`} className="ship__image"/>
                    <h4 
                        className="ship__title"
                        onMouseEnter={props.handleMouseEnter}
                        onMouseMove={props.handleMouseMove}
                        onMouseLeave={props.handleMouseLeave}
                    >
                        {props.data.title}
                    </h4>
                    {props.isCharVisible && (
                        <div
                            className="characteristic-popup"
                            style={{
                                top: props.cursorPosition.y + 10,
                                left: props.cursorPosition.x + 10,
                            }}
                        >
                            <CharacteristicUI name={props.data.nation.title} />
                      </div>
                    )}
                </div>
            )}
        </div>
    );
});