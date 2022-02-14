import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FriendList = (props) => {
  const my_friends = props.list;
  const histroy = useNavigate();

  return (
    <div>
      {my_friends.map((list, index) => {
        return (
          <FriendListStyle
            key={index}
            onClick={() => {
              console.log(histroy);
              histroy("/");
            }}
          >
            {list}
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
