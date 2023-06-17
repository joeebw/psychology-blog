import { Container, Typography } from "@mui/material"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import './bio.styles.scss'
import { useEffect, useState } from "react"

const bioContainerSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '140px'
}

const Bio = () => {
  const [about, setAbout] = useState('');

  useEffect(() => {
    import('../../posts/about-me.md').then(resp => {
      fetch(resp.default)
      .then(response => response.text())
      .then(text => setAbout(text))
    })
  }, [])


  return (
    <Container maxWidth='md'  sx={bioContainerSx}>
      <Typography variant="h3" component={'h3'} textAlign={'center'}>
        Psicologa Sheridan
      </Typography>
      <div className="profile-img">
        <img src="profile-blog.png" alt="" />
      </div>
      <ReactMarkdown className="about-profile">
        {about}
      </ReactMarkdown>
    </Container>
  )
}

export default Bio
