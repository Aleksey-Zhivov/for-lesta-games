import { TShip } from "@/api/shipsAPI"
import { LegacyRef } from "react"

export type TShipUIProps = {
    data: TShip,
    isVisible: boolean,
    ref: LegacyRef<HTMLDivElement>
}