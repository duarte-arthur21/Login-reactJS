import React, { Children, useEffect, useState } from "react";
import { Table } from "../../../components/Table";
import styled from "styled-components";
import { BtnDefault, BtnInfo, BtnDanger } from "../../../components/Button";
import { Modal } from "../../../components/Modal";

const List = (props) => {
  const [list, setList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    console.log("list", list);
  }, [list]);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const getList = async () => {
    const responde = await fetch("http://localhost:3000/consultas");
    const data = await responde.json();

    const formatedData = data.map((row) => ({
      ...row,
      edit: (
        <BtnInfo
          type="button"
          title="Editar"
          onClick={() => {
            props.setEditingList(row);
            props.setSection("edit");
          }}
        />
      ),

      delete: (
        <BtnDanger
          type="button"
          title="Deletar"
          onClick={() => {
            toggleModal();
          }}
        />
      ),
    }));

    setList(formatedData);
  };

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Paciente",
      accessor: "paciente",
    },
    {
      Header: "Médico",
      accessor: "medico",
    },
    {
      Header: "Especialidade",
      accessor: "especialidade",
    },
    {
      Header: "Data",
      accessor: "data",
    },
    {
      Header: "Hora",
      accessor: "hora",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Editar",
      accessor: "edit",
    },
    {
      Header: "Deletar",
      accessor: "delete",
    },
  ];

  return (
    <div>
      <Table columns={columns} data={list} />

      {openModal && (
        <Modal>
          <h1>Conteúdo do modal</h1>
          <p>Algum texto aqui.</p>
          <button onClick={() => props.toggleModal()}>Fechar modal</button> *
          <div>
            <BtnInfo
              type="button"
              title="Voltar"
              onClick={() => {
                toggleModal();
              }}
            />{" "}
            <BtnDanger
              type="button"
              title="Deletar"
              onClick={() => {
                toggleModal();
              }}
            />{" "}
          </div>
        </Modal>
      )}

      <BtnDefault
        type="button"
        title="Cadastar"
        onClick={() => props.setSection("add")}
      />
    </div>
  );
};

export { List };

const Button = styled.a`
  display: block;
  position: relative;
  font-family: "Lato";
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  text-align: center;
  height: 50px;
  width: 200px;
  margin: center;
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
const BtnPrimary = styled.button`
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
