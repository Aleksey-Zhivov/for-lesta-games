import { getShips, TShip } from "@/api/shipsAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

interface TShipWithId extends TShip {
  id: string;
} 

type TInitialState = {
  vehicles: TShipWithId[],
  isLoading: boolean,
  error: string | undefined
};

const initialState: TInitialState = {
  vehicles: [],
  isLoading: false,
  error: undefined,
}

export const fetchGetShips = createAsyncThunk('ships/getShips', async () => await getShips());

const shipsSlice = createSlice({
    name: 'ships',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchGetShips.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchGetShips.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        })
        .addCase(fetchGetShips.fulfilled, (state, action) => {
          state.isLoading = false;
          state.vehicles = action.payload.vehicles.map((vehicle) =>({
            ...vehicle,
            id: uuid(),
          }))
        });
    },
  });
  
  export const shipsReducer = shipsSlice.reducer;
