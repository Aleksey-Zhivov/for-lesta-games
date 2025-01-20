import { useState, useEffect } from "react";
import { TShipWithId } from "@/utils/slices/shipsSlice";

export const useSortedAndFilteredShips = (ships: TShipWithId[]) => {
    const [filteredShips, setFilteredShips] = useState<TShipWithId[]>(ships);
    const [sortedShips, setSortedShips] = useState<TShipWithId[]>(ships);

    const getValueByPath = (obj: any, path: string): any => {
        return path.split('.').reduce((acc, key) => acc && acc[key], obj);
    };

    useEffect(() => {
        setFilteredShips(ships);
        setSortedShips(ships);
    }, [ships]);

    const sortShips = (field: string) => {
        const sorted = [...filteredShips].sort((a, b) => {
            const valueA = getValueByPath(a, field);
            const valueB = getValueByPath(b, field);

            if (valueA > valueB) return 1;
            if (valueA < valueB) return -1;
            return 0;
        });
        setSortedShips(sorted);
    };

    const filterShips = (field: string, text: string) => {
        const filtered = ships.filter((ship) => {
            const value = getValueByPath(ship, field);
            return value?.toString().toLowerCase().includes(text.toLowerCase());
        });
        setFilteredShips(filtered);
        setSortedShips(filtered);
    };

    return {
        sortedShips,
        sortShips,
        filterShips,
    };
};
