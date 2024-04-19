import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Loginp = () => {
  return (
    
    <div>
      <center>
        {/* <Box 
      height={800}
      width={275}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '1px solid grey' }}
    > */}
        <center>
            <Typography variant='h3'> sign-in</Typography><br/>
            <TextField id="F-name" label="FirstName" variant="outlined" /><br/><br/>
            <TextField id="L-name" label="Lastname" variant="outlined" /><br/><br/>
            <TextField id="number" label="Contact Number" variant="outlined" /><br/><br/>
            <TextField id="mail" label="E-mail" variant="outlined" /><br/><br/>
            <TextField id="address" label="Address" variant="outlined" /><br/><br/>
            <TextField id="l-mark" label="Landmark" variant="outlined" /><br/><br/>
            <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl><br/><br/>
    <Button variant='contained' color='success'>SUBMIT</Button><br/>
    <Typography variant='h7'> 
   already have an account... 
    </Typography>
    <Button variant='text'>
                <Link to={'/log'} style={{textDecoration:'none',color:'blue'}}>
                LOGIN
                </Link>
    </Button>
        </center>
    {/* </Box> */}
    </center>
    </div>
  )
}

export default Loginp