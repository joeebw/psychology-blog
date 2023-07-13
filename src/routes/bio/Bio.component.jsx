import { useContext, useEffect, useState } from "react";
import { ScreenContext } from "../../context/screen.context";
import { Container, Typography } from "@mui/material";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Spinner from "../../components/spinner/spinner.component";
import profileImg from "../../assets/profile-blog.png";
import "./bio.styles.scss";

const bioContainerSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "140px",
};

const Bio = () => {
  const [about, setAbout] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { isSmallScreen } = useContext(ScreenContext);

  useEffect(() => {
    import("../../posts/about-me.md").then((resp) => {
      fetch(resp.default)
        .then((response) => response.text())
        .then((text) => {
          setAbout(text);
        });
    });
  }, []);

  // when the image and the markdown are loaded then show the content
  useEffect(() => {
    if (isLoaded && about) {
      setIsReady(true);
    }
  }, [isReady, about]);

  const handleOnLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <Spinner isReady={isReady} />
      <Container maxWidth="md" sx={bioContainerSx}>
        <Typography
          variant={isSmallScreen ? "h4" : "h3"}
          component={"h3"}
          textAlign={"center"}
        >
          Psicóloga Sheridan
        </Typography>
        <div className="profile-img">
          <img src={profileImg} onLoad={handleOnLoad} />
        </div>
        <ReactMarkdown className="about-profile">{about}</ReactMarkdown>
      </Container>
    </>
  );
};

export default Bio;
