import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Global, css } from "@emotion/react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Songs from "./pages/Songs";
import CustomBox from "./Styles/CustomBox";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import Navbar from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import Home from "./pages/Home";
import Leftside from "./components/Leftside";
import Rightside from "./components/Rightside";
import Genres from "./pages/Genres";
import Years from "./pages/Years";
import Form from "./components/Form";
import Details from "./components/Details";

const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    text: "#fff",
    background: "#000",
    primary: "#07c",
    secondary: "#05a",
    muted: "#f6f6f6",
  },
};
const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Global styles={globalStyles} />
      <CustomBox display="flex" flexDirection="column" minHeight="100vh">
        <Header>
          <Navbar />
        </Header>
        <CustomBox display="flex" flex="1">
          <Sidebar flex="1">
            <Leftside />
          </Sidebar>
          <MainContentWithSidebar />
        </CustomBox>
      </CustomBox>
    </BrowserRouter>
  </ThemeProvider>
);

const MainContentWithSidebar = () => {
  const location = useLocation();
  const hideSidebar = location.pathname !== "/";

  return (
    <React.Fragment>
      <MainContent flex={hideSidebar ? "6" : "5"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<Songs />} />
          <Route path="/:id" element={<Details />} />
          <Route path="/year" element={<Years />} />
          <Route path="/genre" element={<Genres />} />
          <Route path="/create" element={<Form />} />
          <Route path="update/:id" element={<Form />} />
        </Routes>
      </MainContent>
      {!hideSidebar && (
        <Sidebar flex="2">
          <Rightside />
        </Sidebar>
      )}
    </React.Fragment>
  );
};

export default App;
