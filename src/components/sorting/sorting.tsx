import { FC, useState } from "react";
import { SortingUI } from "../ui/sorting-ui/sorting-ui";
import { TOption } from "../ui/sorting-ui/types";
import { TSortingProps } from "./types";

export const Sorting: FC<TSortingProps> = ( props ) => {
  const [isOpen, setIsOpen] = useState(false);
  const options: TOption[] = [
    { label: "Название", value: "title" },
    { label: "Уровень", value: "level" },
    { label: "Тип", value: "type.title" },
    { label: "Нация", value: "nation.title" },
  ];

  const onClick = () => setIsOpen(!isOpen);

  const handleSort = (field: string) => {
    props.onSortChange(field);
    setIsOpen(false);
  };

  return (
    <SortingUI 
        isOpen={isOpen}
        options={options}
        onClick={onClick}
        handleSort={handleSort}
    />
  );
};
