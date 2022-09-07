/** @format */

import React, { useContext, useState } from "react";
import { useRouter } from "next/router";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useRouter();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <AppContext.Provider
      value={{
        showMenu,
        pathname,
        toggleMenu,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
