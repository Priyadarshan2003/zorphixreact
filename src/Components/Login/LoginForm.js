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
        { value: '1', label: 'University Departments of Anna University Chennai - CEG Campus' },
        { value: '2', label: 'University Departments of Anna University Chennai - ACT Campus' },
        { value: '3', label: 'School of Architecture and Planning Anna University' },
        { value: '4', label: 'University Departments of Anna University Chennai - MIT Campus ' },
        { value: '5', label: 'Annamalai University Faculty of Engineering and Technology' },
        { value: '1013', label: 'University College of Engineering Villupuram' },
        { value: '1014', label: 'University College of Engineering Tindivanam' },
        { value: '1015', label: 'University College of Engineering Arni' },
        { value: '1026', label: 'University College of Engineering Kancheepuram Ponnerikarai Campus' },
        { value: '1101', label: ' Aalim Muhammed Salegh College of Engineering' },
        { value: '1106', label: 'Jaya Engineering College' },
        { value: '1107', label: 'Jaya Institute of Technology' },
        { value: '1110', label: 'Prathyusha Engineering college (Autonomous)' },
        { value: '1112', label: 'R M D Engineering College (Autonomous)' },
        { value: '1113', label: 'R M  Engineering College (Autonomous)' },
        { value: '1114', label: 'S A Engineering College (Autonomous)' },
        { value: '1115', label: 'Sri Ram Engineering College' },
        { value: '1116', label: 'Sri Venkateswara College of Engineering and Technology' },
        { value: '1118', label: 'Vel Tech Multi Tech Dr. Rangarajan Dr. Sakunthala Engineering College (Autonomous)' },
        { value: '1120', label: 'Velammal Engineering College (Autonomous)' },
        { value: '1121', label: 'Sri Venkateswara Institute of Science and Technology' },
        { value: '1122', label: 'Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College (Autonomous)' },
        { value: '1123', label: 'Gojan School of Business and Technology' },
        { value: '1124', label: 'SAMS College of Engineering and Technology Panappakkam' },
        { value: '1125', label: 'PMR Engineering College Adayalampattu' },
        { value: '1126', label: 'J N N Institute of Engineering (Autonomous)' },
        { value: '1127', label: 'St. Peters College of Engineering and Technology' },
        { value: '1128', label: 'R M K College of Engineering and Technology (Autonomous)' },
        { value: '1133', label: 'Annai Veilankannis College of Engineering' },
        { value: '1137', label: 'Annai Mira College of Engineering and Technology' },
        { value: '1140', label: 'Jeppiaar Institute of Technology' },
        { value: "1149", label: "St. Joseph's Institute of Technology (Autonomous)" },
        { value: '1150', label: 'Sri Jayaram Institute of Engineering and Technology' },
        { value: '1202', label: 'D M I College of Engineering' },
        { value: '1207', label: 'Kings Engineering College' },
        { value: '1209', label: 'Pallavan College of Engineering' },
        { value: '1210', label: 'Panimalar Engineering College (Autonomous)' },
        { value: '1211', label: 'Rajalakshmi Engineering College (Autonomous)' },
        { value: '1212', label: 'Rajiv Gandhi College of Engineering' },
        { value: '1213', label: 'S K R Engineering College' },
        { value: '1216', label: 'Saveetha Engineering College (Autonomous)' },
        { value: '1217', label: 'Sree Sastha Institute of Engineering and Technology' },
        { value: '1218', label: 'Sri Muthukumaran Institute of Technology' },
        { value: '1219', label: 'Sri Venkateswara College of Engineering (Autonomous)' },
        { value: '1221', label: 'Jaya College of Engineering and Technology' },
        { value: '1222', label: 'P B College of Engineering' },
        { value: '1225', label: 'Loyola Institute of Technology' },
        { value: '1226', label: 'P T Lee Chengalvaraya Naicker College of Engineering and Technology' },
        { value: '1228', label: 'Alpha College of Engineering' },
        { value: '1229', label: 'Indira Institute of Engineering and Technology' },
        { value: '1230', label: 'Apollo Engineering College' },
        { value: '1232', label: 'A R M College of Engineering and Technology' },
        { value: '1233', label: 'Adhi College of Engineering and Technology' },
        { value: '1235', label: 'Jei Mathaajee College of Engineering' },
        { value: '1237', label: 'Velammal Institute of Technology' },
        { value: '1238', label: 'G R T Institute of Engineering and Technology' },
        { value: '1241', label: 'T J S Engineering College Peruvoyal' },
        { value: '1243', label: 'Madha Institute of Engineering and Technology' },
        { value: '1301', label: 'Mohammed Sathak A J College of Engineering' },
        { value: '1303', label: 'Anand Institute of Higher Technology' },
        { value: '1304', label: 'Easwari Engineering College (Autonomous)' },
        { value: '1306', label: 'Jeppiaar Engineering College' },
        { value: '1307', label: 'Jerusalem College of Engineering (Autonomous)' },
        { value: '1309', label: 'Meenakshi Sundararajan Engineering College' },
        { value: '1310', label: 'Misrimal Navajee Munoth Jain Engineering College' },
        { value: '1311', label: 'K C G College of Technology (Autonomous)' },
        { value: '1313', label: 'Shree Motilal Kanhaiyalal (SMK)Fomra Institute of Technology' },
        { value: '1315', label: 'Sri Sivasubramaniya Nadar College of Engineering (Autonomous)' },
        { value: '1316', label: 'Agni College of Technology' },
        { value: "1317", label: "St. Joseph's College of Engineering (Autonomous)" },
        { value: '1318', label: 'T.J Institute of Technology' },
        { value: '1319', label: 'Thangavelu Engineering College' },
        { value: '1321', label: 'Central Institute of Petrochemicals Engineering and Technology (Formerly Central Institute of Plastics Engineering and Technology) (CIPET)' },
        { value: '1322', label: 'Dhanalakshmi Srinivasan College of Engineering and Technology' },
        { value: '1324', label: 'Sri Sai Ram Institute of Technology (Autonomous)' },
        { value: '1325', label: 'St. Joseph College of Engineering Trinity Campus' },
        { value: '1334', label: 'ARS College of Engineering' },
        { value: '1335', label: 'Sri Krishna Institute of Technology' },
        { value: '1398', label: 'Chennai Institute of Technology and Applied Research' },
        { value: '1399', label: 'Chennai Institute of Technology (Autonomous)' },
        { value: '1401', label: 'Adhiparasakthi Engineering College' },
        { value: '1402', label: 'Annai Teresa College of Engineering' },
        { value: '1405', label: 'Dhanalakshmi College of Engineering' },
        { value: '1407', label: 'G K M College of Engineering and Technology' },
        { value: '1408', label: 'I F E T College of Engineering (Autonomous)' },
        { value: '1409', label: 'Karpaga Vinayaga College of Engineering and Technology' },
        { value: '1411', label: 'Madha Engineering College' },
        { value: '1412', label: 'Mailam Engineering College' },
        { value: '1413', label: 'Sri Venkateswaraa College of Technology' },
        { value: '1414', label: 'Prince Shri Venkateshwara Padmavathy Engineering College (Autonomous)' },
        { value: '1415', label: 'T S M Jain College of Technology' },
        { value: '1416', label: 'Jaya Sakthi Engineering College' },
        { value: '1419', label: 'Sri Sai Ram Enginering College (Autonomous)' },
        { value: '1420', label: 'Tagore Engineering College' },
        { value: '1421', label: 'V R S College of Engineering and Technology' },
        { value: '1422', label: 'SRM Valliammai Engineering College (Autonomous)' },
        { value: '1423', label: 'Asan Memorial College of Engineering and Technology' },
        { value: '1424', label: 'Dhaanish Ahmed College of Engineering' },
        { value: '1426', label: 'Sri Ramanujar Engineering College' },
        { value: '1427', label: 'Sri Krishna Engineering College' },
        { value: '1428', label: 'E S COLLEGE OF ENGINEERING AND TECHNOLOGY' },
        { value: '1430', label: 'Maha Bharathi Engineering College' },
        { value: '1431', label: 'New Prince Shri Bhavani College of Engineering and Technology (Autonomous)' },
        { value: '1432', label: 'Rajalakshmi Institute of Technology (Autonomous)' },
        { value: '1434', label: 'Surya Group of Institutions' },
        { value: '1436', label: 'A R Engineering College' },
        { value: '1437', label: 'Rrase College of Engineering' },
        { value: '1438', label: 'Sree Krishna College of Engineering' },
        { value: '1441', label: 'A K T Memorial College of Engineering and Technology' },
        { value: '1442', label: 'Prince Dr. K Vasudevan College of Engineering and Technology' },
        { value: '1444', label: 'Chendu College of Engineering and Technology' },
        { value: '1445', label: 'Sri Rangapoopathi College of Engineering' },
        { value: '1449', label: 'Saraswathy College of Engineering and Technology' },
        { value: '1450', label: 'Loyola ICAM College of Engineering and Technology' },
        { value: '1452', label: 'PERI Institute of Technology' },
        { value: '1501', label: 'Adhiparasakthi College of Engineering' },
        { value: '1503', label: 'Arulmigu Meenakshi Amman College of Engineering' },
        { value: '1504', label: 'Arunai Engineering College' },
        { value: '1505', label: 'C Abdul Hakeem College of Engineering and Technology' },
        { value: '1507', label: "Ganadipathy Tulsi's Jain Engineering College" },
        { value: '1509', label: 'Meenakshi College of Engineering' },
        { value: '1510', label: 'Priyadarshini Engineering College' },
        { value: '1511', label: 'Ranipettai Engineering College' },
        { value: '1512', label: 'S K P Engineering College' },
        { value: '1513', label: 'Sri Balaji Chockalingam Engineering College' },
        { value: '1514', label: 'Sri Nandhanam College of Engineering and Technology' },
        { value: '1516', label: 'Thanthai Periyar Government Institute of Technology' },
        { value: '1517', label: 'Thirumalai Engineering College' },
        { value: '1518', label: 'Thiruvalluvar College of Engineering and Technology' },
        { value: '1519', label: 'Bharathidasan Engineering College' },
        { value: '1520', label: 'Kingston Engineering College' },
        { value: '1523', label: 'Global Institute of Engineering and Technology' },
        { value: '1524', label: 'Annamalaiar College of Engineering' },
        { value: '1525', label: 'Podhigai College of Engineering and Technology' },
        { value: '1526', label: 'Sri Krishna College of Engineering' },
        { value: '1529', label: 'Oxford College of Engineering' },
        { value: '1605', label: 'Idhaya Engineering College for Women' },
        { value: '2005', label: 'Government College of Technology (Autonomous),Coimbore' },
        { value: '2006', label: 'PSG College of Technology (Autonomous)' },
        { value: '2007', label: 'Coimbatore Institute of Technology (Autonomous)' },
        { value: '2025', label: 'Anna University Regional Campus - Coimbatore' },
        { value: '2302', label: 'Sri Shanmugha College of Engineering and Technology' },
        { value: '2314', label: 'Muthayammal College of Engineering' },
        { value: '2327', label: 'N S N College of Engineering and Technology' },
        { value: '2328', label: 'K S R Institute for Engineering and Technology (Autonomous)' },
        { value: '2329', label: 'Rathinam Technical Campus (Autonomous)' },
        { value: '2332', label: 'Aishwarya College of Engineering and Technology' },
        { value: '2338', label: 'Asian College of Engineering and Technology' },
        { value: '2341', label: 'Ganesh College of Engineering' },
        { value: '2342', label: 'Sri Ranganathar Institute of Engineering and Technology' },
        { value: '2343', label: "Indian Institute of Handloom Technology Foulke's Compound" },
        { value: '2345', label: 'Dhirajlal Gandhi College of Technology' },
        { value: '2346', label: 'Shree Sathyam College of Engineering and Technology' },
        { value: '2347', label: 'AVS College of Technology' },
        { value: '2349', label: 'Dhaanish Ahmed Institute of Technology' },
        { value: '2350', label: 'Jairupaa College of Engineering' },
        { value: '2354', label: 'Pollachi Institute of Engineering and Technology' },
        { value: '2356', label: 'Arulmurugan College of Engineering' },
        { value: '2357', label: 'V S B College of Engineering Technical Campus' },
        { value: '2360', label: 'Suguna College of Engineering' },
        { value: '2367', label: 'Arjun College of Technology' },
        { value: '2368', label: 'Vishnu Lakshmi College of Engineering and Technology' },
        { value: '2369', label: 'Government College of Engineering Dharmapuri' },
        { value: '2377', label: 'PSG Institute of Technology and Applied Research' },
        { value: '2378', label: 'Cherraan College of Technology' },
        { value: '2601', label: 'Adhiyamaan College of Engineering (Autonomous)' },
        { value: '2602', label: 'Annai Mathammal Sheela Engineering College' },
        { value: '2603', label: 'Government College of Engineering (Autonomous) Bargur Krishnagiri District' },
        { value: '2607', label: 'K S Rangasamy College of Technology (Autonomous)' },
        { value: '2608', label: 'M Kumarasamy College of Engineering (Autonomous)' },
        { value: '2609', label: 'Mahendra Engineering College (Autonomous)' },
        { value: '2610', label: 'Muthayammal Engineering College (Autonomous)' },
        { value: '2611', label: 'Paavai Engineering College (Autonomous)' },
        { value: '2612', label: 'P G P College of Engineering and Technology' },
        { value: '2613', label: 'K S R College of Engineering (Autonomous)' },
        { value: '2614', label: 'S S M College of Engineering' },
        { value: '2615', label: 'Government College of Engineering (Autonomous) Karuppur Salem District' },
        { value: '2616', label: 'Sapthagiri College of Engineering' },
        { value: '2617', label: 'Sengunthar Engineering College (Autonomous)' },
        { value: '2618', label: 'Sona College of Technology (Autonomous)' },
        { value: '2620', label: 'Vivekanandha College of Engineering for Women (Autonomous)' },
        { value: '2621', label: 'Er. Perumal Manimekalai College of Engineering (Autonomous)' },
        { value: '2622', label: 'V S B Engineering College(Autonomous)' },
        { value: '2623', label: 'Mahendra College of Engineering' },
        { value: '2624', label: 'Gnanamani College of Technology (Autonomous)' },
        { value: '2625', label: 'The Kavery Engineering College' },
        { value: '2627', label: 'Selvam College of Technology' },
        { value: '2628', label: 'Paavai College of Engineering' },
        { value: '2630', label: 'Chettinad College of Engineering and Technology' },
        { value: '2632', label: 'Mahendra Institute of Technology (Autonomous)' },
        { value: '2633', label: 'Vidyaa Vikas College of Engineering and Technology' },
        { value: '2634', label: 'Excel Engineering College (Autonomous)' },
        { value: '2635', label: 'CMS College of Engineering' },
        { value: '2636', label: 'A V S Engineering College' },
        { value: '2638', label: 'Mahendra Engineering College for Women' },
        { value: '2639', label: 'R P Sarathy Institute of Technology' },
        { value: '2640', label: 'Jayalakshmi Institute of Technology' },
        { value: '2641', label: 'Varuvan Vadivelan Institute of Technology' },
        { value: '2642', label: 'P S V College of Engineeering and Technology' },
        { value: '2643', label: 'Bharathiyar Institute of Engineering for Women' },
        { value: '2646', label: 'Tagore Institute of Engineering and Technology' },
        { value: '2647', label: 'J K K Nataraja College of Engineering and Technology' },
        { value: '2648', label: '' },
        { value: '2650', label: '' },
        { value: '2651', label: '' },
        { value: '2652', label: '' },
        { value: '2653', label: '' },
        { value: '2656', label: '' },
        { value: '2658', label: '' },
        { value: '2659', label: '' },
        { value: '2661', label: '' },
        { value: '2673', label: '' },
        { value: '2683', label: '' },
        { value: '2702', label: '' },
        { value: '2704', label: '' },
        { value: '2705', label: '' },
        { value: '2706', label: '' },
        { value: '2707', label: '' },
        { value: '2708', label: '' },
        { value: '2709', label: '' },
        { value: '2710', label: '' },
        { value: '2711', label: '' },
        { value: '2712', label: '' },
        { value: '2713', label: '' },
        { value: '2715', label: '' },
        { value: '2716', label: '' },
        { value: '2717', label: '' },
        { value: '2718', label: '' },
        { value: '2719', label: '' },
        { value: '2721', label: '' },
        { value: '2722', label: '' },
        { value: '2723', label: '' },
        { value: '2725', label: '' },
        { value: '2726', label: '' },
        { value: '2727', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },
        { value: '', label: '' },



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


