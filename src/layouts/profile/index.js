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

// @mui material components
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
import { useFormik} from 'formik';
import Prueba from "./prueba";

function Overview() {
  const { columns, rows } = authorsTableData();
  
  const lista=[...<Prueba/>] ;
  const [nombre,setnombre]= React.useState("");

  const [criterio, setcriterios]= React.useState(1)
  onclick = (criterio) =>{
    setcriterios(criterio+1);
    console.log(criterio);
    
    console.log(nombre);
    setnombre("");
  };
    
  
    
  
  
  

  return (
    <DashboardLayout>
      
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                
              >
                <MDTypography variant="h6" color="white">
                  Gestión de Rúbricas
                </MDTypography>
                      
              </MDBox>
              
            </Card>   
          </Grid>
        </Grid>
      </MDBox>
      <MDBox>
        <Grid>
          <Card >
          <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox >
              <MDBox mb={2}>
                <MDInput type="Nombre" name="titulo" label="Ingresar el nombre de la rúbrica" fullWidth/>
              </MDBox>
              <MDBox mb={2}>
                <MDInput type="clasificacion" name="clasificacion" label="Ingresar tipo de clasificación" fullWidth/>
              </MDBox>
              <MDButton variant="gradient" color="info" >
                +
              </MDButton>
              
              lista
              
              <MDButton variant="gradient" color="info" onclick>
               Ingresar
              </MDButton>         
              
            </MDBox>
          </MDBox>  
          </MDBox>
          </Card>
        </Grid>
      </MDBox>
      
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
