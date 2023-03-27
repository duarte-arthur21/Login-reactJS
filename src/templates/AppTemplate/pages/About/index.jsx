import React from 'react';
import styled from "styled-components";
import { NavBar } from '../../components/NarBar';

function About() {
    return (
        <div className="">
            <NavBar/>
            
            <Titulo>Hello World!</Titulo>
            <Titulo>Você está na pagina Sobre</Titulo>
        </div>
    )
}

export {About}

const Titulo = styled.h1`
    position: relative;
    align-items: center;
    text-align: center;
    color: #000;

`
