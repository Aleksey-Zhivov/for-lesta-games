import { TOption } from "../sorting-ui/types"

export type TFiltrationUIProps = {
    isOpen: boolean,
    options: TOption[],
    onClick: () => void,
    handleFilter: (field: string) => void    
}