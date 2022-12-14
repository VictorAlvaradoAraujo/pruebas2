/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data(nombre) {
  const Author = ({clasificacion, Descripcion }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {clasificacion}
        </MDTypography>
        <MDTypography variant="caption">{Descripcion}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "nombre", accessor: "author", width: "35%", align: "left" },
      { Header: "criterios", accessor: "criterios", align: "left" },
      { Header: "Estado", accessor: "status", align: "center" },
      { Header: "Codigo", accessor: "cod", align: "center" },
      { Header: "Fecha de creación", accessor: "fecha", align: "center" },
      { Header: "Acciones", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} clasificacion={nombre} Descripcion="An ability to lead, manage and undertake projects.
        " />,
        criterios: <Job title="Criterios" description="4" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Aprobado" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        cod: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            21314124
          </MDTypography>
        ),
        fecha: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/12/22
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Editar
          </MDTypography>
        ),
      },
      {
        author: <Author image={team2} clasificacion="Otucomes" Descripcion="An ability to lead, manage and undertake projects.
        " />,
        criterios: <Job title="Criterios" description="4" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Aprobado" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        cod: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            21314124
          </MDTypography>
        ),
        fecha: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/12/22
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Editar
          </MDTypography>
        ),
      },
      {
        author: <Author image={team2} clasificacion="Otucomes" Descripcion="An ability to lead, manage and undertake projects.
        " />,
        criterios: <Job title="Criterios" description="3" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Aprobado" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        cod: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            21314124
          </MDTypography>
        ),
        fecha: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/12/22
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Editar
          </MDTypography>
        ),
      },
      {
        author: <Author image={team2} clasificacion="Otucomes" Descripcion="An ability to lead, manage and undertake projects.
        " />,
        criterios: <Job title="Criterios" description="4" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Reprobado" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        cod: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            21314124
          </MDTypography>
        ),
        fecha: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/12/22
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Editar
          </MDTypography>
        ),
      }
 
      
    ],
  };
}
