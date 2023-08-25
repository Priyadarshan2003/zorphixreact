import './App.css';
import Main from './Components/Main';
import citlogo from './img/NEW LOGO CIT.png';
import zorphixfinal from './img/Zorphix final without name.png';
import zorphixlanding from './img/zorphix-landing-logo.png';
import { motion, useScroll } from "framer-motion"


function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div> 
      <div id="blur violet">
        <div className="navigation">
          <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>

          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <div className="navigation__link">
                  {/* <a href="#" className="navigation__link one"> Home </a> */}
                </div>
              </li>
              <li className="navigation__item">
                <div className="navigation__link">
                  <a href="#about" className="navigation__link two"> About </a>
                </div>
              </li>
              <li className="navigation__item">
                <div className="navigation__link">
                  <a href="#events" className="navigation__link three"> Events </a>
                </div>
              </li>
              <li className="navigation__item">
                <div className="navigation__link">
                  <a href="#team" className="navigation__link four"> Team </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header" id="header">
          <div className="header__logo-box">
            <img className="citlogo" src={citlogo} alt="clg-logo" />
          </div>

          <div className="header__text-box">
            <div className="logos">
              <img
                className="heading-primary--sub zor"
                src={zorphixfinal}
                alt="new-logo"
              />
              <img
                className="heading-primary--main zorphix"
                src={zorphixlanding} alt='zorphix-logo'
              />
            </div>
            <h1 className="heading-primary--sub date">September 20th 2023</h1>

            <a href="#about" className="btn btn--white btn--animated bold">
              Get Started
            </a>
          </div>
        </div>

        <Main />

      </div>
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
    </div>
  );
}

export default App;
