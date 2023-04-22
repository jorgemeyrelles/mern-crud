import React, { useEffect, useState } from 'react';
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { api } from '../../service/api';
import { useNavigate } from 'react-router-dom';

// import { Container } from './styles';

function ToRegister() {
  const [insertOne, setInsertOne] = useState({ username: '', password: '', repetePassword: '' });
  const [valid, setValid] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const { username, password, repetePassword } = insertOne;
    const checkPassword = password.length >=6 && password.length <= 8;
    const checkUsername = username.length >= 6 && username.length <= 15;
    const checkRepete = password === repetePassword;
    if (checkPassword && checkUsername && checkRepete) {
      setValid(false);
    }
  }, [insertOne]);

  console.log(insertOne.username, insertOne.password, insertOne.repetePassword, insertOne.password === insertOne.repetePassword);

  const handleChange = ({ name, value }) => {
    setInsertOne((e) => ({ ...e, [name]: value }));
  };

  const handleClick = (e) => {
    if (e.username !== '') {
      api.postRegister(e)
        .then((response) => localStorage.setItem('user', JSON.stringify(response)));
      localStorage.setItem('check', true);
      navigate("/home");
    }
  };

  return (
    <Box
      style={{
        maxWidth: '300px',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '15px',
        position: 'absolute',
        top: '20%',
        left: '20%',
      }}
    >
      <FormControl style={{ width: '100%' }}>
        <Typography
          variant='h6'
          style={{  alignSelf: 'center' }}
          id="demo-radio-buttons-group-label"
        >
          Registrar
        </Typography>
        <TextField
          type="text"
          style={{ padding: '10px' }}
          onChange={(e) => handleChange(e.target)}
          id="outlined-basic"
          name="username"
          label="username"
          variant="outlined"
          placeholder='Min de 6 e Máx de 15'
          required
        />
        <TextField
          type="text"
          onChange={(e) => handleChange(e.target)}
          style={{ padding: '10px' }}
          id="outlined-basic"
          name="password"
          label="password"
          variant="outlined"
          placeholder='Min. de 6 e Max. de 8 '
          required
        />
        <TextField
          type="text"
          onChange={(e) => handleChange(e.target)}
          style={{ padding: '10px' }}
          id="outlined-basic"
          name="repetePassword"
          label="repetir o password"
          variant="outlined"
          required
          placeholder='Repetir password'
        />
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
          <Button
            variant="contained"
            onClick={() => handleClick(insertOne)}
            disabled={valid}
          >
            Registrar
          </Button>
        </div>
      </FormControl>
    </Box>
  );
}

export default ToRegister;