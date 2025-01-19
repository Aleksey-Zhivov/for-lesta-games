import { FC, forwardRef } from "react";
import { TShipUIProps } from "./types";
import './ship-ui.scss';
import { TooltipUI } from "../tooltoip-ui/tooltip-ui";
import { useLocation } from "react-router-dom";

export const ShipUI: FC<TShipUIProps> = forwardRef(( props, ref ) => {
    return (
        <div className="ship" ref={ref}>
            {props.isVisible && (
                <div 
                    onClick={props.onClick}
                    onMouseEnter={props.handleMouseEnter}
                    onMouseMove={props.handleMouseMove}
                    onMouseLeave={props.handleMouseLeave}    
                >
                    <img src={props.data.icons.large} alt={`Корабль ${props.data.title}`} className="ship__image"/>
                    <h4 
                        className="ship__title"
                    >
                        {props.data.title}
                    </h4>
                    {props.tooltipVisible && (
                        <TooltipUI 
                            ship={props.data} 
                            isVisible={props.isVisible} 
                            position={props.tooltipPosition}
                        />
                    )}
                </div>
            )}
        </div>
    );
});