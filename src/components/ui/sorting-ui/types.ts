export type TOption = {
    label: string,
    value: string,
}

export type TSortingIOProps = {
    isOpen: boolean,
    options: TOption[],
    onClick: () => void,
    handleSort: (field: string) => void
};
