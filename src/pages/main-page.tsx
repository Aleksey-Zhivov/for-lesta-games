import { Ships } from "../components/ships/ships";
import { FC, useState } from "react";
import { Pagination } from "../components/pagination/pagination";
import { useCustomSelector } from "@/utils/store";
import { RadioUI } from "@/components/ui/radio-ui/radio-ui";
import './main-page.scss';

export const MainPage: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const totalItems = useCustomSelector((store) => store.ships.vehicles).length;
    const ITEMS_PER_PAGE = [20, 40, 80];

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const handleItemsPerPageChange = (value: number) => {
        setItemsPerPage(value);
        setCurrentPage(1); 
    };

    return (
        <main className="ships__page">
            <Ships currentPage={currentPage} itemsPerPage={itemsPerPage} />
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
            </div>
        </main>
    );
};
