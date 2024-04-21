import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";

interface DotsMobileStepperProps {
  handleNext: () => void;
  handleBack: () => void;
  steps: number;
  activeStep: number;
}
export const DotsMobileStepper = ({
  handleNext,
  handleBack,
  steps,
  activeStep,
}: DotsMobileStepperProps) => {
  const theme = useTheme();

  return (
    <MobileStepper
      variant="dots"
      steps={steps}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === steps - 1}
          component={Link}
          to={"/book/" + (activeStep + 1)}
        >
          Next
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          component={Link}
          to={"/book/" + (activeStep - 1)}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
};
