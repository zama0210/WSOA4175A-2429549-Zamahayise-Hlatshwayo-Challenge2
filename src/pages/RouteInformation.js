import { useParams } from "react-router-dom";
import mockData from "../Assignment 1 mock data.json";
import "../RouteInformation.css";

function RouteInformation() {
  const { id } = useParams();
  const route = mockData.find((r) => r.id.toString() === id);

  if (!route) {
    return <div>Route not found</div>;
  }

  return (
    <div>
      <h1>{route.name}</h1>
      <p>{route.description}</p>
      <p>Price: {route.price}</p>
      <button>Purchase Ticket</button>
    </div>
  );
}

export default RouteInformation;
