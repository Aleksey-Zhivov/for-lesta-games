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
                <table className="ship-modal__characteristic-block_table">
                    <tr>
                        <th>Тип: </th>
                        <th>{props.type}</th>
                    </tr>
                    <tr>
                        <th>Нация: </th>
                        <th>{props.nation}</th>
                    </tr>
                    <tr>
                        <th>Уровень: </th>
                        <th>{props.level}</th>
                    </tr>
                </table>
            </div>
        </div>
        <p className="ship-modal__description">{props.description}</p>
    </div>
)