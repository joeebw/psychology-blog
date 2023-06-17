import { Box, Container } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import postsArray from '../../utils/posts/posts.json'
import './article.styles.scss'



const ArticleItem = () => {
  const {blog} = useParams();
  const [post, setPost] = useState('');
  const [url, setUrl] = useState('');
  

  useEffect(() => {
    import(`../../posts/${blog}.md`).then(res => {
      fetch(res.default)
      .then(response => response.text())
      .then(text => setPost(text))
    })

    for(const post of postsArray ) {
      if(post.blog === blog) {
        return setUrl(post.url);
      }
    }
  }, [])


  return (
    <Container sx={{marginTop: '140px'}}>
      <div className='article'>
        <img src={url} alt="" />
      </div>
      <Box sx={{marginY: '100px'}}>
        <ReactMarkdown className='markdown'>
            {post}
        </ReactMarkdown>
      </Box>
    </Container>
  )
}

export default ArticleItem
