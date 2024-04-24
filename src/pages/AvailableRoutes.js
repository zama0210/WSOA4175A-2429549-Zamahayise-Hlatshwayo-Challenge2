import { useEffect, useState } from "react";
import RouteCard from "../components/RouteCard";
import mockData from "../Assignment 1 mock data.json";
import "../AvailableRoutes.css";

function AvailableRoutes() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    setRoutes(mockData);
  }, []);

  return (
    <div>
      <h1>Available Routes</h1>
      {routes.map((route) => (
        <RouteCard key={route.id} route={route} />
      ))}
    </div>
  );
}

export default AvailableRoutes;
