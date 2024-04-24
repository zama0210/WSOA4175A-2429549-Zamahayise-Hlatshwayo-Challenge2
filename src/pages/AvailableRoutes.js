import React from "react";
import { useNavigate } from "react-router-dom";
import { TransitContext } from "../TransitContext";

const AvailableRoutes = () => {
  const navigate = useNavigate();
  const { setSelectedRoutes } = React.useContext(TransitContext);

  const handleRouteClick = (route) => {
    setSelectedRoutes([route]);
    navigate(`/route/${route.id}`);
  };

  const mockData = [
    [
      {
        id: "route-1",
        title: "Downtown Express",
        duration: "25 mins",
        stops: 5,
        price: 245.5,
        description:
          "The quickest way to the heart of the city, with minimal stops.",
      },
      {
        id: "route-2",
        title: "Scenic Coastal Line",
        duration: "55 mins",
        stops: 8,
        price: 255.75,
        description: "Enjoy breathtaking views of the coastline as you travel.",
      },
      {
        id: "route-3",
        title: "Suburban Shuttle",
        duration: "45 mins",
        stops: 6,
        price: 99.0,
        description:
          "Connects the suburbs with downtown, running every half hour.",
      },
      {
        id: "route-4",
        title: "Night Owl",
        duration: "30 mins",
        stops: 4,
        price: 56.65,
        description:
          "Operates after midnight, serving all major nightlife districts.",
      },
    ],
  ];

  return (
    <div>
      <h1>Available Routes</h1>
      {mockData.map((route) => (
        <div key={route.id} onClick={() => handleRouteClick(route)}>
          {route.title}
        </div>
      ))}
    </div>
  );
};

export default AvailableRoutes;
