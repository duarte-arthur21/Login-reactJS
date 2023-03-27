import React from 'react';
import { useState } from 'react'
import styled from "styled-components";
import { NavBar } from '../../components/NarBar';

function Home() {
    return (
        <div className="">
            <NavBar/>
            
            <Titulo>Hello World!</Titulo>
            <Titulo>Você está na pagina Home</Titulo>
        </div>
    )
}

export {Home}

const Titulo = styled.h1`
    position: relative;
    align-items: center;
    text-align: center;
    color: #000;

`
