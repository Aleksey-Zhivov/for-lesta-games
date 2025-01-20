import { TShip } from "@/api/shipsAPI";

export type TShipProps = {
    data: TShip,
    id: string,
}

export enum RomanNumerals {
    M = 1000,
    CM = 900,
    D = 500,
    CD = 400,
    C = 100,
    XC = 90,
    L = 50,
    XL = 40,
    X = 10,
    IX = 9,
    V = 5,
    IV = 4,
    I = 1
}