import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavBar } from "../../../components/NarBar";
import { Form } from "react-router-dom";
import { BtnDanger, BtnSucess } from "../../../components/Button";
//{list.map(item) => {return JSON.stringify(item)}}

const CadConsulta = () => {
  return (
    <div className="">
      <NavBar />

      <Titulo>Nova Consulta!</Titulo>
      <BtnDanger type="button" title="Cancelar" href="/dashboard" />
      <BtnSucess type="button" title="Salvar" />
    </div>
  );
};

export { CadConsulta };

const Titulo = styled.h1`
  position: relative;

  align-items: center;
  text-align: center;
  color: #000;
`;
