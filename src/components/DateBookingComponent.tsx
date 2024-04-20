import React from "react";
import { Grid, TextField, Button, MenuItem } from "@mui/material";

const DateBookingComponent = () => {
  const [selectedDate, setSelectedDate] = React.useState("");

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleBookDate = () => {
    // Add logic to book the date here
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          id="date"
          label="Select Date"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button variant="contained" color="primary" onClick={handleBookDate}>
          Book Date
        </Button>
      </Grid>
    </Grid>
  );
};

export default DateBookingComponent;
