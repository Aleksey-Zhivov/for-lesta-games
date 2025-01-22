import { TShip } from "../../../api/shipsAPI"
import { LegacyRef } from "react"

export type TShipUIProps = {
    data: TShip,
    level: string,
    isVisible: boolean,
    ref: LegacyRef<HTMLDivElement>,
    onClick: () => void,
    handleMouseEnter: (e: React.MouseEvent) => void,
    handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void,
    handleMouseLeave: () => void,
    tooltipVisible: boolean,
    tooltipPosition: {x: number, y: number},
}