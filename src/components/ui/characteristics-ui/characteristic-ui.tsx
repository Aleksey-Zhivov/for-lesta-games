import { FC } from "react";
import { TCharacteristicUIProps } from "./types";

export const CharacteristicUI: FC<TCharacteristicUIProps> = ( props ) => (
    <div className="characteristic">
        <h3 className="characteristic__title">Характеристики</h3>
        <span className="characteristic__name">{props.name}</span>
    </div>
)