import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <AppRoutes />

      <Footer />
    </BrowserRouter>
  );
}

export default App;