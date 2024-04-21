import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { MenuButons } from "../../front/modules/types";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

const drawerWidth = 240;
const navItems: MenuButons[] = [
  {
    key: "book",
    color: "inherit",
    to: "/book/0",
    sx: { ...rightLink, color: "secondary.main" },
  },
  { key: "pricing", color: "inherit", to: "/pricing", sx: rightLink },
];

export default function AppBarV2(props: Props) {
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);
  const { t, i18n } = useTranslation();
  const changeLanguage = () => {
    setCurrentLanguage(nextLanguage);
    i18n.changeLanguage(nextLanguage);
  };
  const nextLanguage = currentLanguage === "fr" ? "en" : "fr";
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {t("home.appbar.zipitiPark")}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton
              to={item.to}
              sx={{ textAlign: "center" }}
              component={RouterLink}
            >
              <ListItemText primary={t("home.appbar.".concat(item.key))} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Link
            to={"/"}
            variant="h6"
            underline="none"
            color="inherit"
            sx={{
              fontSize: 20,
              flexGrow: 1,
              display: "block",
            }}
            component={RouterLink}
          >
            {t("home.appbar.zipitiPark")}
          </Link>
          <Link
            variant="h6"
            underline="none"
            sx={{ ...rightLink, mr: 1, display: { md: "none" } }}
            onClick={changeLanguage}
          >
            {nextLanguage}
          </Link>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, marginLeft: 0 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link
                to={item.to}
                variant="h6"
                underline="none"
                component={RouterLink}
                sx={item.sx}
              >
                {t("home.appbar.".concat(item.key))}
              </Link>
            ))}
            <Link
              variant="h6"
              underline="none"
              sx={{ ...rightLink, mr: 1 }}
              onClick={changeLanguage}
            >
              {nextLanguage}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
