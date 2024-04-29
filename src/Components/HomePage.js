import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import SupportAgentSharpIcon from '@mui/icons-material/SupportAgentSharp';
const HomePage=()=>{
    const navigate=useNavigate();
    return <>
      <Box sx={{marginTop:"50%", display:'flex',justifyContent:'center',marginTop:"20px",border:"1px solid grey",padding:"10px",}}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <div>
            <BadgeTwoToneIcon onClick={()=>navigate("/employeeLogin")} style={{cursor:"pointer",}}/>
          </div>
          <div onClick={()=>navigate("/employeeLogin")} style={{cursor:"pointer",}}>
            
            Employee
          </div>
        </Grid>
        <Grid item xs={6} md={4}>
        <div>
            <SupportAgentSharpIcon onClick={()=>navigate("/customerSignUp")} style={{cursor:"pointer",}}/>
          </div>
          <div>
            Customer
          </div>
        </Grid>
      
      </Grid>
    </Box>  
    </>
}

export default HomePage