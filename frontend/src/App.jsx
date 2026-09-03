import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp/FloatingWhatsApp";
import OrganizationSchema from "./components/common/Schema/OrganizationSchema";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <OrganizationSchema />

        <Navbar />
        <AppRoutes />
        <FloatingWhatsApp />
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;