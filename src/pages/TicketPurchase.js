import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TransitContext } from "../TransitContext";

const TicketPurchase = () => {
  const navigate = useNavigate();
  const { selectedRoutes, setSelectedRoutes } =
    React.useContext(TransitContext);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleRemoveRoute = (route) => {
    setSelectedRoutes((prevRoutes) =>
      prevRoutes.filter((r) => r.id !== route.id)
    );
  };

  const calculateTotalAmount = () => {
    return selectedRoutes
      .reduce((total, route) => total + route.price, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    const total = parseFloat(calculateTotalAmount());
    setTotalAmount(total);
    setSelectedRoutes([]);
    navigate("/confirmation");
  };

  return (
    <div>
      <h1>Ticket Purchase</h1>
      {selectedRoutes.length === 0 && (
        <p>No routes selected. Please select a route to proceed.</p>
      )}
      {selectedRoutes.map((route) => (
        <div key={route.id}>
          <p>{route.title}</p>
          <p>Duration: {route.duration}</p>
          <p>Price: ${route.price}</p>
          <button onClick={() => handleRemoveRoute(route)}>Remove</button>
        </div>
      ))}
      {selectedRoutes.length > 0 && (
        <>
          <p>Total Amount Due: ${calculateTotalAmount()}</p>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default TicketPurchase;
