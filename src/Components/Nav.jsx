import { AppBar, Avatar, Button, Toolbar, colors } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <AppBar style={{backgroundColor:"#ff474c"}}>
          
            <Toolbar >
              &nbsp;&nbsp;&nbsp;
              
              <Button variant='text'>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
                    <Avatar alt="Remy Sharp" src="https://github.com/abhiraj6/img/blob/main/RESTO%20(1).jpg?raw=true" />
                </Link>
              </Button>
              <Button variant='text' >
                <Link to={'/Sign'} style={{textDecoration:'none',color:'white'}}>
                <Avatar src="/broken-image.jpg" />
                </Link>
              </Button>
              
       
            </Toolbar>
        </AppBar>
        
    </div>
  )
}

export default Nav