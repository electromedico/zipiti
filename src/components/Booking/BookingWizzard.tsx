import React, { useState } from "react";
import {
  Grid,
  useMediaQuery,
  Step,
  StepContent,
  StepLabel,
  Typography,
} from "@mui/material";
import theme from "../front/modules/theme";
import { BookingStepper } from "./BookingStepper";
import Paper from "../front/modules/components/Paper";
import MobileBookingWizard from "./mobile/MobileBookingWizard";

interface BookingWizardProps {
  // Add props typing here if needed
}

const steps = [
  {
    label: "Step 1",
    description: "This is step 1",
  },
  {
    label: "Step 2",
    description: "This is step 2",
  },
  {
    label: "Step 3",
    description: "This is step 3",
  },
];

const BookingWizard: React.FC<BookingWizardProps> = () => {
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const [page, setPage] = useState(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return isSmUp ? (
    <Grid container spacing={3} mt={6} mb={3}>
      <Grid item md={2} />
      <Grid item md={2} m={2}>
        <Paper elevation={2} background={"light"} padding={true}>
          <BookingStepper />
        </Paper>
      </Grid>
      <Grid item md={6} m={2}>
        <Paper elevation={2} background={"light"} padding={true}>
          <BookingStepper />
        </Paper>
      </Grid>
    </Grid>
  ) : (
    <MobileBookingWizard />
  );
};

export default BookingWizard;
