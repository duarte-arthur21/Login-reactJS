import React from "react";
import styled from "styled-components";

const Modal = (props, isOpen, children) => {
  return (
    <Wrapper>
      <Container> {props.children} </Container>
    </Wrapper>
  );
};

export { Modal };

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;
const Container = styled.div`
  background-color: white;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  position: relative;
`;
