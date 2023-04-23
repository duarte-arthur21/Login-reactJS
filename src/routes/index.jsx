import React from "react";
import "../index.css";
import { createBrowserRouter } from "react-router-dom";
import { AuthTemplate } from "../templates/AuthTemplate";
import { Home } from "../templates/AppTemplate";
//import { Home } from "../templates/AppTemplate/pages/Home";
// import { About } from "../templates/AppTemplate";
// import { Profile } from "../templates/AppTemplate";
import { CadConsulta } from "../templates/AppTemplate/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthTemplate />,
    errorElement: <div>Rota inexistente</div>,
  },

  {
    path: "/dashboard",
    element: <Home />,
  },

  // {
  //   path: "/about",
  //   element: <About />,
  // },

  // {
  //   path: "/profile",
  //   element: <Profile />,
  // },

  {
    path: "cad_consulta",
    element: <CadConsulta />,
  },
]);

export { router };
