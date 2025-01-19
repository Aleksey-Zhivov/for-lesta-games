import { FC } from "react";
import { TTooltipUIProps } from "./types";
import './tooltip-ui.scss';
import { useLocation } from "react-router-dom";

export const TooltipUI: FC<TTooltipUIProps> = ( props ) => {
  const location = useLocation();
  const isModalOpen = location.state?.isModalOpen;
  if (!props.ship) return null;

  return (
    !isModalOpen &&
    <div
      className="tooltip"
      style={{ top: props.position.y, left: props.position.x }}
    >
      <h3 className="tooltip__title">{props.ship.title}</h3>
      <div className="tooltip__details">
        <p>Класс: {props.ship.type.title}</p>
        <p>Нация: {props.ship.nation.title}</p>
        <p>Уровень: {props.ship.level}</p>
      </div>
    </div>
  );
}