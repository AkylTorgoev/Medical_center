import React, { useEffect, useState } from 'react';
import { Divider, Grid, InputAdornment, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/system';
import { useProducts } from '../../context/ProductContextProvider';

const SideBar = () => {
  const { fetchByParams, searchFilter } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('q') || '');

//   useEffect(() => {
//     setSearchParams({
//       q: search,
//     })

//   }, [ search]);
  


  return (
    <Grid item md={2} >
      <Paper elevation={5} sx={{ p: 2, bgcolor:'#f5f5f5'}}>
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Search..."
        //   value={search}
          onChange={(e) =>  searchFilter(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />


<Grid>
<Box sx={{display: 'flex', flexDirection: 'column'}}>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Specialities</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="все"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams(e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="все" />

              <FormControlLabel
                value="urolog"
                control={<Radio />}
                label="Urolog"
              />

              <FormControlLabel
                value="nevrology"
                control={<Radio />}
                label="Nevrology"
              />

              

            </RadioGroup>
          </FormControl>
          </Box>
        </Grid>




          
      </Paper>
    </Grid>
  );
};

export default SideBar;
