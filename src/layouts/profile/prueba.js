import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
// Data
import authorsTableData from "layouts/profile/data/authorsTableData";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import React from "react";
import { render } from "@testing-library/react";

function Prueba(id){
  
  const [nombre,setnombre]= React.useState("");

  const [criterio, setcriterios]= React.useState(1)
  onclick = (criterio) =>{
    setcriterios(criterio+1);
    console.log(criterio);
    
    console.log(nombre);
    setnombre("");
  };
    return(
    
        <Grid display="flex" id={id}>

                <MDBox pt={2} pb={3} px={1}>
                  <MDInput id="1" type="Criterio" value={nombre} onChange={(e)=>{setnombre(e.target.value)}} name="criterio" label="Ingresar Criterio" fullWidth/>
                </MDBox>
                <MDBox pt={2} pb={3} px={1}>
                  <MDInput type="Insastifactorio" name="insastifactorio" label="Ingresar Insastifactorio" fullWidth/>
                </MDBox>
                <MDBox pt={2} pb={3} px={1}>
                <MDInput type="En Desarrollo" name="desarrollo" label="Ingresar Desarrollo" fullWidth/>
                </MDBox>
                <MDBox pt={2} pb={3} px={1}>
                <MDInput type="Satisfactorio" name="sastifactorio" label="Ingresar Satisfactorio" fullWidth/>
                </MDBox>
                <MDBox pt={2} pb={3} px={1}>
                <MDInput type="Ejemplar" name="ejemplar" label="Ingresar Ejemplar" fullWidth/>
                </MDBox>
                <MDBox mt={4} mb={1}>
                </MDBox>
                
        </Grid>
      );

  }  
  
  export default Prueba;

