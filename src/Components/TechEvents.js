import React, { useState } from "react";
import PopupModal from "./PopupModal";
import Swal from "sweetalert2";
import "../App.css";
import "sweetalert2/dist/sweetalert2.min.css";
import axios from "axios";

const TechEvents = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isBlurBackground, setBlurBackground] = useState(false);

  const loguser = JSON.parse(localStorage.getItem("userData"));
  const userData = loguser
    ? JSON.parse(localStorage.getItem("userData"))
    : "no_user";
  // console.log(userData,"**********");

  // console.log(userData, "user");

  // State variables to store event information
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

  // Function to toggle the popup visibility
  const toggle = (
    title,
    content,
    org1Name,
    org2Name,
    org1Phone,
    org2Phone,
    registrationLink,
    venue
  ) => {
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
  };

  const eventRegister = async (eventName) => {
    try {
      const email = userData.email;
      const { data } = await axios.post("/eventRegister", {
        eventName,
        email,
      });
      // console.log(data);
      localStorage.setItem("userData", JSON.stringify(data));
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
  };
  // console.log(localStorage.userData);

  return (
    <div
      className={`section-tours ${isBlurBackground ? "blur-background" : ""}`}
      id="events"
    >
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary white letter-spacing">
          Technical Events
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1-tech">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1 bold-white">
                  xCoders
                </span>
              </h4>
              <div className="card__details">
                <p>
                  CrossCoders is an electrifying coding competition where
                  participants go beyond traditional coding. Contestants are
                  expected to analyze code snippets and convert them into a
                  language of their choice.
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
                        "xCoders",
                        "CrossCoders is an electrifying coding competition where participants go beyond traditional coding. Contestants are expected to analyze code snippets and convert them into a language of their choice.",
                        "Yaazhini J",
                        "Sai Subash Chandra",
                        "+91 8428640960",
                        "+91 8754470644",
                        "forms.gle/RqExTs9gLNsFEPCHA",
                        "Venue1"
                      )
                    }
                  >
                    Know More
                  </p>
                </div>

                {userData === "no_user" ? (
                  <a
                    onClick={() => {
                      loginToRegister();
                    }}
                    className="btn btn--white"
                  >
                    Register Now
                  </a>
                ) : userData.event1 == "no" ? (
                  <a
                    onClick={() => {
                      eventRegister("event1");
                    }}
                    className="btn btn--white"
                  >
                    Register Now
                  </a>
                ) : (
                  <a
                    className="btn btn--white"
                    target="_blank"
                    href="https://forms.gle/RqExTs9gLNsFEPCHA"
                    rel="noreferrer"
                  >
                    Registered
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2-tech">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2 bold-white">
                  Thesis-Precized
                </span>
              </h4>
              <div className="card__details">
                <p>
                  Inspire us to redefine the tech landscape. Thesis Precised is
                  your platform to present and engage in the presentation as
                  they delve into the captivating realm of your thesis
                  precisely. Emerge victorious, and you take home the
                  title of BEST PAPER.
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
                        "Thesis-Precized",
                        "Inspire us to redefine the tech landscape. Thesis Precised is your platform to present and engage in the presentation as they delve into the captivating realm of your thesis precisely. Emerge victorious, and you take home the title of BEST PAPER.",
                        "Hemalakshumi K ",
                        "Madhuvanthi R",
                        "+91 89254 53687",
                        "+91 91508 64004",
                        "forms.gle/G9GTWJTvh4SZGvqJA",
                        "Venue2"
                      )
                    }
                  >
                    Know More
                  </p>
                </div>
                {userData === "no_user" ? (
                  <a
                    onClick={() => {
                      loginToRegister();
                    }}
                    className="btn btn--white"
                  >
                    Register Now
                  </a>
                ) : userData.event2 == "no" ? (
                  <a
                    onClick={() => {
                      eventRegister("event2");
                    }}
                    className="btn btn--white"
                  >
                    Register Now
                  </a>
                ) : (
                  <a
                    className="btn btn--white"
                    target="_blank"
                    href="https://forms.gle/RqExTs9gLNsFEPCHA"
                    rel="noreferrer"
                  >
                    Registered
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3-tech">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3 bold-white">
                  Coin Quest
                </span>
              </h4>
              <div className="card__details">
                <p>
                  Ever wanted to participate in a digital tech game event?
                  Here's your chance! Participants play a series of wordplay,
                  quizzes, and games that advance through rounds. Get ready to
                  tech it up at Coin Quest.
                </p>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p
                    className="btn btn--white"
                    onClick={() =>
                      toggle(
                        "Coin Quest",
                        "Ever wanted to participate in a digital tech game event? Here's your chance! Participants play a series of wordplay, quizzes, and games that advance through rounds. Get ready to tech it up at Coin Quest.",
                        "Rex Milan",
                        "Siva Manoj Kumar",
                        "+91 73586 97901",
                        "+91 80722 32119",
                        "forms.gle/P3QNm3woRoMd6bF66",
                        "Venue3"
                      )
                    }
                  >
                    Know More
                  </p>
                </div>
                {userData === "no_user" ? (
                  <a
                    onClick={() => {
                      loginToRegister();
                    }}
                    className="btn btn--white"
                  >
                    Register Now
                  </a>
                ) : userData.event3 == "no" ? (
                  <a
                    onClick={() => {
                      eventRegister("event3");
                    }}
                    className="btn btn--white"
                  >
                    Register Now
                  </a>
                ) : (
                  <a
                    className="btn btn--white"
                    target="_blank"
                    href="https://forms.gle/RqExTs9gLNsFEPCHA"
                    rel="noreferrer"
                  >
                    Registered
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm-padding" id="section-tours">
        <div className="row">
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--4-tech">
                  &nbsp;
                </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1 bold-white">
                    2 Facts 1 Lie
                  </span>
                </h4>
                <div className="card__details">
                  <p>
                    66% of all statistics are made up. And we just made this up
                    too. Plutus is an event based on the popular party game 2
                    Truths 1 Lie, albeit with a business touch to it! Unravel
                    the truth from a web of captivating statements.
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
                          "2 Facts 1 Lie",
                          "66% of all statistics are made up. And we just made this up too. Plutus is an event based on the popular party game 2 Truths 1 Lie, albeit with a business touch to it! Unravel the truth from a web of captivating statements.",
                          "Priyadarshan N S",
                          "Vishal",
                          "+91 9498379770",
                          "+91 6382145874",
                          "forms.gle/2r5S34Nfzvnivrzx6",
                          "Venue4"
                        )
                      }
                    >
                      Know More
                    </p>
                  </div>
                  {userData === "no_user" ? (
                    <a
                      onClick={() => {
                        loginToRegister();
                      }}
                      className="btn btn--white"
                    >
                      Register Now
                    </a>
                  ) : userData.event4 == "no" ? (
                    <a
                      onClick={() => {
                        eventRegister("event4");
                      }}
                      className="btn btn--white"
                    >
                      Register Now
                    </a>
                  ) : (
                    <a
                      className="btn btn--white"
                      target="_blank"
                      href="https://forms.gle/RqExTs9gLNsFEPCHA"
                      rel="noreferrer"
                    >
                      Registered
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--5-tech">
                  &nbsp;
                </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3 bold-white">
                    ALGO-RHYTHMS
                  </span>
                </h4>
                <div className="card__details">
                  <p>
                    Are you ready to dive into a world where melodies are
                    composed by lines of code, and rhythm is dictated by
                    algorithms? Here, the tech enthusiast delves into coding
                    against the distraction of music. Let the beats
                    and coding begin!
                  </p>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p
                      className="btn btn--white"
                      onClick={() =>
                        toggle(
                          "ALGO-RHYTHMS",
                          "Are you ready to dive into a world where melodies are composed by lines of code, and rhythm is dictated by algorithms? Here, the tech enthusiast delves into coding against the distraction of music. Let the beats and coding begin!",
                          "Nisha",
                          "Harisha",
                          "+91 6369946328",
                          "+91 9710514448",
                          "forms.gle/KQrFXKMjRHmNKVMC6",
                          "Venue5"
                        )
                      }
                    >
                      Know More
                    </p>
                  </div>
                  {userData === "no_user" ? (
                    <a
                      onClick={() => {
                        loginToRegister();
                      }}
                      className="btn btn--white"
                    >
                      Register Now
                    </a>
                  ) : userData.event5 == "no" ? (
                    <a
                      onClick={() => {
                        eventRegister("event5");
                      }}
                      className="btn btn--white"
                    >
                      Register Now
                    </a>
                  ) : (
                    <a
                      className="btn btn--white"
                      target="_blank"
                      href="https://forms.gle/RqExTs9gLNsFEPCHA"
                      rel="noreferrer"
                    >
                      Registered
                    </a>
                  )}
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

export default TechEvents;
