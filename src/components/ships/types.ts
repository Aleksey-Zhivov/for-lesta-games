import { TShipWithId } from "@/utils/slices/shipsSlice";

export type TShipsProps = {
    currentPage: number;
    itemsPerPage: number;
    ships: TShipWithId[],
}
