import React, { useEffect, useState } from "react";
import PopupModal from "./PopupModal";
import Swal from 'sweetalert2';
import axios from "axios";
import Aos from "aos";
import 'aos/dist/aos.css';

const Workshops = () => {
  
  useEffect(() => {
    Aos.init({duration: 1000});
  })

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isBlurBackground, setBlurBackground] = useState(false);

  const loguser = JSON.parse(localStorage.getItem('userData'));
  const userData = loguser ? JSON.parse(localStorage.getItem('userData')) : "no_user";

  console.log(userData, "user");

  const [eventInfo, setEventInfo] = useState({
    heading: "",
    content: "",
    org1Name: "",
    org2Name: "",
    org1Phone: "",
    org2Phone: "",
    registrationLink: "",
    venue: "",
  });

  const toggle = (title, content, org1Name, org2Name, org1Phone, org2Phone, registrationLink, venue) => {
    setEventInfo({
      heading: title,
      content,
      org1Name,
      org2Name,
      org1Phone,
      org2Phone,
      registrationLink,
      venue,
    });
    setPopupVisible(!isPopupVisible);
  };

  const loginToRegister = () => {
    Swal.fire({
      icon: "info",
      title: "Login",
      text: "Kindly login to register for the event.",
    }).then((result) => {
      setBlurBackground(false);
    });
  }


  const eventRegister = async (eventName) => {
    try {
      const email = userData.email;
      const { data } = await axios.post('/eventRegister', {
        eventName, email
      })
      // console.log(data);
      localStorage.setItem('userData', JSON.stringify(data));
      Swal.fire({
        icon: "success",
        title: "Registered Successfully!",
        text: "You have successfully registered for the event.",
      }).then((result) => {
        setBlurBackground(false);
      });

      // Apply the blur effect to the background
      setBlurBackground(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="section-tours" id="events">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary white letter-spacing">
          Workshops
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <div className="card" data-aos = "zoom-in">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2-workshop">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1 bold-white">
                Ui/Ux Feat. Figma
                </span>
              </h4>
              <div className="card__details">
                <p>
                Discover this exceptional collaborative process in UI/UX workshops to elevate digital product design.
                By the end of this workshop, you'll not only possess the technical skills to wield design tools but also
                the mindset to shape the future of user-centric innovation. Engage in this notable collaborative approach
                during UI/UX workshops to refine the design of digital solutions.
                </p>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p
                    className="btn btn--white"
                    onClick={() =>
                      toggle(
                        "UI/UX Feat. Figma",
                        "Discover this exceptional collaborative process in UI/UX workshops to elevate digital product design. By the end of this workshop, you'll not only possess the technical skills to wield design tools but also the mindset to shape the future of user-centric innovation. Engage in this notable collaborative approach during UI/UX workshops to refine the design of digital solutions.",
                        "Jey Shreemen GR",
                        "Mahmoodah Hafsah S",
                        "+91 7604813964",
                        "+91 9940261966",
                        "forms.gle/RqExTs9gLNsFEPCHA",
                        "Venue1"
                      )
                    }
                  >
                    Know More
                  </p>
                </div>
                <div className="card__price-box">
                  
                    <a href="https://forms.gle/SqxqzPeT3f4Csyxa9" target="_blank" className="btn btn--white">
                      Register Now
                    </a>
    
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-2">
          <div className="card" data-aos = "zoom-in">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3-workshop">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2 bold-white">
                Trading & Investment
                </span>
              </h4>
              <div className="card__details">
                <p>
                Unlock financial empowerment through our trading and investment workshop. Whether you're a pro or a newcomer,
                gain the tools to navigate finance confidently. Don't miss the chance to boost your financial literacy and step
                into the world of trading and investment. Get ready to go from zero to hero!
                </p>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p
                    className="btn btn--white"
                    onClick={() =>
                      toggle(
                        "Trading & Investment",
                        "Unlock financial empowerment through our trading and investment workshop. Whether you're a pro or a newcomer, gain the tools to navigate finance confidently. Don't miss the chance to boost your financial literacy and step into the world of trading and investment. Get ready to go from zero to hero!",
                        "Prathap D",
                        "Madhukeshwar MS",
                        "+91 6379754326",
                        "+91 8072892365",
                        "forms.gle/G9GTWJTvh4SZGvqJA",
                        "Venue2"
                      )
                    }
                  >
                    Know More
                  </p>
                </div>
                <div className="card__price-box">
                  
                    <a href="https://forms.gle/sg9qZ6mV9bRwidXC6" target="_blank" className="btn btn--white">
                      Register Now
                    </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <PopupModal
        title={eventInfo.heading}
        content={eventInfo.content}
        name1={eventInfo.org1Name}
        name2={eventInfo.org2Name}
        phone1={eventInfo.org1Phone}
        phone2={eventInfo.org2Phone}
        register={eventInfo.registrationLink}
        venue={eventInfo.venue}
        isVisible={isPopupVisible}
        toggle={() => toggle()}
      />
    </div>
  );
};

export default Workshops;
