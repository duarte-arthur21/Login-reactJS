import React, { useEffect } from "react";
import styled from "styled-components";
import { BtnDanger, BtnSucess } from "../../../components/Button";
import { Form } from "@unform/web";
import { Input } from "../../../components/Input";
//{list.map(item) => {return JSON.stringify(item)}}

const Edit = (props) => {
  const { editingList } = props;

  useEffect(() => {
    console.log(editingList);
  }, [editingList]);

  const handleSubmit = async (data) => {
    const reqData = {
      paciente: data.paciente,
      medico: data.medico,
      especialidade: data.especialidade,
      data: data.data,
      hora: data.hora,
      status: "Marcada",
    };
    const response = await fetch(
      "http://localhost:3000/consultas/" + editingList.id,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(reqData),
      }
    );
    if (response.ok) props.setSection("list");
  };

  return (
    <div className="">
      <Titulo>Atualizar Consulta!</Titulo>

      <Form onSubmit={handleSubmit} initialData={editingList}>
        <Input name="paciente" placeholder="Nome do paciente" type="text" />

        <Input name="medico" placeholder="Nome do medico" type="text" />

        <Input
          name="especialidade"
          placeholder="Tipo de consulta"
          type="text"
        />

        <Input name="data" type="date" />

        <Input name="hora" type="time" />

        <BtnDanger type="button" title="Cancelar" href="/dashboard" />
        <BtnSucess type="submit" title="Salvar" />
      </Form>
    </div>
  );
};

export { Edit };

const Titulo = styled.h1`
  position: relative;
  align-items: center;
  text-align: center;
  color: #000;
`;
