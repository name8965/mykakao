import React, { useState } from "react";
import {
  HashRouter,
  HashRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import MyTest from "../routes/MyTest";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    // <HashRouter base="/">
    <Routes>
      {isLoggedIn ? (
        <Route path="/Home" element={<Home />} />
      ) : (
        // <Route exact path="">
        //   <Home />
        // </Route>
        <Route path="/Auth" element={<Auth />} />

        // <Route exact path="">
        //   <Auth />
        // </Route>
      )}
    </Routes>
    // </HashRouter>
  );
};

export default AppRouter;
