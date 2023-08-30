import React, { Component } from 'react';
import './Login.css';
import logo from '../../img/loginlog.png'
import img1 from '../../img/loginimg1.png';
import img2 from '../../img/loginimg2.png';
import img3 from '../../img/loginimg3.png';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            isSignUpMode: false,
            activeImage: 1,
        };
    }

    handleInputFocus = (event) => {
        event.target.classList.add('active');
    };

    handleInputBlur = (event) => {
        if (event.target.value === '') {
            event.target.classList.remove('active');
        }
    };

    toggleMode = (event) => {
        event.preventDefault();
        this.setState((prevState) => ({
            isSignUpMode: !prevState.isSignUpMode,
            activeImage: 1,
        }));
    };

    moveSlider = (index) => {
        this.setState({ activeImage: index });
        const textSlider = document.querySelector('.text-group');
        textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;
    };

    render() {
        const { isSignUpMode, activeImage } = this.state;

        return (
            <main>
                <div className={`login-box ${isSignUpMode ? 'sign-up-mode' : ''}`}>
                    <div className="inner-box">
                        <div className="forms-wrap">
                            <form id='login' autoComplete="off" className="sign-in-form">
                                <div className="login-logo">
                                    <img src={logo} alt="easyclass" />
                                </div>

                                <div className="heading">
                                    <h2>{isSignUpMode ? 'Welcome back' : 'Get registered'}</h2>
                                    <h6>{isSignUpMode ? 'Not registered yet ? ' : 'Already registered ? '}</h6>
                                    <button className="toggle link-button" onClick={this.toggleMode}>
                                        {isSignUpMode ? 'Sign up' : 'Sign in'}
                                    </button>
                                </div>

                                <div className="actual-form">
                                    {isSignUpMode ? ("") : (
                                        <>
                                            <div className="input-wrap">
                                                <input
                                                    type="text"
                                                    minLength="4"
                                                    className="input-field"
                                                    autoComplete="off"
                                                    required
                                                    onFocus={this.handleInputFocus}
                                                    onBlur={this.handleInputBlur}
                                                />
                                                <label className='login-label'>Full name</label>
                                            </div>
                                            <div className="input-wrap">
                                                <input
                                                    type="text"
                                                    minLength="4"
                                                    className="input-field"
                                                    autoComplete="off"
                                                    required
                                                    onFocus={this.handleInputFocus}
                                                    onBlur={this.handleInputBlur}
                                                />
                                                <label className='login-label'>College</label>
                                            </div>
                                            <div className="input-wrap">
                                                <input
                                                    type="text"
                                                    minLength="4"
                                                    className="input-field"
                                                    autoComplete="off"
                                                    required
                                                    onFocus={this.handleInputFocus}
                                                    onBlur={this.handleInputBlur}
                                                />
                                                <label className='login-label'>Contact no</label>
                                            </div>
                                        </>

                                    )}

                                    <div className="input-wrap">
                                        <input
                                            type="email"
                                            className="input-field"
                                            autoComplete="off"
                                            required
                                            onFocus={this.handleInputFocus}
                                            onBlur={this.handleInputBlur}
                                        />
                                        <label className='login-label'>Email</label>
                                    </div>

                                    <div className="input-wrap">
                                        <input
                                            type="password"
                                            minLength="4"
                                            className="input-field"
                                            autoComplete="off"
                                            required
                                            onFocus={this.handleInputFocus}
                                            onBlur={this.handleInputBlur}
                                        />
                                        <label className='login-label'>Password</label>
                                    </div>

                                    {isSignUpMode ? (
                                        <input type="submit" value="Sign In" className="sign-btn" />
                                    ) : (
                                        <input type="submit" value="Sign up" className="sign-btn" />
                                    )}


                                    {isSignUpMode ? (
                                        <p className="text">
                                            Forgotten your password or your login details? &nbsp;
                                            <button className='link-button'>Get help</button> signing in
                                        </p>
                                    ) : (
                                        ""
                                    )}

                                </div>
                            </form>
                        </div>

                        <div className="login-carousel">
                            <div className="images-wrapper">
                                <img src={img1} className={`image img-1 ${activeImage === 1 ? 'show' : ''}`} alt="" />
                                <img src={img2} className={`image img-2 ${activeImage === 2 ? 'show' : ''}`} alt="" />
                                <img src={img3} className={`image img-3 ${activeImage === 3 ? 'show' : ''}`} alt="" />
                            </div>

                            <div className="text-slider">
                                <div className="text-wrap">
                                    <div className="text-group">
                                        <h2 className='text-white'>Welcome to Zorphix 2k23.5</h2>
                                        <h2 className='text-white'>By the Dept of CSBS</h2>
                                        <h2 className='text-white'>Experience the Tehcnical Sympo</h2>
                                    </div>
                                </div>

                                <div className="bullets">
                                    <span className={`active ${activeImage === 1 ? 'active' : ''}`} data-value="1" onClick={() => this.moveSlider(1)}></span>
                                    <span className={`active ${activeImage === 2 ? 'active' : ''}`} data-value="2" onClick={() => this.moveSlider(2)}></span>
                                    <span className={`active ${activeImage === 3 ? 'active' : ''}`} data-value="3" onClick={() => this.moveSlider(3)}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default LoginForm;
