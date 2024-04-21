import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { Reservation } from "../components/Booking/model/Model";

type ReservationState = Reservation | null;

// Define the initial state using that type
const initialState = null as ReservationState;

export const reservationSlice = createSlice({
  name: "reservation",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    startReservation: (
      state,
      {
        payload: { reservation },
      }: PayloadAction<{
        reservation: Reservation;
      }>
    ) => {
      return reservation;
    },
    setReservationDate: (
      state,
      {
        payload: { dateTime },
      }: PayloadAction<{
        dateTime: Date;
      }>
    ) => {
      return {
        ...state,
        dateTime,
      } as Reservation;
    },
    clearReservation: () => {
      return null;
    },
  },
});

export default reservationSlice.reducer;
export const { startReservation, clearReservation } = reservationSlice.actions;
