import React from "react";
import Image from 'react-bootstrap/Image';
import './About.css'
import bioPic from '../../assets/imgs/Gabee_About.jpg'
import aboutText from '../../textFiles/aboutText'


const About = () => {

  return (
    <>
      <article className="blurb">
        <h2>About Me</h2>
          {aboutText}
          <Image src="https://files.ontraport.com/media/92b3437b0eaa568cabc28c78db745a36?Expires=1803682372&Signature=Qck0EAt02VbnmDsCZf85NRbrReVuDIHKtBc5ga364IhvXkvuX9RHXQP4m46~zu7lR94QkVi5ZyJKrmb0vzYzcu~KpkT8-zYOkGvbQt61fJ2yZrGe9E6V878uyOIHbSS9cr5vgT7JG4cwzwVT0hRQWOucPNaxlTVAf~Z8RfzARIz1IJ4S5pe5-~U6tbZ3hq2lOZsgUXHFK57GjkdJaq5ukQ3mem5qWB0mVuAt0brN1tlcghDbSvv1ejuQKpa-LskP23Fo7vlAytzcwkmyDQOr4fcV9fU7Wru719~XpPK6eLo7duj7Wdahld3kQNc5hW7xBk9HST1ouN2S~GTR9PnU-Q__&Key-Pair-Id=APKAJVAAMVW6XQYWSTNA" style={{width: '150px', height:'150px'}} alt="biddy tarot certification" className="mb-1"/>
      </article>
      <Image src={bioPic} alt="a photo of Gabriella sitting on teh floor in front of a black background, wearing a patterened, multi-colored dress, colorful pom headband, and colorful makeup with gems. She is leaning foward towards the camera, appearing to be laughing, while holding and spreading tarot cards in her hands." className="AboutPic" />
    </>
  )
};

export default About;