import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FriendList = (props) => {
  const my_friends = useSelector((state) => state.kakao.friendlist);
  console.log(my_friends);
  const histroy = useNavigate();

  return (
    <div>
      {my_friends.map((list, index) => {
        return (
          <FriendListStyle
            key={index}
            onClick={() => {
              console.log(list.name);
              const link = list.name;
              histroy("/" + index);
            }}
          >
            {list.name}
          </FriendListStyle>
        );
      })}
    </div>
  );
};
const FriendListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;
export default FriendList;
