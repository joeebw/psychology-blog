import { Container, Typography } from "@mui/material"
import './aboutMe.styles.scss'

function AboutMe() {
  return (
    <div className="about">
      <Container maxWidth={"md"} sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
        <Typography variant="h4" component={'h2'} textAlign={'center'}>
          Hola soy Sheri, psicóloga comprometida con tu bienestar emocional.
        </Typography>
        <Typography 
          variant="body1" 
          component={'p'} 
          marginTop={'50px'} 
          fontSize={'1.3rem'}
          textAlign={'center'}
        >
          Es muy importante cuidar de tu salud mental, ya que constituye un pilar fundamental en la vida. Te invito a acompañarme en la exploración de como funciona nuestra mente y a descubrir herramientas que nos permitan abordar diversos temas. Aprenderemos a reconocer aquellas cosas que nos benefician y cómo afrontarlas. Sin embargo, es fundamental recordar que este blog tiene como objetivo informar, pero si estás enfrentando algún problema específico, te recomiendo acudir a un profesional para recibir la atención adecuada y cuidar de tu salud mental.
        </Typography>
        <Typography fontWeight={'500'} marginTop={'30px'} variant="h5" component={'span'}>
          -Sheridan Jailin Pacheco
        </Typography>
      </Container>
    </div>
  )
}

export default AboutMe
