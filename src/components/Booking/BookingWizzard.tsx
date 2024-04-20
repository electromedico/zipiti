import React, { useState } from "react";
import { Grid, Pagination, Container, Box } from "@mui/material";

interface BookingWizardProps {
  // Add props typing here if needed
}

const BookingWizard: React.FC<BookingWizardProps> = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box mb={3}>
            <Pagination
              count={3} // number of steps
              page={page}
              onChange={handlePageChange}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          {/* Step content goes here */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookingWizard;
