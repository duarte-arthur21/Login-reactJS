import React, { useEffect } from 'react';
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';

const NavBar = (props) => {
    return(
    <Nav>
        <Icon href="" >Dashboard</Icon>

        <Ul>
            <CustomLink to="/dashboard"> Home </CustomLink>
            <CustomLink to="/about"> Sobre </CustomLink>
            <CustomLink to="/profile"> Perfil </CustomLink>
            <CustomLink to="/"> Sair </CustomLink>

        </Ul>
    </Nav>
    );
}

export {NavBar}

const CustomLink = ({to, children, ...props}) => {
   const currentPath = useLocation()
   useEffect(() => {console.log('CurrentPath', currentPath)}, [currentPath])

    return (
        <Li isActive={currentPath.pathname === to}>
            <Section to={to} {...props}> {children} </Section>
        </Li>
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
const Section = styled(Link)`
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
const Icon = styled(Link)`
    color: inherit;
    text-decoration: none;
    height: '100%';
    display: flex;
    align-items: center;
    padding: 0.5rem;
`
const Li = styled.li`
    background-color: ${props => props.isActive ? '#555' : 'transparent' };
`