import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Select.css'

export default function SelectVariants() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="select1">Filtar por</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="select1"
          value={age}
          onChange={handleChange}
          label="Filtar por"
          class="select1"
          
        >
          
          <MenuItem value={10}  id="select1">Lançamento</MenuItem>
          <MenuItem value={20}  id="select1">Cronologia</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}