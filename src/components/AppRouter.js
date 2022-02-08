import React, { useState } from "react";
import { HashRouter as Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Routes>
      {isLoggedIn ? (
        <Route path="/Home" element={<Home />} />
      ) : (
        <Route path="/Auth" element={<Auth />} />
      )}
    </Routes>
  );
};

export default AppRouter;
