import React from 'react';
import { AppBar, Typography } from '@mui/material';

// import { Container } from './styles';

function HeaderTable() {
  return (
    <AppBar position="relative" style={{ padding: '10px 0', display: '-webkit-inline-box', borderRadius: '10px 10px 0 0' }} sx={{ width: '90%' }}>
      <div style={{ fontFamily: 'roboto', display: 'flex', justifyContent: 'space-between', position: 'relative', left: '10%', width: '40%' }}>
        <Typography
            variant="p"
            noWrap
            component="div"
            href=""
            sx={{
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Nome
          </Typography>
          <Typography
            variant="p"
            noWrap
            component="div"
            href=""
            sx={{
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CPF
          </Typography>
          <Typography
            variant="p"
            noWrap
            component="div"
            href=""
            sx={{
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Tipo
          </Typography>
          <Typography
            variant="p"
            noWrap
            component="div"
            href=""
            sx={{
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Contato
          </Typography>
        </div>
        <div style={{ fontFamily: 'roboto', display: 'flex', justifyContent: 'space-between', position: 'absolute', right: '10px', width: '13%' }}>
          <Typography
            variant="p"
            noWrap
            component="div"
            href=""
            sx={{
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Editar
          </Typography>
          <Typography
            variant="p"
            noWrap
            component="div"
            href=""
            sx={{
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Deletar
          </Typography>
        </div>
    </AppBar>
  );
}

export default HeaderTable;