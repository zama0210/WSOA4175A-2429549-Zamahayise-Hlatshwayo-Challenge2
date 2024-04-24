import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TransitContext } from "./TransitContext";

const RouteInfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setSelectedRoutes } = React.useContext(TransitContext);

  const handlePurchaseClick = (route) => {
    setSelectedRoutes((prevRoutes) => [...prevRoutes, route]);
    navigate("/purchase");
  };

  // ...
};

export default RouteInfoPage;
