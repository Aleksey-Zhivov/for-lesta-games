import { TShip } from "@/api/shipsAPI";

export type TTooltipUIProps = {
    ship: TShip | null,
    isVisible: boolean,
    position: { x: number; y: number },
}