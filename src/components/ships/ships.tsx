import { useCustomSelector } from "@/utils/store";
import { FC } from "react";
import './ships.scss';
import { Ship } from "../ship/ship";
import { ShipSkeleton } from "../ui/skeleton-ui/ship-skeleton";

export const Ships: FC<TShipsProps> = ( props ) => {
    const ships = useCustomSelector((store) => store.ships.vehicles);
    const isLoading = useCustomSelector((store) => store.ships.isLoading);

    const startIndex = (props.currentPage - 1) * props.itemsPerPage;
    const endIndex = startIndex + props.itemsPerPage;

    const paginatedShips = ships.slice(startIndex, endIndex);

    return (
        <section className="ships">
        {isLoading
          ? 
          Array.from({ length: 8 }, (_, i) => <ShipSkeleton key={i} />)
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
