import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const buttonStyle = {
  fontFamily: 'Poppins, sans-serif',
  color: '#ffffff'
}

export default function NavBar() {
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{display: 'flex', justifyContent:'space-between'}}>
          <Link to={'/'} style={{textDecoration: 'none'}}>
            {/* <Typography variant="h5" component="span" sx={{ flexGrow: 1}} fontWeight={500} color={'white'}>
              Psicología con Sheri
            </Typography> */}
            <img src="Logo.png" alt=""  style={{width: '80px',paddingLeft: '50px'}}/>
          </Link>
          <Box sx={{display: 'flex', gap: '15px'}}>
            <Link to={'/'}>
              <Button variant='text' sx={buttonStyle}>Inicio</Button>
            </Link>
            <Link to={'/bio'}>
              <Button variant='text' sx={buttonStyle}>Sobre Mi</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}