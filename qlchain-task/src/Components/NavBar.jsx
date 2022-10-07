import "../App";
import "../styles.css";
import IMAGES from '../images/imagesarray.js';


function NavBarMain() {
  return (
    <>
      <div className="navBar">
        <div className="leftnavBar">
          <img src={IMAGES.casinoPurple} alt="icon" className="casinoWhite"></img>
          <img src={IMAGES.casinoWhite} alt="icon" className="casinoPurple"></img>
          <a href="#home">QL CHAIN</a>
        </div>
        <div className="rightnavBar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#blockchain">Blockchain</a>
          <a href="#qrng">QRNG Documentation</a>
          <a href="#livenumbers">Live Numbers</a>
          <a href="#otp">OTP Services</a>
          <a href="#ql">QL Explorer</a>
        </div>
        <div className="links">
          <div className="signIn">
            <button>
              <p>Sign In</p>
            </button>
          </div>
          <div className="gStarted">
            <p>Getting Started</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarMain;
