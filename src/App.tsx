import { BrowserRouter as Router } from "react-router-dom";

import { Toaster } from "sonner"
import AppRoutes from "./routes/AppRoutes";
import { LoadingProvider } from "./contexts/LoadingContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import GlobalSpinner from "./components/ui/GlobalSpinner";

const App = () => {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <Router>
          <AppRoutes />
          <GlobalSpinner />
        </Router>
        <Toaster richColors position="top-center" />
      </LoadingProvider>
    </ThemeProvider>
  );
};

export default App;
