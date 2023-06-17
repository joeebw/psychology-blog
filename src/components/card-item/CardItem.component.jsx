import { Link } from 'react-router-dom'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CardItem({post}) {
  const {title, description, blog, url} = post;

  return (
    <Grid item xs={3}>
      <Card sx={{height: '500px', position: 'relative'}}>
        <CardMedia
          component="img"
          alt="green iguana"
          image={url}
          sx={{height: '200px', backgroundSize: 'cover'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${description.slice(0, 155)}...`}
          </Typography>
        </CardContent>
        <CardActions sx={{position:'absolute', bottom: '0px'}}>
          <Link to={`/article/${blog}`}>
            <Button size="small">Leer más...</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CardItem
