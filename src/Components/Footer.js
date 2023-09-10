import React from 'react'
import fulllogo from '../img/footer.png'
import instalogo from '../img/insta footer.png';

const Footer = () => {
    return (
        <div id="footer" class="footer">
            <div class="footer__logo-box">
                <picture class="footer__logo">
                    <img alt="Full logo" src={fulllogo}/>
                </picture>
            </div>
            <div class="row">
                <div class="col-1-of-2">
                    <p class="footer__copyright">
                        Zorphix is a techno-management symposium organized by the
                        Department of 'Computer Science and Business Systems' at Chennai Institute of Technology.
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
            <div className='text-center'>
                <span>Visitors:</span>
                <a className='count' href="#footer">
                <img src="https://hitwebcounter.com/counter/counter.php?page=9020036&style=0024&nbdigits=4&type=ip&initCount=0" title="Counter Widget" Alt="visitor-counter"   border="0" /></a>   
                </div>
        </div>
    )
}

export default Footer