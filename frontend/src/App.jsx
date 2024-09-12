import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./misc/theme";
import "./app.scss";
import { Navbar, Side } from "./components/StyledComp";
import Router from "./misc/Router";
import { useLocation } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();
  const isAuth = location.pathname === "*" || location.pathname === "/login";
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {!isAuth && <Side isSidebar={isSidebar} />}
          <main className="content">
            {!isAuth && <Navbar setIsSidebar={setIsSidebar} />}
            <Router />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
