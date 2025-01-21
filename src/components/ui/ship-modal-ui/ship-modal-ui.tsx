import { FC } from "react";
import { TShipModalUIProps } from "./types";
import './ship-modal-ui.scss';

export const ShipModalUI: FC<TShipModalUIProps> = ( props ) => (
    <div className="ship-modal">
        <div className="ship-modal__characteristic">
            <img 
                src={props.img} 
                alt={`Изображение корабля: ${props.name}`} 
                className="ship-modal__characteristic-image"/>
            <div className="ship-modal__characteristic-block">
                <h3 className="ship-modal__characteristic-block_title">{props.name}</h3>
                <div className="ship-modal__characteristic-block_item">
                    <span className="item__label">Тип</span>
                    <span className="item__value">{props.type}</span>
                </div>
                <div className="ship-modal__characteristic-block_item">
                    <span className="item__label">Нация</span>
                    <span className="item__value">{props.nation}</span>
                </div>
                <div className="ship-modal__characteristic-block_item">
                    <span className="item__label">Уровень</span>
                    <span className="item__value">{props.level}</span>
                </div>
            </div>
        </div>
        <p className="ship-modal__description">{props.description}</p>
    </div>
)