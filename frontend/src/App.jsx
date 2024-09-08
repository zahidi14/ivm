import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from './misc/theme';
import { Dashboard, Navbar } from './components';
Dashboard
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <Sidebar isSidebar={isSidebar} /> */}
          <main className="content">
           <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} /> 
            </Routes>
          </main>
        </div>
      </ThemeProvider>
      </ColorModeContext.Provider>
  )
}

export default App
