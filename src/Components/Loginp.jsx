import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Loginp = () => {
  return (
    <div>
      <center>
        {/* <Box
      height={400}
      width={275}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    > */}
        <center>
            <Typography variant='h2'> sign-in</Typography><br/>
            <TextField id="username" label="username" variant="outlined" /><br/><br/>
           <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"></TextField>
            <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
      </RadioGroup>
    </FormControl><br/><br/>
    <Button variant='contained' color='success'>
    <Link to={'/Homep'} style={{textDecoration:'none',color:'white'}}>
      LOGIN</Link></Button>
        </center>
    {/* </Box> */}
    </center>
    </div>
  )
}

export default Loginp;