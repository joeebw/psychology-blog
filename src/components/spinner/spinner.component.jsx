import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './spinner.styles.scss'

const Spinner = ({isReady}) => {
  return (
  <div 
    className='spinner' 
    style={{display: isReady && 'none'}}
    >
    <CircularProgress size={80} />
  </div>
  )
}

export default Spinner
