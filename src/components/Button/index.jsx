import React, { Children } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const BtnPrimary = (props) => {
  return (
    <Primary href="/dashboard" onClick={props.onClick} type={props.type}>
      {props.title}
    </Primary>
  );
};

export const BtnDefault = (props) => {
  return (
    <Default onClick={props.onClick} type={props.type}>
      {props.title}
    </Default>
  );
};

export const BtnInfo = (props) => {
  return (
    <Info onClick={props.onClick} type={props.type}>
      {props.title}
    </Info>
  );
};

const BtnBlock = (props) => {
  return <Block type={props.type}>{props.title}</Block>;
};

const BtnSucess = (props) => {
  return (
    <Success type={props.type} onClick={props.onClick}>
      {props.title}
    </Success>
  );
};

const BtnDanger = (props) => {
  return (
    <Danger onClick={props.onClick} type={props.type}>
      {props.title}
    </Danger>
  );
};

export { BtnBlock, BtnDanger, BtnSucess };

const Primary = styled.a`
  display: block;
  font-family: "Lato";
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  text-align: center;
  height: 50px;
  background: #1f58e7;
  border: 1px solid #cacccf;
  color: #ffffff;
  border-radius: 100px;
  margin-top: 25px;
  margin-bottom: 7px;

  &:hover {
    background-color: #4e66a4;
  }
`;

const Info = styled.button`
  width: 165.48px;
  height: 35px;
  background-color: #1f58e7;
  border-radius: 100px;
  border: #2f46b7;
  color: #ffffff;
  margin-top: 20px;

  &:hover {
    background-color: #091b48;
  }
`;

const Default = styled.button`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  width: 385px;
  height: 50px;
  border: #ffffff;
  background: #ffffff;
  color: #1f58e7;
  margin-top: 45px;
  border-radius: 100px;
  &:hover {
    background-color: #9ca2b1;
  }
`;

const Block = styled.button`
  font-family: "Lato";
  font-weight: 700;
  font-size: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #ffffff;
  border: #ffffff;
  color: #52575c;
  margin-left: 28%;
`;

const Danger = styled.button`
  width: 165.48px;
  height: 35px;
  display: block;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  background-color: #e70e0e;
  border: #e70e0e;
  color: #ffffff;
  border-radius: 100px;
  margin-top: 25px;
  margin-bottom: 7px;

  &:hover {
    background-color: #890606;
  }
`;

const Success = styled.button`
  width: 165.48px;
  height: 35px;
  display: block;
  background-color: #00b509;
  border-radius: 100px;
  border: #00b509;
  color: #ffffff;
  margin-top: 20px;

  &:hover {
    background-color: #094812;
  }
`;
