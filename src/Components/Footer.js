import React from 'react'
import fulllogo from '../img/footer.png'
import instalogo from '../img/insta footer.png';

const Footer = () => {
    return (
        <div class="footer">
            <div class="footer__logo-box">
                <picture class="footer__logo">
                    <img alt="Full logo" src={fulllogo}/>
                </picture>
            </div>
            <div class="row">
                <div class="col-1-of-2">
                    <p class="footer__copyright">
                        Zorphix is a techno-management symposium organized by the
                        Department of 'Computer Science and Business Systems' and 'Cyber
                        Security' at Chennai Institute of Technology.
                    </p>
                </div>

                <div class="col-1-of-2">
                    <div class="footer__navigation">
                        <div class="f">
                            <h3>CONNECT WITH US</h3>
                            <a
                                href="https://www.instagram.com/zorphix.cit/"
                                target="_blank"
                                rel='noreferrer'
                            >
                                <img class="footer__img" src={instalogo} alt=""
                                /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <span class="copyright">@Zorphix 2023 All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer