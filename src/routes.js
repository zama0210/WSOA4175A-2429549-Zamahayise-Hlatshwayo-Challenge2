import { Route, Routes } from "react-router-dom";
import AvailableRoutes from "./pages/AvailableRoutes";
import RouteInformation from "./pages/RouteInformation";
import TicketPurchase from "./pages/TicketPurchase";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AvailableRoutes />} />
      <Route path="/route/:id" element={<RouteInformation />} />
      <Route path="/purchase" element={<TicketPurchase />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

export default App;
