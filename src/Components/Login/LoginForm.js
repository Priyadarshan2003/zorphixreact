import React, { useState } from 'react';
import './Login.css';
import logo from '../../img/loginlog.png';
import img1 from '../../img/loginimg1.png';
import img2 from '../../img/loginimg2.png';
import img3 from '../../img/loginimg3.png';
import axios from 'axios';
import Select from 'react-select'
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const [activeImage, setActiveImage] = useState(1);
    const [isBlurBackground, setBlurBackground] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState({
        fullName: '',
        college: '',
        contactNo: '',
        email: '',
        password: '',
    });

    const toggleMode = (event) => {
        event.preventDefault();
        setIsSignUpMode(!isSignUpMode);
        setActiveImage(1);
    };

    const moveSlider = (index) => {
        setActiveImage(index);
        const textSlider = document.querySelector('.text-group');
        textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;
    };

    const collegeOptions = [
        { value: 'University Departments of Anna University Chennai - CEG Campus', label: 'University Departments of Anna University Chennai - CEG Campus' },
        { value: 'University Departments of Anna University Chennai - ACT Campus', label: 'University Departments of Anna University Chennai - ACT Campus' },
        { value: 'School of Architecture and Planning Anna University', label: 'School of Architecture and Planning Anna University' },
        { value: 'University Departments of Anna University Chennai - MIT Campus ', label: 'University Departments of Anna University Chennai - MIT Campus ' },
        { value: 'Annamalai University Faculty of Engineering and Technology', label: 'Annamalai University Faculty of Engineering and Technology' },
        { value: 'University College of Engineering Villupuram', label: ' University College of Engineering Villupuram' },
        { value: 'University College of Engineering Tindivanam', label: 'University College of Engineering Tindivanam' },
        { value: 'University College of Engineering Arni', label: 'University College of Engineering Arni' },
        { value: 'University College of Engineering Kancheepuram Ponnerikarai Campus', label: 'University College of Engineering Kancheepuram Ponnerikarai Campus' },
        { value: 'Aalim Muhammed Salegh College of Engineering', label: ' Aalim Muhammed Salegh College of Engineering' },
        { value: 'Jaya Engineering College', label: 'Jaya Engineering College' },
        { value: 'Jaya Institute of Technology', label: 'Jaya Institute of Technology' },
        { value: 'Prathyusha Engineering college (Autonomous)', label: 'Prathyusha Engineering college (Autonomous)' },
        { value: 'R M D Engineering College (Autonomous)', label: 'R M D Engineering College (Autonomous)' },
        { value: 'R M K Engineering College (Autonomous)', label: 'R M  Engineering College (Autonomous)' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      
      const [selectedCollege, setSelectedCollege] = useState(null);

      const handleCollegeChange = (selectedOption) => {
          setSelectedCollege(selectedOption);
      };



    // console.log(data, "**");

    const loginUser = async (e) => {
        e.preventDefault();
        const { email, password } = data;
        try {
            const { data } = await axios.post('/login', {
                email,
                password
            })
            if (data.error) {
                toast.error(data.error)
            }
            else {
                setData({});
                navigate('/');
                localStorage.setItem('userData', JSON.stringify(data));
                // console.log();
                toast.success("Login Successful");
                setTimeout(() => {
                    window.location.reload();
                }, 400)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const registerUser = async (e) => {
        e.preventDefault();
        const { fullName, college, contactNo, email, password } = data;
        console.log(data);
        try {
            if (isValidMobileNumber(contactNo)) {
                const { data } = await axios.post('/register', {
                    fullName, college, contactNo, email, password
                })
                if (data.error) {
                    toast.error(data.error)
                }
                else {
                    // setData({})
                    toast.success("Registered Successfully")
                    setIsSignUpMode(!isSignUpMode);
                    setActiveImage(1);
                }
            }
            else {
                Swal.fire({
                    icon: "warning",
                    title: "Invalid Mobile Number",
                    text: "Please enter your 10 digit mobile number",
                }).then((result) => {
                    setBlurBackground(false);
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    const isValidMobileNumber = (phoneNumber) => {
        const pattern = /^\d{10}$/;
        return pattern.test(phoneNumber);
    };


    return (
        <main>
            <div className={`login-box ${isSignUpMode ? 'sign-up-mode' : ''}`}>
                <div className="input-wrap">
                    <Select
                        options={collegeOptions}
                        value={selectedCollege}
                        onChange={handleCollegeChange}
                        placeholder="Select your college..."
                    />
                </div>
                <div className="inner-box">
                    <div className="forms-wrap">
                        <form id='login' autoComplete="off" className="sign-in-form">
                            <div className="login-logo">
                                <img src={logo} alt="easyclass" />
                            </div>

                            <div className="heading">
                                <h2>{isSignUpMode ? 'Welcome back' : 'Get registered'}</h2>
                                <h6>{isSignUpMode ? 'Not registered yet ? ' : 'Already registered ? '}</h6>
                                <button className="toggle link-button" onClick={toggleMode}>
                                    {isSignUpMode ? 'Sign up' : 'Sign in'}
                                </button>
                            </div>

                            <div className="actual-form">
                                {isSignUpMode ? (
                                    ''
                                ) : (
                                    <>
                                        <div className="input-wrap">
                                            <input
                                                type="text"
                                                className="input-field"
                                                autoComplete="off"
                                                value={data.fullName}
                                                onChange={(e) => setData({ ...data, fullName: e.target.value })}
                                                placeholder={data.fullName ? '' : 'Full name'}
                                            />
                                        </div>
                                        <div className="input-wrap">
                                            {/* <input
                                                type="text"
                                                className="input-field"
                                                autoComplete="off"
                                                value={data.college}
                                                onChange={(e) => setData({ ...data, college: e.target.value })}
                                                placeholder={data.college ? '' : 'College'}
                                            /> */}
                                             <Select
                                             options={collegeOptions}
                                             value={selectedCollege}
                                             onChange={handleCollegeChange}
                                              placeholder="Select your college..."
    />
                                            {/* <label className='login-label'>College</label> */}
                                        </div>
                                        <div className="input-wrap">
                                            <input
                                                type="number"
                                                minLength="4"
                                                className="input-field"
                                                autoComplete="off"
                                                value={data.contactNo}
                                                onChange={(e) => setData({ ...data, contactNo: e.target.value })}
                                                placeholder={data.contactNo ? '' : 'Contact no'}
                                            />
                                        </div>
                                        <div className='warning-div'>
                                            <span className='contact-span'>{isValidMobileNumber(data.contactNo) ? ('') : ('Enter a valid Mobile Number')}</span>
                                        </div>
                                    </>
                                )}

                                <div className="input-wrap">
                                    <input
                                        type="email"
                                        className="input-field"
                                        autoComplete="off"
                                        value={data.email}
                                        onChange={(e) => setData({ ...data, email: e.target.value })}
                                        placeholder={data.email ? '' : 'Email'}
                                    />
                                    {/* <label className='login-label'>Email</label> */}
                                </div>

                                <div className="input-wrap">
                                    <input
                                        type="password"
                                        className="input-field"
                                        autoComplete="off"
                                        value={data.password}
                                        onChange={(e) => setData({ ...data, password: e.target.value })}
                                        placeholder={data.password ? '' : 'Password'}
                                    />
                                    {/* <label className='login-label'>Password</label> */}
                                </div>

                                {isSignUpMode ? (
                                    <button onClick={loginUser} type="submit" className="sign-btn">Sign in</button>
                                ) : (
                                    <button onClick={registerUser} type="submit" className="sign-btn">Sign up</button>
                                )}

                                {isSignUpMode ? (
                                    <p className="text">
                                        Forgotten your password or your login details? &nbsp;
                                        <button className='link-button'>Get help</button> signing in
                                    </p>
                                ) : (
                                    ''
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
                                <span className={`active ${activeImage === 1 ? 'active' : ''}`} data-value="1" onClick={() => moveSlider(1)}></span>
                                <span className={`active ${activeImage === 2 ? 'active' : ''}`} data-value="2" onClick={() => moveSlider(2)}></span>
                                <span className={`active ${activeImage === 3 ? 'active' : ''}`} data-value="3" onClick={() => moveSlider(3)}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LoginForm;


