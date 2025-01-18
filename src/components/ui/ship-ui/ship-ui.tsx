import { FC, forwardRef, useEffect, useState } from "react";
import { TShipUIProps } from "./types";
import './ship-ui.scss';

export const ShipUI: FC<TShipUIProps> = forwardRef(( props, ref ) => {
    return (
        <div className="ship" ref={ref}>
            {props.isVisible && (
                <>
                    <img src={props.data.icons.large} alt="Картинка корабля" className="ship__image"/>
                    <h4 className="ship__title">{props.data.title}</h4>
                </>
            )}
        </div>
    );
});