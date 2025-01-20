import { useCustomSelector } from "@/utils/store";
import { FC } from "react";
import './ships.scss';
import { Ship } from "../ship/ship";
import { ShipSkeleton } from "../ui/skeleton-ui/ship-skeleton";
import { TShipsProps } from "./types";

export const Ships: FC<TShipsProps> = ( props ) => {
    const isLoading = useCustomSelector((store) => store.ships.isLoading);

    const startIndex = (props.currentPage - 1) * props.itemsPerPage;
    const endIndex = startIndex + props.itemsPerPage;

    const paginatedShips = props.ships.slice(startIndex, endIndex);

    return (
        <section className="ships">
        {isLoading
          ? 
          Array.from({ length: 20 }, (_, i) => <ShipSkeleton key={i} />)
            : paginatedShips.map((ship) => (
                <Ship 
                    data={ship} 
                    key={ship.id} 
                    id={ship.id}
                />
            ))}
        </section>
    );
};
