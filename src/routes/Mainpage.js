import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FriendList from "./FriendList";

const Mainpage = () => {
  const [friend, SetFriend] = useState(["꽁", "갑", "프스"]);
  return <FriendList list={friend} />;
};

export default Mainpage;
