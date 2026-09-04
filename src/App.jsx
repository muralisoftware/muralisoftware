import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./theme/theme";
import { LightboxProvider } from "./context/LightboxContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Section Components
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ServicesPage from "./pages/ServicesPage";
import PersonalProjectsPage from "./pages/PersonalProjectsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LightboxProvider>
        <BrowserRouter>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              background: "#f4f6f9",
            }}
          >
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <HomePage />
              <AboutPage />
              <SkillsPage />
              <ServicesPage />
              <PersonalProjectsPage />
              <ProjectsPage />
              <ContactPage />
            </Box>
            <Footer />
          </Box>
        </BrowserRouter>
      </LightboxProvider>
    </ThemeProvider>
  );
}

export default App;
