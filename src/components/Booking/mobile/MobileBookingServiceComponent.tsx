import { Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ServiceButton } from "./components/ServiceButton";
import { ServiceType } from "../model/Model";

export const MobileBookingServiceComponent = () => {
  const { t } = useTranslation();
  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12} p={1}>
        <Typography variant="h6" gutterBottom align="center">
          {t("booking.service.title")}
        </Typography>
      </Grid>
      <Grid container item spacing={4}>
        <Grid item xs={12} sx={{ justifyContent: "center", display: "flex" }}>
          <ServiceButton type={ServiceType.party} />
        </Grid>
        <Grid item xs={12} sx={{ justifyContent: "center", display: "flex" }}>
          <ServiceButton type={ServiceType.group} />
        </Grid>
        <Grid item xs={12} sx={{ justifyContent: "center", display: "flex" }}>
          <ServiceButton type={ServiceType.tickets} />
        </Grid>
      </Grid>
    </Grid>
  );
};
