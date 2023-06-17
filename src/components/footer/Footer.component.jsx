import { useContext } from 'react';
import { Container, Grid, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {ScreenContext} from '../../context/screen.context'
import './footer.styles.scss'

const flexContainer = {
  display: 'flex',  
  flexDirection: 'column', 
  alignItems: 'center',
  gap: '20px'
}

const typographyStyle = {
  fontWeight: '500',
  textAlign: 'center',
  marginBottom: '50px',
  paddingTop: '20px'
}

function Footer() {
  const {isSmallScreen} = useContext(ScreenContext);

  return (
    <div className='footer'>
      <Container maxWidth='sm'>
        <Typography 
          variant={isSmallScreen ? 'h5' :'h4'} 
          component={'h5'} 
          sx={typographyStyle}
        >
          Contactame
        </Typography>
        <Grid container>
          <Grid 
            item xs={6} 
            sx={flexContainer}
          >
            <Typography variant={isSmallScreen ? 'h6' :'h5'} component={'h5'} fontWeight={500}>
              Instagram
            </Typography>
            <InstagramIcon className='icon instagram'/>
          </Grid>
          <Grid 
            item 
            xs={6}  
            sx={flexContainer}
          >
            <Typography variant={isSmallScreen ? 'h6' :'h5'} component={'h5'} fontWeight={500}>
              Email
            </Typography>
            <MailOutlineIcon className='icon email'/>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer
