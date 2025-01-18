import { TShip } from "@/api/shipsAPI"
import { LegacyRef } from "react"

export type TShipUIProps = {
    data: TShip,
    isVisible: boolean,
    ref: LegacyRef<HTMLDivElement>,
    onClick: () => void,
    handleMouseEnter: () => void,
    handleMouseMove: (e: React.MouseEvent<HTMLHeadingElement>) => void,
    handleMouseLeave: () => void,
    isCharVisible: boolean,
    cursorPosition: {x: number, y: number},
}