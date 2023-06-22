import { useContext, useEffect, useState } from "react"
import {ScreenContext} from '../../context/screen.context'
import { Container, Typography } from "@mui/material"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import Spinner from "../../components/spinner/spinner.component"
import profileImg from '../../assets/profile-blog.png'
import './bio.styles.scss'

const bioContainerSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '140px'
}

const Bio = () => {
  const [about, setAbout] = useState('');
  const {isSmallScreen} = useContext(ScreenContext);

  useEffect(() => {
    import('../../posts/about-me.md').then(resp => {
      fetch(resp.default)
      .then(response => response.text())
      .then(text => {
        setAbout(text);
      })
    })
  }, [])


  return (
    <>
      {
      !about ? <Spinner/> :
      <Container maxWidth='md'  sx={bioContainerSx}>
        <Typography variant={isSmallScreen ? "h4" : "h3" } component={'h3'} textAlign={'center'}>
          Psicóloga Sheridan
        </Typography>
        <div className="profile-img">
          <img src={profileImg} alt="" />
        </div>
        <ReactMarkdown className="about-profile">
          {about}
        </ReactMarkdown>
      </Container>
      }
    </>
  )
}

export default Bio
