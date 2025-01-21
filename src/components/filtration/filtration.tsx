import { FC, useState } from "react";
import { TOption } from "../ui/sorting-ui/types";
import { FiltrationUI } from "../ui/filtration-ui/filtration-ui";
import { TFiltrationProps } from "./types";

export const Filtration: FC<TFiltrationProps> = ( props ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filterField, setFilterField] = useState<string>("title");
    const [filterText, setFilterText] = useState<string>("");

    const options: TOption[] = [
        { label: "Название", value: "title" },
        { label: "Уровень", value: "level" },
        { label: "Тип", value: "type.title" },
        { label: "Нация", value: "nation.title" },
    ];

    const onClick = () => setIsOpen(!isOpen);

    const handleFilterFieldChange = (field: string) => {
        setFilterField(field);
        setIsOpen(false);
        if (filterText) {
            props.onFilterChange(field, filterText);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFilterText(value);
        props.onFilterChange(filterField, value);
    };

    const handleClearFilter = () => {
        setFilterText("");
        props.onFilterChange(filterField, "");
    };

    return (
      <div>
          <FiltrationUI 
              isOpen={isOpen}
              options={options}
              filterText={filterText}
              handleInputChange={handleInputChange}
              onClick={onClick}
              handleFilter={handleFilterFieldChange}
              handleClearFilter={handleClearFilter}
          />
      </div>
    );
};
