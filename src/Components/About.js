import React from 'react';

const About = () => {
    return (
        <div id="about" class="section-about">
            <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary letter-spacing">About Us</h2>
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
                    <p class="paragraph">
                        CSE with specialization in <b>Cyber security</b> is a future
                        focused specialized degree aiming at one of the most important
                        yet most overlooked tech domains - Cyber security. The program
                        equips students with Computer Science knowledge as well as the
                        competence to secure the Internet that will power our world
                        through the decades. This year, the maiden batch of CSE, with
                        specialization in Cyber security has been launched successfully
                        at Chennai Institute of Technology.
                    </p>
                </div>
                <div class="col-1-of-2">
                    <div class="composition">
                        <image
                            srcset="
                        img/logo3-01-min.jpeg  300w,
                        img/logo3-01-min.jpeg 1000w
                      "
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="Photo 1"
                            class="composition__photo composition__photo--p1"
                            src="img/logo3-01-min.jpeg"
                        />

                        <image
                            srcset="
                    img/main-img1-01-min.jpeg  300w,
                    img/main-img1-01-min.jpeg 1000w
                  "
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="Photo 2"
                            class="composition__photo composition__photo--p2"
                            src="img/main-img1-01-min.jpeg"
                        />

                        <image
                            srcset="img/team-01-min.jpeg 300w, img/team-01-min.jpeg 1000w"
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="Photo 3"
                            class="composition__photo composition__photo--p3"
                            src="img/team-01-min.jpeg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About