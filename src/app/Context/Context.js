import React, { createContext, useContext, useState } from "react";

const GState = createContext();

export default function Context({ children }) {
  const [user, setUser] = useState("");
  return (
    <GState.Provider value={{ user, setUser }}>{children}</GState.Provider>
  );
}

export const useGState = () => {
  return useContext(GState);
};
