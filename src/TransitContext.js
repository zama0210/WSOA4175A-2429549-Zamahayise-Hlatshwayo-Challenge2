import React, { useState } from "react";

const TransitContext = React.createContext();

const TransitProvider = ({ children }) => {
  const [selectedRoutes, setSelectedRoutes] = useState([]);

  return (
    <TransitContext.Provider value={{ selectedRoutes, setSelectedRoutes }}>
      {children}
    </TransitContext.Provider>
  );
};

export { TransitContext, TransitProvider };
