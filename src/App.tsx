import { BrowserRouter as Router } from "react-router-dom";

import { Toaster } from "sonner"
import AppRoutes from "./routes/AppRoutes";

<Toaster richColors position="top-center" />

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
