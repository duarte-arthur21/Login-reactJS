import React, { useEffect } from 'react';
import styled from "styled-components";

const NavBar = (props) => {
    return(
    <Nav>
        <Icon href="" >Dashboard</Icon>

        <Ul>
            <CustomLink href="/dashboard"> Home </CustomLink>
            <CustomLink href="/about"> Sobre </CustomLink>
            <CustomLink href="/profile"> Perfil </CustomLink>
        </Ul>
    </Nav>
    );
}

export {NavBar}

const CustomLink = ({href, children, ...props}) => {
    return (
        <li>
            <Section href={href} {...props}> {children} </Section>
        </li>
    );
}

const Nav = styled.nav`
    background: #2f46b7;
    color: white;
    font-size: 24px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding: 0 2rem;
`
const Ul = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    gap: 0.5rem;
    list-style: none;
`
const Section = styled.a`
    display: flex;
    position: relative;
    color: white;
    font-family: 'Lato';
    justify-content: space-between;
    text-decoration: none;
    padding: 0.5rem;

    &:active{
        background-color: #555;
    }
    &:houver {
        background-color: #777;
    }
`
const Icon = styled.a`
    color: inherit;
    text-decoration: none;
    height: '100%';
    display: flex;
    align-items: center;
    padding: 0.5rem;
`