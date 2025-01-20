import { FC, forwardRef } from "react";
import { TShipUIProps } from "./types";
import './ship-ui.scss';
import { TooltipUI } from "../tooltoip-ui/tooltip-ui";

export const ShipUI: FC<TShipUIProps> = forwardRef(( props, ref ) => {
    return (
        <div className="ship_wrapper" ref={ref}>
            {props.isVisible && (
                <div 
                    onClick={props.onClick}
                    onMouseEnter={props.handleMouseEnter}
                    onMouseMove={props.handleMouseMove}
                    onMouseLeave={props.handleMouseLeave}
                    className="ship"
                >
                    <img 
                        src={props.data.icons.medium === null 
                            ? props.data.icons.large 
                            : props.data.icons.medium} 
                        alt={`Корабль ${props.data.title}`} 
                        className="ship__image"
                    />
                    <h4 
                        className="ship__title"
                    >
                        {props.data.title}
                    </h4>
                    <span className="ship__characteristic">{props.data.type.title} {props.level} уровня</span>
                    <div className="ship__characteristic">
                        <span className="">Нация</span>
                        <div className="ship__characteristic-nation">
                            {props.data.nation.title}
                            <img src={props.data.nation.icons.large 
                                ? props.data.nation.icons.large 
                                : props.data.nation.icons.small} 
                                alt="Изображение флага" 
                                className="ship__characteristic-nation_image"
                            /> 
                        </div>
                        
                    </div>
                </div>
            )}
        </div>
    );
});