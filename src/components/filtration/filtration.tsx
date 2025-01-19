import { FC, useState } from "react";
import { TOption } from "../ui/sorting-ui/types";
import { FiltrationUI } from "../ui/filtration-ui/filtration-ui";
import { TFiltrationProps } from "./types";

export const Filtration: FC<TFiltrationProps> = ( props ) => {
  const [isOpen, setIsOpen] = useState(false);
  const options: TOption[] = [
    { label: "Название", value: "title" },
    { label: "Уровень", value: "level" },
    { label: "Тип", value: "type.title" },
    { label: "Нация", value: "nation.title" },
  ];

  const onClick = () => setIsOpen(!isOpen);

  const handleFilter = (field: string) => {
    props.onFilterChange(field);
    setIsOpen(false);
  };

  return (
    <FiltrationUI 
        isOpen={isOpen}
        options={options}
        onClick={onClick}
        handleFilter={handleFilter}
    />
  );
};
