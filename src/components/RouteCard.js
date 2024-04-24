import { Link } from "react-router-dom";
import "../RouteCard.css";

function RouteCard({ route }) {
  return (
    <div>
      <h2>{route.name}</h2>
      <p>{route.description}</p>
      <p>Price: {route.price}</p>

      <Link to={`/route/${route.id}`}>Purchase Ticket</Link>
    </div>
  );
}

export default RouteCard;
