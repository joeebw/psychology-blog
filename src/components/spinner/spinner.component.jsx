import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const styleSpinner = {
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  height: '100vh', 
  width: '100vw',
  fontSize: '4rem' 
}

const Spinner = () => {
  return (
  <Box sx={styleSpinner}>
    <CircularProgress size={80} />
  </Box>
  )
}

export default Spinner
