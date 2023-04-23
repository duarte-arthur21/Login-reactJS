import React, { useEffect } from "react";
import styled from "styled-components";
import { BtnDanger, BtnSucess } from "../../../components/Button";
import { Form } from "@unform/web";
import { Input } from "../../../components/Input";
//{list.map(item) => {return JSON.stringify(item)}}

const Delete = (props, event, id) => {
  const { deleteList } = props;

  useEffect(() => {
    console.log(deleteList);
  }, [deleteList]);

  const handleDelete = async () => {
    const response = await fetch(
      "http://localhost:3000/consultas/" + deleteList.id,
      {
        method: "DELETE",
      }
    );
    if (response.ok) props.setSection("list");
  };

  return (
    <div className="">
      <Titulo>Atualizar Consulta!</Titulo>

      <Form onSubmit={handleSubmit} initialData={deleteList}>
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

export { Delete };

const Titulo = styled.h1`
  position: relative;
  align-items: center;
  text-align: center;
  color: #000;
`;
