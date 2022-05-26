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
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>

            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Специальность</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="все"
                name="radio-buttons-group"
                onChange={(e) => fetchByParams(e.target.value)}
                sx={{mt: '10px'}}
              >
                <FormControlLabel value="all" control={<Radio />} label="все" />

                <FormControlLabel
                  value="urologist"
                  control={<Radio />}
                  label="Уролог"
                />

                <FormControlLabel
                  value="ultrasound"
                  control={<Radio />}
                  label="Врач-УЗИ"
                />
                <FormControlLabel
                  value="traumatologist"
                  control={<Radio />}
                  label="Травматолог"
                />
                <FormControlLabel
                  value="therapist"
                  control={<Radio />}
                  label="Терапевт"
                />
                <FormControlLabel
                  value="surgeon"
                  control={<Radio />}
                  label="Хирург"
                />
                <FormControlLabel
                  value="radiologist"
                  control={<Radio />}
                  label="Рентгенолог"
                />
                <FormControlLabel
                  value="pediatrician"
                  control={<Radio />}
                  label="Педиатр"
                />
                <FormControlLabel
                  value="ophthalmologist"
                  control={<Radio />}
                  label="Офтальмолог"
                />
                <FormControlLabel
                  value="gynecologist"
                  control={<Radio />}
                  label="Гинеколог"
                />
                <FormControlLabel
                  value="ctandmri"
                  control={<Radio />}
                  label="Врач КТ и МРТ"
                />
                <FormControlLabel
                  value="cardiologist"
                  control={<Radio />}
                  label="Кардиолог"
                />
                <FormControlLabel
                  value="allergologist"
                  control={<Radio />}
                  label="Аллерголог"
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
