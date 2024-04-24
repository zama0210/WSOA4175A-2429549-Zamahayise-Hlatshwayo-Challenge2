import { Link } from "react-router-dom";

function RouteCard({ route }) {
  return (
    <div>
      <h2>{route.name}</h2>
      <p>{route.description}</p>
      <Link to={`/route/${route.id}`}>Purchase Ticket</Link>
    </div>
  );
}

export default RouteCard;
