import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs, { Dayjs } from "dayjs";
import { log } from "console";
import { Badge } from "@mui/material";
import { PickersDayProps, PickersDay } from "@mui/x-date-pickers";

const DateBookingComponent = () => {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());

  const shouldDisableDate = (day: Dayjs) => day.isSame(dayjs(), "date");

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          disablePast
          shouldDisableDate={shouldDisableDate}
          minDate={dayjs()}
        />
      </LocalizationProvider>
    </>
  );
};

export default DateBookingComponent;
