import "../App";
import "../styles.css";
import IMAGES from '../images/imagesarray.js';

function MainPage() {
  return (
    <>
      <div className="main">
        <div className="portfolio">
          <p>Start your portfolio</p>
          <div className="portfolio-arrow">
            <img src={IMAGES.arrowRight} alt="arrow-icon"></img>
          </div>
        </div>
        <div className="mainHead">
          <p>Most Secure Key On Earth</p>
        </div>
        <div className="contentHead">
          <p>
            Infinite Randomness of the number with quantum random number
            generation.
          </p>
        </div>
        <div className="email">
          <p>Start with your Email</p>
          <div className="email-arrow">
            <img src={IMAGES.arrowRightWhite} alt="arrow-icon"></img>
          </div>
        </div>
        <div className="background-icons">
          <img src={IMAGES.wave} alt="wave" className="wave"></img>
          <img src={IMAGES.macStudio} alt="mac-studio" className="mac-studio"></img>
          <img src={IMAGES.screen} alt="screen" className="screen"></img>
          <img src={IMAGES.studioDisplay} alt="studio-display" className="studio-display"></img>

        </div>
      </div>
    </>
  );
}

export default MainPage;
