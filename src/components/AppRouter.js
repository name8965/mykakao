import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Chatting from "../routes/Chatting";
import Home from "../routes/Home";
import Mainpage from "../routes/Mainpage";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const my_friends = useSelector((state) => state.kakao.friendlist);

  return (
    <>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/mainpage">mainpage</Link>
      </div>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/:index" element={<Chatting name={my_friends} />} />
      </Routes>
    </>
  );
};

export default AppRouter;
