import React, { useEffect } from 'react';
import i1 from '../img/IMG_4809.JPG';
import i2 from '../img/DSC_0548.JPG';
import i3 from '../img/IMG_4841.JPG';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
    })

    return (
        <div id="about" class="section-about" data-aos = "fade-down">

            <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary white letter-spacing">About Us</h2>
            </div>

            <div class="row">
                <div class="col-1-of-2">
                    <p class="paragraph">
                        <b>Computer Science & Business Systems </b>
                        is the first stream in engineering designed to meet the future
                        demands of the rapidly changing tech industry in the era of
                        Business 4.0. Designed by Tata Consultancy Services in an MoU
                        with educational institutions, CSBS is the degree program of the
                        future. The curriculum aims to ensure that the students
                        graduating from the program not only skill up in computer
                        science but also develop an equal appreciation of humanities and
                        management sciences.
                    </p>
                
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