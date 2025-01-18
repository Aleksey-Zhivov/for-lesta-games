import { useCustomSelector } from "@/utils/store";
import { FC } from "react";
import './ships.scss';
import { Ship } from "../ship/ship";

export const Ships: FC = () => {
    const ships = useCustomSelector((store) => store.ships.vehicles);
    const isLoading = useCustomSelector((store) => store.ships.isLoading);

    return (
        <section className="ships">
            {!isLoading ? 
                ships.map((ship) => (
                    <Ship data={ship} key={ship.id}/>
                )) :
            <span className="ships__loading">Загружаю список кораблей...</span>}
        </section>
    )
}
