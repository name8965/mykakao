import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createWidget } from "../redux/modules/kakao";

const Chatting = (props) => {
  const Mytalk = useSelector((state) => state.kakao.mytalk);
  const text = React.useRef(null);
  const dispatch = useDispatch();
  const sendButton = () => {
    console.log(new Date().getHours(), new Date().getMinutes());
    console.log(props.name);
    dispatch(
      createWidget({
        talk: text.current.value,
        data: new Date().getMinutes(),
        to: props.name,
      })
    );
    text.current.value = "";
  };
  return (
    <>
      <Mytalkstyled>
        {Mytalk.map((talk, index) => {
          return (
            <div completed={talk.completed} className="Mytalk_list" key={index}>
              {talk.talk}
            </div>
          );
        })}
      </Mytalkstyled>
      <Input>
        <input type="text" ref={text} />
        <button onClick={sendButton}>전송</button>
      </Input>
    </>
  );
};
const Mytalkstyled = styled.div`
  justify-content: right;
`;
const Input = styled.div`
  /* max-width: 350px; */
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  justify-content: center;

  border-radius: 5px;
  border: 0px;
  display: flex;
`;

export default Chatting;
