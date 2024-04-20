// MainContainer.tsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

interface MainContainerProps {
  component: React.ComponentType; // component to render
}
const defaultTheme = createTheme();

const sections = [
  { title: "Book", url: "/book" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const MainContainer: React.FC<MainContainerProps> = ({
  component: Component,
}) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header sections={sections} title={""} />
      <Component /> {/* render the component here */}
      <Footer description={""} title={""} />
    </ThemeProvider>
  );
};

export default MainContainer;
