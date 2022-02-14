import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Mainpage from "../routes/Mainpage";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/mainpage">mainpage</Link>
      </div>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
