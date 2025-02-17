import { FC, useState } from "react";
import { useCustomSelector } from "../../utils/store";
import { RadioUI } from "../../components/ui/radio-ui/radio-ui";
import './ships-page.scss';
import { Sorting } from "../../components/sorting/sorting";
import { Filtration } from "../../components/filtration/filtration";
import { useSortedAndFilteredShips } from "../../hooks/useSortAndFilter";
import { Ships } from "../../components/ships/ships";
import { Pagination } from "../../components/pagination/pagination";
import { ShipSkeleton } from "../../components/ui/skeleton-ui/ship-skeleton";

export const MainPage: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const ships = useCustomSelector((store) => store.ships.vehicles);
    const isloading = useCustomSelector((store) => store.ships.isLoading);
    const { sortedShips, sortShips, filterShips } = useSortedAndFilteredShips(ships);
    const totalItems = sortedShips.length;
    const ITEMS_PER_PAGE = [20, 40, 80];

    const handlePageChange = (newPage: number) => setCurrentPage(newPage);

    const handleItemsPerPageChange = (value: number) => {
        setItemsPerPage(value);
        setCurrentPage(1);
    };

    const handleSortChange = (field: string) => sortShips(field);

    const handleFilterChange = (field: string, text: string) => filterShips(field, text);

    return (
        <main className="ships__page">
            <div className="ships__page-panel">
                <Sorting onSortChange={handleSortChange}/>
                <Filtration onFilterChange={handleFilterChange}/>
            </div>
            <section className="ships">
                {isloading 
                    ?  Array.from({ length: 20 }, (_, i) => <ShipSkeleton key={i} />)
                    : <Ships ships={sortedShips} currentPage={currentPage} itemsPerPage={itemsPerPage} />
                }
            </section>
            {totalItems > itemsPerPage &&
            <div className="ships__page-pagination">
                <Pagination
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    totalItems={totalItems}
                    onPageChange={handlePageChange} 
                    maxVisiblePages={6}            
                />
                <RadioUI 
                    ITEMS_PER_PAGE={ITEMS_PER_PAGE}
                    itemsPerPage={itemsPerPage}
                    handleItemsPerPageChange={handleItemsPerPageChange}
                />
            </div>}
        </main>
    );
};
