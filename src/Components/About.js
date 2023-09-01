import React from 'react';
import i1 from '../img/logo3-01-min.jpeg';
import i2 from '../img/main-img1-01-min.jpeg';
import i3 from '../img/team-01-min.jpeg';

const About = () => {
    return (
        <div id="about" class="section-about">

            <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary white letter-spacing">About Us</h2>
            </div>

            <div class="row">
                <div class="col-1-of-2">
                    <p class="paragraph">
                        <b>Computer Science & Business Systems</b>
                        is the first stream in engineering designed to meet the future
                        demands of the rapidly changing tech industry in the era of
                        Business 4.0. Designed by Tata Consultancy services in an MoU
                        with educational institutions, CSBS is the degree program of the
                        future. The curriculum aims to ensure that the students
                        graduating from the program not only skill up in computer
                        science but also develop an equal appreciation of humanities and
                        management sciences.
                    </p>
                    {/* <p class="paragraph">
                        CSE with specialization in <b>Cyber security</b> is a future
                        focused specialized degree aiming at one of the most important
                        yet most overlooked tech domains - Cyber security. The program
                        equips students with Computer Science knowledge as well as the
                        competence to secure the Internet that will power our world
                        through the decades. This year, the maiden batch of CSE, with
                        specialization in Cyber security has been launched successfully
                        at Chennai Institute of Technology.
                    </p> */}
                </div>
                <div class="col-1-of-2">
                    <div class="composition">
                        <img
                            srcset={`${i1} 300w, ${i1} 1000w`}
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="Pic1"
                            class="composition__photo composition__photo--p1"
                            src={i1}
                        />

                        <img
                            srcset={`${i2} 300w, ${i2} 1000w`}
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="Photo2"
                            class="composition__photo composition__photo--p2"
                            src={i2}
                        />

                        <img
                            srcset={`${i3} 300w, ${i3} 1000w`}
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="Pic33"
                            class="composition__photo composition__photo--p3"
                            src={i3}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About