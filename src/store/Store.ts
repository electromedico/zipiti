import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import reservationReducer from "./ReservationSlice";
export const store = configureStore({
  reducer: {
    reservation: reservationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [""],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
