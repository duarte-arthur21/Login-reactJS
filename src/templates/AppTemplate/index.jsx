import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { NavBar } from '../../components/NarBar';
import { Table } from '../../components/Table'

 //{list.map(item) => {return JSON.stringify(item)}}

const Home = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        getList()
    }, [])

    useEffect(() => {
        console.log('list', list)
    }, [list])

    const getList = async () => { 
        const responde = await fetch('http://localhost:3000/consultas')
        const data = await responde.json()
        setList(data)
    }
    
    const columns = [
        {
          Header: 'ID',
          accessor: 'id',
        },
        {
          Header: 'Paciente',
          accessor: 'paciente',
        },
        {
          Header: 'Médico',
          accessor: 'medico',
        },
        {
          Header: 'Especialidade',
          accessor: 'especialidade',
        },
        {
          Header: 'Data',
          accessor: 'data',
        },
        {
          Header: 'Hora',
          accessor: 'hora',
        },
        {
          Header: 'Status',
          accessor: 'status',
        },
      ]

    
    return (
        <div className="">
            <NavBar/>
            
            <Titulo>Hello World!</Titulo>
            <Table columns={columns} data={list} />

        </div>
    )
}
const About = () => {
    return (
        <div className="">
            <NavBar/>
            
            <Titulo>Você está na pagina Sobre</Titulo>
        </div>
    )
}
const Profile = () => {
    return (
        <div className="">
            <NavBar/>
            
            <Titulo>Você está na pagina Perfil</Titulo>
        </div>
    )
}

export {Home, About, Profile}

const Titulo = styled.h1`
    position: relative;
    align-items: center;
    text-align: center;
    color: #000;

`
