import React, { Children } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const BtnPrimary = (props) =>{
    return (
        <Primary 
            href='/dashboard'
            onClick={props.onClick}
            type={props.type}>
            {props.title}
        </Primary>
    );
  }

export const BtnDefault = (props) =>{
    return (
        <Default 
            onClick={props.onClick}
            type={props.type}>
            {props.title}
        </Default>
    );
  }
  
export const BtnInfo = (props) =>{
    return (
    <Info 
        onClick={props.onClick}
        type={props.type}>
          {props.title}
    </Info>
    );
  }

export const BtnBlock = (props) => {
  return(
      <Block 
      type={props.type}>
        {props.title}
      </Block>
  )
}
const Primary = styled.a`
    display: block;
    font-family: 'Lato';
    font-weight: 700;
    font-size: 24px;
    text-decoration: none;
    text-align: center;
    height: 50px;
    background: #1F58E7;
    border: 1px solid #CACCCF;
    color: #FFFFFF;
    border-radius: 100px;
    margin-top: 25px;
    margin-bottom: 7px;

    &:hover {
        background-color: #4e66a4;
    }
`

const Info = styled.button`
    width: 165.48px;
    height: 35px;
    background-color: #1F58E7;
    border-radius: 100px;
    border: #2f46b7;
    color: #FFFFFF;
    margin-top: 20px;

    &:hover{
      background-color: #091b48;
    }
`

const Default = styled.button`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 34px;
    width: 385px;
    height: 50px;
    border: #FFFFFF;
    background: #FFFFFF;
    color: #1F58E7;
    margin-top: 45px;
    border-radius: 100px;
    &:hover {
        background-color: #9ca2b1;
    }
`

const Block = styled.button`
    font-family: 'Lato';
    font-weight: 700;
    font-size: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #FFFFFF;
    border: #FFFFFF;
    color: #52575C;
    margin-left: 28%;
`