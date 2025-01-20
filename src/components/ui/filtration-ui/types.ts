import { TOption } from "../sorting-ui/types"

export type TFiltrationUIProps = {
    isOpen: boolean,
    options: TOption[],
    filterText: string,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onClick: () => void,
    handleFilter: (field: string) => void    
}