import React, { useState } from "react";
import PopupModal from "./PopupModal";
import axios from "axios";


const TechEvents = () => {

    const [isPopupVisible, setPopupVisible] = useState(false);

    
    const userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData,"**********");

    // console.log(userData,"user");

    // State variables to store event information
    const [eventInfo, setEventInfo] = useState({
        heading: '',
        content: '',
        org1Name: '',
        org2Name: '',
        org1Phone: '',
        org2Phone: '',
        registrationLink: '',
        venue: '',
    });

    // Function to toggle the popup visibility
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

    const eventRegister = async(eventName) => {
        try {
            const email = userData.email;
            const {data} = await axios.post('/eventRegister',{
                eventName,email 
            })
            // console.log(data);
            localStorage.setItem('userData', JSON.stringify(data))
        } catch (error) {
            console.log(error);
        }
    }
    console.log(localStorage.userData);


    return (

        <div className="section-tours" id="events">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary white letter-spacing">Technical Events</h2>
            </div>

            <div className="row">
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--1-tech">&nbsp;</div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1 bold-white">xCoders</span>
                            </h4>
                            <div className="card__details">
                                <p>
                                    CrossCoders is a zappy solo event where plain old coding
                                    is not the only task. Participants are expected to analyze
                                    code snippets and convert them into a language of their
                                    choice.
                                </p>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p
                                        className="btn btn--white"
                                        onClick={() => toggle('xCoders', 'CrossCoders is a zappy solo event where plain old coding is not the only task. Participants are expected to analyze code snippets and convert them into a language of their choice. The most accurate conversion of the snippet takes the win. Don’t wait, let’s decode the code at ×Coders!', 'Yaazhini J', 'Sai Subash Chandra', '+91 8428640960', '+91 8754470644', 'forms.gle/RqExTs9gLNsFEPCHA', 'Venue1')}
                                    >
                                        Know More
                                    </p>
                                </div>

                                {userData.event1 == "no" ? (
                                    <a onClick={() => { eventRegister("event1") }} className="btn btn--white">
                                        Register Now
                                    </a>
                                ) : (
                                    <a className="btn btn--white" target="_blank" href="https://forms.gle/RqExTs9gLNsFEPCHA" rel="noreferrer">
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
                                <span className="card__heading-span card__heading-span--2 bold-white">Thesis-Precized</span>
                            </h4>
                            <div className="card__details">
                                <p>
                                    Make us reimagine the future of tech. Thesis-Precized is
                                    your platform to present your papers to a distinguished
                                    panel of judges. Emerge victorious, and you take home the
                                    title of Best Paper!
                                </p>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-2">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p
                                        className="btn btn--white"
                                        onClick={() => toggle('Thesis-Precized', 'Make us reimagine the future of tech. Thesis-Precized is your platform to present your papers to a distinguished panel of judges. Emerge victorious, and you take home the title of Best Paper!', 'Hemalakshumi K ', 'Madhuvanthi R', '+91 89254 53687', '+91 91508 64004', 'forms.gle/G9GTWJTvh4SZGvqJA', 'Venue2')}
                                    >
                                        Know More
                                    </p>
                                </div>
                                {userData.event2 == "no" ? (
                                    <a className="btn btn--white" target="_blank" href="https://forms.gle/RqExTs9gLNsFEPCHA" rel="noreferrer">
                                        Register Now
                                    </a>
                                ) : (
                                    <a className="btn btn--white" target="_blank" href="https://forms.gle/RqExTs9gLNsFEPCHA" rel="noreferrer">
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
                                <span className="card__heading-span card__heading-span--3 bold-white">Plugs Out!</span>
                            </h4>
                            <div className="card__details">
                                <p>
                                    Blinded by the screen from coding all day? Flaunt your
                                    programming prowess as you code up solutions to
                                    algorithmic challenges at this sprightly event.Join us and
                                    discover the thrill of coding in a fun and interactive
                                    way!
                                </p>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-3">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p
                                        className="btn btn--white"
                                        onClick={() => toggle('Plugs Out!', 'Blinded by the screen from coding all day? Flaunt your programming prowess as you code up solutions to algorithmic challenges at this sprightly event. From beginner-friendly challenges to advanced programming quests, our games will test your skills and unleash your creativity. Join us and discover the thrill of coding in a fun and interactive way!', 'Rex Milan', 'Siva Manoj Kumar', '+91 73586 97901', '+91 80722 32119', 'forms.gle/P3QNm3woRoMd6bF66', 'Venue3')}
                                    >
                                        Know More
                                    </p>
                                </div>
                                {userData.event3 == "no" ? (
                                    <a className="btn btn--white" target="_blank" href="https://forms.gle/RqExTs9gLNsFEPCHA" rel="noreferrer">
                                        Register Now
                                    </a>
                                ) : (
                                    <a className="btn btn--white" target="_blank" href="https://forms.gle/RqExTs9gLNsFEPCHA" rel="noreferrer">
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
                                <div className="card__picture card__picture--4-tech">&nbsp;</div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1 bold-white">Game of Threats</span>
                                </h4>
                                <div className="card__details">
                                    <p>
                                        With the warmth of the networks and the coldness of curiosity, Join us for the brainstorming event of identity guessing, as the name speaks for itself, let's dive into our very own cybersecurity event, THE GAME OF THREATS!
                                    </p>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p
                                            className="btn btn--white"
                                            onClick={() => toggle('Game of Threats', 'With the warmth of the networks and the coldness of curiosity, Join us for the brainstorming event of identity guessing, as the name speaks for itself, let\'s dive into our very own cybersecurity event, THE GAME OF THREATS!.', 'Priyadharshan N S', 'Vishal', '+91 9498379770', '+91 6382145874', 'forms.gle/2r5S34Nfzvnivrzx6', 'Venue4')}
                                        >
                                            Know More
                                        </p>
                                    </div>
                                    {userData.event4 == "no" ? (
                                        <a className="btn btn--white" target="_blank" href="https://forms.gle/RqExTs9gLNsFEPCHA" rel="noreferrer">
                                            Register Now
                                        </a>
                                    ) : (
                                        <a className="btn btn--white" target="_blank" href="https://forms.gle/RqExTs9gLNsFEPCHA" rel="noreferrer">
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
                                <div className="card__picture card__picture--5-tech">&nbsp;</div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3 bold-white">ALGO-RHYTHMS</span>
                                </h4>
                                <div className="card__details">
                                    <p>
                                        Join us for an enthralling session of coding with a hint of jazzy music! Here, the tech enthusiast delves into the world of coding against the constant distraction of music that makes you want to keep tapping your feet! Are you up for the challenge? Let the beats and coding begin!
                                    </p>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p
                                            className="btn btn--white"
                                            onClick={() => toggle('ALGO-RHYTHMS', 'Join us for an enthralling session of coding with a hint of jazzy music! Here, the tech enthusiast delves into the world of coding against the constant distraction of music that makes you want to keep tapping your feet! Are you up for the challenge? Let the beats and coding begin!', 'Nisha', 'Harisha', '+91 6369946328', '+91 9710514448', 'forms.gle/KQrFXKMjRHmNKVMC6', 'Venue5')}
                                        >
                                            Know More
                                        </p>
                                    </div>
                                    {userData.event5 == "no" ? (
                                        <a className="btn btn--white" target="_blank" href="https://forms.gle/RqExTs9gLNsFEPCHA" rel="noreferrer">
                                            Register Now
                                        </a>
                                    ) : (
                                        <a className="btn btn--white" target="_blank" href="https://forms.gle/RqExTs9gLNsFEPCHA" rel="noreferrer">
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

        </div >
    );
};

export default TechEvents;
