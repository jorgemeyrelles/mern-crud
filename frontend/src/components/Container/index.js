import React, { useContext, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context/StageGlobal';

export default function MainContainer({children}) {
  const { login } = useContext(GlobalContext);
  const navigate = useNavigate();
  const check = localStorage.getItem('check') && JSON.parse(localStorage.getItem('check'));
  useEffect(() => {
    if (check !== null && !check) {
      navigate("/login");
    }
  }, [check]);
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}
