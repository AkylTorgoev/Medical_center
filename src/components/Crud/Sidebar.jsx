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
      <Paper elevation={5} sx={{ p: 2, bgcolor: '#f5f5f5', marginRight: '30px' }}>
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Search..."
          //   value={search}
          onChange={(e) => searchFilter(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />


        <Grid 
                sx={{mt: '10px'}}
                >
          <Box sx={{ display: 'flex' }}>

            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label" sx={{color: '#1976d2'}} >Специальность</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="все"
                name="radio-buttons-group"
                onChange={(e) => fetchByParams(e.target.value)}
                sx={{mt: '10px'}}
              >
                <FormControlLabel value="all" control={<Radio />} label="все" />

                <FormControlLabel
                  value="Уролог"
                  control={<Radio />}
                  label="Уролог"
                />

                <FormControlLabel
                  value="Узист"
                  control={<Radio />}
                  label="Врач-УЗИ"
                />
                <FormControlLabel
                  value="Травматолог"
                  control={<Radio />}
                  label="Травматолог"
                />
                <FormControlLabel
                  value="Терапевт"
                  control={<Radio />}
                  label="Терапевт"
                />
                <FormControlLabel
                  value="Хирург"
                  control={<Radio />}
                  label="Хирург"
                />
                <FormControlLabel
                  value="Рентгенолог"
                  control={<Radio />}
                  label="Рентгенолог"
                />
                <FormControlLabel
                  value="Педиатр"
                  control={<Radio />}
                  label="Педиатр"
                />
                <FormControlLabel
                  value="Офтальмолог"
                  control={<Radio />}
                  label="Офтальмолог"
                />
                <FormControlLabel
                  value="Гинеколог"
                  control={<Radio />}
                  label="Гинеколог"
                />
                <FormControlLabel
                  value="КТиМРТ"
                  control={<Radio />}
                  label="Врач КТ и МРТ"
                />
                <FormControlLabel
                  value="Кардиолог"
                  control={<Radio />}
                  label="Кардиолог"
                />
                <FormControlLabel
                  value="Аллерголог"
                  control={<Radio />}
                  label="Аллерголог"
                />


              </RadioGroup>
            </FormControl>
            <FormControl mt={100}>
              <FormLabel  id="demo-radio-buttons-group-label" sx={{color: '#1976d2'}}>Стаж работы</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="все"
                name="radio-buttons-group"
                onChange={(e) => fetchByParams(e.target.value)}
                sx={{mt: '10px'}}
              >
                <FormControlLabel value="all" control={<Radio />} label="все" />

                <FormControlLabel
                  value='5'
                  control={<Radio />}
                  label="от 2х лет"
                />

                <FormControlLabel
                  value='7'
                  control={<Radio />}
                  label="от 5х лет"
                />
                 <FormControlLabel
                  value='10'
                  control={<Radio />}
                  label="от 8х лет"
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
