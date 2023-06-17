import { Container, Grid } from '@mui/material';
import posts from '../../utils/posts/posts.json'
import CardItem from '../card-item/CardItem.component';


function Articles() {
  return (
    <Container sx={{marginY: '100px'}}>
      <Grid container spacing={2}> 
        {posts.map((post, index) => (
          <CardItem post={post} key={index}/>
        ))}
      </Grid>
    </Container>
  )
}

export default Articles
