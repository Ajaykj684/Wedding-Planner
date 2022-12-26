import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const top5Songs = [
    { label: 'Organise'},
    { label: 'Joha'},
    { label: 'Terminator'},
    { label: 'Dull'},
    { label: 'Nzaza'},
  ];

function Search({children, title}) {
  return (
    <>
     <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top5Songs}
      sx={{ width: 200, position: 'absolute', top: 200, left: `${children}`, zIndex: 'tooltip', bgcolor:'#FFFFFF', borderRadius: 2 }}
      renderInput={(params) => <TextField {...params} label={title} />}
    />
    </>
  )
}

export default Search