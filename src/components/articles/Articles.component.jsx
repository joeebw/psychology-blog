import { useContext } from 'react';
import {ScreenContext} from '../../context/screen.context'
import { Container, Grid } from '@mui/material';
import posts from '../../utils/posts/posts.json'
import CardItem from '../card-item/CardItem.component';

function Articles() {
  const {isSmallScreen} = useContext(ScreenContext);

  return (
    <Container sx={{marginY: '100px', paddingX: isSmallScreen && '0px'}}>
      <Grid container spacing={2}> 
        {posts.map((post, index) => (
          <CardItem post={post} key={index}/>
        ))}
      </Grid>
    </Container>
  )
}

export default Articles
