import { useNavigate } from "react-router-dom";
import "../TicketPurchase.css";

function TicketPurchase() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/confirmation");
  };

  return (
    <div>
      <h1>Ticket Purchase</h1>
      {/* Display selected tickets and the total amount due here */}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default TicketPurchase;
