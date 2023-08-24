import React from 'react'
import git from '../img/git.png';
import wolfr from '../img/wolfr.png';
import do_logo from '../img/DO_Logo_Vertical_White.png';
import people_logo from '../img/people_logo-removebg-preview.png';
import cake_logo from '../img/cake_logo_white.png'

const Sponsors = () => {
    return (
        <div class="section-features">
            <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary white letter-spacing">Sponsored By</h2>
            </div>
            <div class="sponsor">
                <div class="github-sponsor">
                    <div class="section-sponsor-card">
                        <img src={git} class="git" alt="github" />
                    </div>
                </div>
                <div class="row1">
                    <div class="section-sponsor-card">
                        <img
                            src={wolfr}
                            class="i padding border wol"
                            alt="wolfram"
                        />
                    </div>

                    <div class="section-sponsor-card">
                        <img
                            src={do_logo}
                            class="i ocean"
                            alt="digitalOcean"
                        />
                    </div>
                    <div class="section-sponsor-card">
                        <img
                            src={people_logo}
                            alt="people's logo"
                            class="i some-large"
                        />
                    </div>

                    <div class="section-sponsor-card">
                        <img
                            src={cake_logo}
                            class="i padding-not"
                            alt="interviewcake"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors;
