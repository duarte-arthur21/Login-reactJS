import React, { Children, useEffect, useState } from "react";
import { Table } from "../../../components/Table";
import styled from "styled-components";
import { BtnDefault, BtnInfo, BtnDanger } from "../../../components/Button";
import { Modal } from "../../../components/Modal";
import { FaRocket, FaEdit, FaTrash } from "react-icons/fa";

const List = (props) => {
  const [list, setList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [deleteRow, setDeleteRow] = useState();

  const handleDelete = async () => {
    fetch("http://localhost:3000/consultas/" + deleteRow.id, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          getList();
          toggleModal();
        }
      })
      .catch((error) => console.error(error));
  };

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
        <button
          type="button"
          onClick={() => {
            props.setEditingList(row);
            props.setSection("edit");
          }}
        >
          <FaEdit style={{ color: "blue" }} className="App-logo" />
        </button>
      ),

      delete: (
        <button
          type="button"
          onClick={() => {
            toggleModal();
            setDeleteRow(row);
          }}
        >
          <FaTrash style={{ color: "red" }} className="App-logo" />
        </button>
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
          <Cabmodal>
            <h1>Deseja excluir essa consulta ?</h1>
          </Cabmodal>
          <p> Alguma coisa</p>

          <Rodmodal>
            <BtnInfo
              type="button"
              title="Voltar"
              onClick={() => {
                toggleModal();
              }}
            />

            <BtnDanger
              type="button"
              title="Deletar"
              onClick={() => {
                handleDelete();
              }}
            />
          </Rodmodal>
        </Modal>
      )}

      <Container>
        <BtnDefault
          type="button"
          title="Cadastar"
          onClick={() => props.setSection("add")}
        />
      </Container>
    </div>
  );
};

export { List };

const Rodmodal = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;
  float: center;
  margin: 70px;
  border-collapse: collapse;
  padding: 8px;
`;
const Cabmodal = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;
  float: center;
  justify-content: center;
  text-align: center;
`;
const Container = styled.div`
  justify-content: center;
  text-align: center;
`;
