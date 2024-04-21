import React from "react";
import { DotsMobileStepper } from "./DotsMobileStepper";
import { Grid } from "@mui/material";
import DateBookingComponent from "../DateBookingComponent";
import Paper from "../../front/modules/components/Paper";
import { MobileBookingServiceComponent } from "./MobileBookingServiceComponent";

const steps = [<MobileBookingServiceComponent />, <DateBookingComponent />];

const MobileBookingWizard = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container spacing={3} mt={5} mb={1} padding={2}>
      <Grid item xs={12}>
        <Paper
          elevation={2}
          background={"light"}
          padding={true}
          sx={{ minHeight: 500, maxHeight: 500 }}
        >
          {steps[activeStep]}
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} background={"light"} padding={true}>
          <DotsMobileStepper
            handleNext={handleNext}
            handleBack={handleBack}
            steps={steps.length}
            activeStep={activeStep}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MobileBookingWizard;
