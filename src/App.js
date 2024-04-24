import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AvailableRoutes from "./pages/AvailableRoutes";
import RouteInfoPage from "./RouteInformation";
import TicketPurchase from "./pages/TicketPurchase";
import ConfirmationPage from "./pages/ConfirmationPage";
import { TransitProvider } from "./TransitContext";

function App() {
  return (
    <Router>
      <TransitProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<AvailableRoutes />} />
            <Route path="/route/:id" element={<RouteInfoPage />} />
            <Route path="/purchase" element={<TicketPurchase />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </div>
      </TransitProvider>
    </Router>
  );
}

export default App;
