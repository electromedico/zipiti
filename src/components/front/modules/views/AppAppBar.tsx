import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function AppAppBar() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            to={"/"}
            variant="h6"
            underline="none"
            color="inherit"
            sx={{ fontSize: 24 }}
            component={RouterLink}
          >
            {t("home.appbar.zipitiPark")}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              to={"/pricing"}
              color="inherit"
              variant="h6"
              underline="none"
              sx={rightLink}
              component={RouterLink}
            >
              {t("home.appbar.pricing")}
            </Link>
            <Link
              to="/book"
              variant="h6"
              underline="none"
              component={RouterLink}
              sx={{ ...rightLink, color: "secondary.main" }}
            >
               {t("home.appbar.book")}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
