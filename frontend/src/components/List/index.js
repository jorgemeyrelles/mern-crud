import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { AppBar, Box, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import HeaderTable from '../HeaderTable';
import { api } from '../../service/api';
import BasicModal from '../Modal';

export default function CheckboxListSecondary() {
  const [checked, setChecked] = useState([1]);
  const [list, setList] = useState({
    valid: false,
    data: [{ nome: '', id: '', descricao: '', cpf: '', tipo: '' }],
  });
  const [arr, setArr] = useState([]);
  const [open, setOpen] = useState({ display: false, data: [] });

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleClickOne = (id) => {
    api.getOneFromList(id)
      .then((response) => setOpen({ display: true, data: response.data }));
    // return setOpen({ display: true, data: res });
  };

  useEffect(() => {
    api.getList()
      .then((response) => {
        setArr(response.data);
      });
  }, []);

  useEffect(() => {
    const check = {};
    console.log(arr, Object.values(check));
    arr.length > 0 && arr.map((e) => {
      return check[e.id] = e;
    });
    if (!list.valid && Object.values(check).length > 0) {
      setList({
        valid: true,
        data: Object.values(check),
      })
    }
  }, [arr]);

  return (
    <Box style={{
      textAlign: '-webkit-center',
      position: 'relative',
      top: '15%',
      height: '70%',
      overflow: 'auto',
      }}
    >
      <HeaderTable />
      {console.log(open)}
      <BasicModal value={open} show={setOpen} />
      <List dense sx={{ width: '100%', maxWidth: '90%', maxHeight: '80%', bgcolor: 'background.paper' }}>
        {list.valid && list.data.map(({ id, nome, cpf, tipo, descricao }) => {
          const labelId = `checkbox-list-secondary-label-${id}`;
          return (
            <ListItem
              key={id}
              secondaryAction={
                <div>
                  <IconButton color="primary">
                    <DriveFileRenameOutlineIcon />
                  </IconButton>
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </div>
              }
              disablePadding
            >
              <ListItemButton
                style={{ maxWidth: '90%' }}
                onClick={() => handleClickOne(id)}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={`${nome[0]}`}
                    src={`...`}
                  />
                </ListItemAvatar>
                <ListItemText style={{ width: '8%' }} id={labelId} primary={nome} />
                <ListItemText style={{ width: '8%' }} id={labelId} primary={cpf} />
                <ListItemText style={{ width: '5%' }} id={labelId} primary={tipo} />
                <ListItemText style={{ width: '10%' }} id={labelId} primary={descricao} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
