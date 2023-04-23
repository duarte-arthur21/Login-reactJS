import React, { useState } from "react";
import { NavBar } from "../../components/NarBar";
import { List } from "./List";
import { Add } from "./Add";
import { Edit } from "./Edit";
import { Delete } from "./delete";

import { Container } from "../../components/Form/Container.style";
//{list.map(item) => {return JSON.stringify(item)}}

const Home = (props) => {
  const [section, setSection] = useState("list");
  const [editingList, setEditingList] = useState(null);
  const [deleteList, setDeleteLits] = useState(null);

  const renderSection = () => {
    switch (section) {
      case "list":
        return <List setSection={setSection} setEditingList={setEditingList} />;
      case "add":
        return <Add setSection={setSection} />;
      case "edit":
        return <Edit setSection={setSection} editingList={editingList} />;
      case "delete":
        return <Delete setSection={setSection} deleteList={setDeleteLits} />;
    }
  };

  return (
    <div className="">
      <NavBar />
      <Container>{renderSection()}</Container>
    </div>
  );
};

export { Home };
