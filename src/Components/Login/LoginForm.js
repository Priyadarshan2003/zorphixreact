import React, { useState } from "react";
import "./Login.css";
import logo from "../../img/loginlog.png";
import img1 from "../../img/eventposters/xcoders.jpg";
import img2 from "../../img/eventposters/thesis precised.jpg";
import img3 from "../../img/eventposters/coin quest.jpg";
import img4 from "../../img/eventposters/plutus.jpg";
import img5 from "../../img/eventposters/algo rhythms.jpg";
import img6 from "../../img/eventposters/virtuoso.jpg";
import img7 from "../../img/eventposters/trading and investment.jpg";
import axios from "axios";
import Select from "react-select";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeImage, setActiveImage] = useState(1);
  const [isBlurBackground, setBlurBackground] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullName: "",
    college: "",
    degree: "",
    dept: "",
    year: "",
    contactNo: "",
    email: "",
    password: "",
  });

  const toggleMode = (event) => {
    event.preventDefault();
    setIsSignUpMode(!isSignUpMode);
    setActiveImage(1);
  };

  const moveSlider = (index) => {
    setActiveImage(index);
    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;
  };

  const collegeOptions = [
    {
      value: "1",
      label: "University Departments of Anna University Chennai - CEG Campus",
    },
    {
      value: "2",
      label: "University Departments of Anna University Chennai - ACT Campus",
    },
    {
      value: "3",
      label: "School of Architecture and Planning Anna University",
    },
    {
      value: "4",
      label: "University Departments of Anna University Chennai - MIT Campus ",
    },
    {
      value: "5",
      label: "Annamalai University Faculty of Engineering and Technology",
    },
    {
      value: "c1",
      label:
        "Indian Institute of Information Technology Design & Manufacturing",
    },
    {
      value: "c2",
      label: "Indian Institute of Information Technology Tiruchirappalli",
    },
    { value: "c3", label: "Indian Institute of Technology Madras" },
    { value: "c4", label: "National Institute of Technology, Tiruchirappalli" },
    { value: "1d", label: "Academy of Maritime Education and Training" },
    { value: "2d", label: "Amrita Vishwa Vidyapeetham" },
    {
      value: "3d",
      label:
        "Avinashilingam Institute for Home Science & Higher Education for Women",
    },
    { value: "4d", label: "Bharath Institute of Higher Education & Research" },
    { value: "5d", label: "Chennai Mathematical Institute" },
    {
      value: "6d",
      label: "Chettinad Academy of Research and Education (CARE)",
    },
    { value: "7d", label: "Dr. M.G.R. Educational and Research Institute" },
    {
      value: "8d",
      label: "Hindustan Institute of Technology and Science (HITS)",
    },
    { value: "9d", label: "Kalasalingam Academy of Research and Education" },
    { value: "10d", label: "Karpagam Academy of Higher Education" },
    { value: "11d", label: "Karunya Institute of Technology and Sciences" },
    {
      value: "12d",
      label: "Meenakshi Academy of Higher Education and Research",
    },
    { value: "13d", label: "Noorul Islam Centre for Higher Education" },
    {
      value: "14d",
      label: "Periyar Maniammai Institute of Science & Technology",
    },
    {
      value: "15d",
      label: "Ponnaiyah Ramajayam Institute of Science & technology (PMIST)",
    },
    { value: "16d", label: "S.R.M. Institute of Science and Technology" },
    { value: "17d", label: "Sathyabama Institute of Science and Technology" },
    {
      value: "18d",
      label: "Saveetha Institute of Medical and Technical Sciences",
    },
    {
      value: "19d",
      label: "Shanmugha Arts, Science, Technology & Research Academy (SASTRA)",
    },
    {
      value: "20d",
      label: "Sri Chandrasekharandra Saraswati Vishwa Mahavidyalaya",
    },
    {
      value: "21d",
      label: "Sri Ramachandra Institute of Higher Education and Research",
    },
    {
      value: "22d",
      label: "St. Peter's Institute of Higher Education and Research",
    },
    { value: "23d", label: "The Gandhigram Rural Institute" },
    {
      value: "24d",
      label:
        "Vel Tech Rangarajan Dr Sagunthala R&D Institute of Science & Technology",
    },
    { value: "25d", label: "Vellore Institute of Technology" },
    {
      value: "26d",
      label:
        "Vels Institute of Science, Technology & Advanced Studies (VISTAS)",
    },
    { value: "27d", label: "Vinayaka Mission's Research Foundation" },
    { value: "1013", label: "University College of Engineering Villupuram" },
    { value: "1014", label: "University College of Engineering Tindivanam" },
    { value: "1015", label: "University College of Engineering Arni" },
    { value: "1026", label: "University College of Engineering Kancheepuram" },
    { value: "1101", label: "Aalim Muhammed Salegh College of Engineering" },
    { value: "1106", label: "Jaya Engineering College" },
    { value: "1107", label: "Jaya Institute of Technology" },
    { value: "1110", label: "Prathyusha Engineering college (Autonomous)" },
    { value: "1112", label: "R M D Engineering College (Autonomous)" },
    { value: "1113", label: "R M  Engineering College (Autonomous)" },
    { value: "1114", label: "S A Engineering College (Autonomous)" },
    { value: "1115", label: "Sri Ram Engineering College" },
    {
      value: "1116",
      label: "Sri Venkateswara College of Engineering and Technology",
    },
    {
      value: "1118",
      label:
        "Vel Tech Multi Tech Dr. Rangarajan Dr. Sakunthala Engineering College (Autonomous)",
    },
    { value: "1120", label: "Velammal Engineering College (Autonomous)" },
    {
      value: "1121",
      label: "Sri Venkateswara Institute of Science and Technology",
    },
    {
      value: "1122",
      label:
        "Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College (Autonomous)",
    },
    { value: "1123", label: "Gojan School of Business and Technology" },
    { value: "1124", label: "SAMS College of Engineering and Technology" },
    { value: "1125", label: "PMR Engineering College" },
    { value: "1126", label: "J N N Institute of Engineering (Autonomous)" },
    {
      value: "1127",
      label: "St. Peters College of Engineering and Technology",
    },
    {
      value: "1128",
      label: "R M K College of Engineering and Technology (Autonomous)",
    },
    { value: "1133", label: "Annai Veilankannis College of Engineering" },
    {
      value: "1137",
      label: "Annai Mira College of Engineering and Technology",
    },
    { value: "1140", label: "Jeppiaar Institute of Technology" },
    {
      value: "1149",
      label: "St. Joseph's Institute of Technology (Autonomous)",
    },
    {
      value: "1150",
      label: "Sri Jayaram Institute of Engineering and Technology",
    },
    { value: "1202", label: "D M I College of Engineering" },
    { value: "1207", label: "Kings Engineering College" },
    { value: "1209", label: "Pallavan College of Engineering" },
    { value: "1210", label: "Panimalar Engineering College (Autonomous)" },
    { value: "1211", label: "Rajalakshmi Engineering College (Autonomous)" },
    { value: "1212", label: "Rajiv Gandhi College of Engineering" },
    { value: "1213", label: "S K R Engineering College" },
    { value: "1216", label: "Saveetha Engineering College (Autonomous)" },
    {
      value: "1217",
      label: "Sree Sastha Institute of Engineering and Technology",
    },
    { value: "1218", label: "Sri Muthukumaran Institute of Technology" },
    {
      value: "1219",
      label: "Sri Venkateswara College of Engineering (Autonomous)",
    },
    { value: "1221", label: "Jaya College of Engineering and Technology" },
    { value: "1222", label: "P B College of Engineering" },
    { value: "1225", label: "Loyola Institute of Technology" },
    {
      value: "1226",
      label:
        "P T Lee Chengalvaraya Naicker College of Engineering and Technology",
    },
    { value: "1228", label: "Alpha College of Engineering" },
    { value: "1229", label: "Indira Institute of Engineering and Technology" },
    { value: "1230", label: "Apollo Engineering College" },
    { value: "1232", label: "A R M College of Engineering and Technology" },
    { value: "1233", label: "Adhi College of Engineering and Technology" },
    { value: "1235", label: "Jei Mathaajee College of Engineering" },
    { value: "1237", label: "Velammal Institute of Technology" },
    { value: "1238", label: "G R T Institute of Engineering and Technology" },
    { value: "1241", label: "T J S Engineering College " },
    { value: "1243", label: "Madha Institute of Engineering and Technology" },
    { value: "1301", label: "Mohammed Sathak A J College of Engineering" },
    { value: "1303", label: "Anand Institute of Higher Technology" },
    { value: "1304", label: "Easwari Engineering College (Autonomous)" },
    { value: "1306", label: "Jeppiaar Engineering College" },
    { value: "1307", label: "Jerusalem College of Engineering (Autonomous)" },
    { value: "1309", label: "Meenakshi Sundararajan Engineering College" },
    {
      value: "1310",
      label: "Misrimal Navajee Munoth Jain Engineering College",
    },
    { value: "1311", label: "K C G College of Technology (Autonomous)" },
    {
      value: "1313",
      label: "Shree Motilal Kanhaiyalal (SMK)Fomra Institute of Technology",
    },
    {
      value: "1315",
      label: "Sri Sivasubramaniya Nadar College of Engineering (Autonomous)",
    },
    { value: "1316", label: "Agni College of Technology" },
    {
      value: "1317",
      label: "St. Joseph's College of Engineering (Autonomous)",
    },
    { value: "1318", label: "T.J Institute of Technology" },
    { value: "1319", label: "Thangavelu Engineering College" },
    {
      value: "1321",
      label:
        "Central Institute of Petrochemicals Engineering and Technology (Formerly Central Institute of Plastics Engineering and Technology) (CIPET)",
    },
    {
      value: "1322",
      label: "Dhanalakshmi Srinivasan College of Engineering and Technology",
    },
    {
      value: "1324",
      label: "Sri Sai Ram Institute of Technology (Autonomous)",
    },
    { value: "1325", label: "St. Joseph College of Engineering" },
    { value: "1334", label: "ARS College of Engineering" },
    { value: "1335", label: "Sri Krishna Institute of Technology" },
    {
      value: "1398",
      label: "Chennai Institute of Technology and Applied Research",
    },
    { value: "1399", label: "Chennai Institute of Technology (Autonomous)" },
    { value: "1401", label: "Adhiparasakthi Engineering College" },
    { value: "1402", label: "Annai Teresa College of Engineering" },
    { value: "1405", label: "Dhanalakshmi College of Engineering" },
    { value: "1407", label: "G K M College of Engineering and Technology" },
    { value: "1408", label: "I F E T College of Engineering (Autonomous)" },
    {
      value: "1409",
      label: "Karpaga Vinayaga College of Engineering and Technology",
    },
    { value: "1411", label: "Madha Engineering College" },
    { value: "1412", label: "Mailam Engineering College" },
    { value: "1413", label: "Sri Venkateswaraa College of Technology" },
    {
      value: "1414",
      label:
        "Prince Shri Venkateshwara Padmavathy Engineering College (Autonomous)",
    },
    { value: "1415", label: "T S M Jain College of Technology" },
    { value: "1416", label: "Jaya Sakthi Engineering College" },
    { value: "1419", label: "Sri Sai Ram Enginering College (Autonomous)" },
    { value: "1420", label: "Tagore Engineering College" },
    { value: "1421", label: "V R S College of Engineering and Technology" },
    { value: "1422", label: "SRM Valliammai Engineering College (Autonomous)" },
    {
      value: "1423",
      label: "Asan Memorial College of Engineering and Technology",
    },
    { value: "1424", label: "Dhaanish Ahmed College of Engineering" },
    { value: "1426", label: "Sri Ramanujar Engineering College" },
    { value: "1427", label: "Sri Krishna Engineering College" },
    { value: "1428", label: "E S COLLEGE OF ENGINEERING AND TECHNOLOGY" },
    { value: "1430", label: "Maha Bharathi Engineering College" },
    {
      value: "1431",
      label:
        "New Prince Shri Bhavani College of Engineering and Technology (Autonomous)",
    },
    {
      value: "1432",
      label: "Rajalakshmi Institute of Technology (Autonomous)",
    },
    { value: "1434", label: "Surya Group of Institutions" },
    { value: "1436", label: "A R Engineering College" },
    { value: "1437", label: "Rrase College of Engineering" },
    { value: "1438", label: "Sree Krishna College of Engineering" },
    {
      value: "1441",
      label: "A K T Memorial College of Engineering and Technology",
    },
    {
      value: "1442",
      label: "Prince Dr. K Vasudevan College of Engineering and Technology",
    },
    { value: "1444", label: "Chendu College of Engineering and Technology" },
    { value: "1445", label: "Sri Rangapoopathi College of Engineering" },
    {
      value: "1449",
      label: "Saraswathy College of Engineering and Technology",
    },
    {
      value: "1450",
      label: "Loyola ICAM College of Engineering and Technology",
    },
    { value: "1452", label: "PERI Institute of Technology" },
    { value: "1501", label: "Adhiparasakthi College of Engineering" },
    { value: "1503", label: "Arulmigu Meenakshi Amman College of Engineering" },
    { value: "1504", label: "Arunai Engineering College" },
    {
      value: "1505",
      label: "C Abdul Hakeem College of Engineering and Technology",
    },
    { value: "1507", label: "Ganadipathy Tulsi's Jain Engineering College" },
    { value: "1509", label: "Meenakshi College of Engineering" },
    { value: "1510", label: "Priyadarshini Engineering College" },
    { value: "1511", label: "Ranipettai Engineering College" },
    { value: "1512", label: "S K P Engineering College" },
    { value: "1513", label: "Sri Balaji Chockalingam Engineering College" },
    {
      value: "1514",
      label: "Sri Nandhanam College of Engineering and Technology",
    },
    {
      value: "1516",
      label: "Thanthai Periyar Government Institute of Technology",
    },
    { value: "1517", label: "Thirumalai Engineering College" },
    {
      value: "1518",
      label: "Thiruvalluvar College of Engineering and Technology",
    },
    { value: "1519", label: "Bharathidasan Engineering College" },
    { value: "1520", label: "Kingston Engineering College" },
    { value: "1523", label: "Global Institute of Engineering and Technology" },
    { value: "1524", label: "Annamalaiar College of Engineering" },
    { value: "1525", label: "Podhigai College of Engineering and Technology" },
    { value: "1526", label: "Sri Krishna College of Engineering" },
    { value: "1529", label: "Oxford College of Engineering" },
    { value: "1605", label: "Idhaya Engineering College for Women" },
    {
      value: "2005",
      label: "Government College of Technology (Autonomous),Coimbore",
    },
    { value: "2006", label: "PSG College of Technology (Autonomous)" },
    { value: "2007", label: "Coimbatore Institute of Technology (Autonomous)" },
    { value: "2025", label: "Anna University Regional Campus - Coimbatore" },
    {
      value: "2302",
      label: "Sri Shanmugha College of Engineering and Technology",
    },
    { value: "2314", label: "Muthayammal College of Engineering" },
    { value: "2327", label: "N S N College of Engineering and Technology" },
    {
      value: "2328",
      label: "K S R Institute for Engineering and Technology (Autonomous)",
    },
    { value: "2329", label: "Rathinam Technical Campus (Autonomous)" },
    { value: "2332", label: "Aishwarya College of Engineering and Technology" },
    { value: "2338", label: "Asian College of Engineering and Technology" },
    { value: "2341", label: "Ganesh College of Engineering" },
    {
      value: "2342",
      label: "Sri Ranganathar Institute of Engineering and Technology",
    },
    { value: "2343", label: "Indian Institute of Handloom Technology" },
    { value: "2345", label: "Dhirajlal Gandhi College of Technology" },
    {
      value: "2346",
      label: "Shree Sathyam College of Engineering and Technology",
    },
    { value: "2347", label: "AVS College of Technology" },
    { value: "2349", label: "Dhaanish Ahmed Institute of Technology" },
    { value: "2350", label: "Jairupaa College of Engineering" },
    {
      value: "2354",
      label: "Pollachi Institute of Engineering and Technology",
    },
    { value: "2356", label: "Arulmurugan College of Engineering" },
    { value: "2357", label: "V S B College of Engineering Technical Campus" },
    { value: "2360", label: "Suguna College of Engineering" },
    { value: "2367", label: "Arjun College of Technology" },
    {
      value: "2368",
      label: "Vishnu Lakshmi College of Engineering and Technology",
    },
    { value: "2369", label: "Government College of Engineering Dharmapuri" },
    {
      value: "2377",
      label: "PSG Institute of Technology and Applied Research",
    },
    { value: "2378", label: "Cherraan College of Technology" },
    { value: "2601", label: "Adhiyamaan College of Engineering (Autonomous)" },
    { value: "2602", label: "Annai Mathammal Sheela Engineering College" },
    {
      value: "2603",
      label:
        "Government College of Engineering (Autonomous) Bargur Krishnagiri District",
    },
    {
      value: "2607",
      label: "K S Rangasamy College of Technology (Autonomous)",
    },
    {
      value: "2608",
      label: "M Kumarasamy College of Engineering (Autonomous)",
    },
    { value: "2609", label: "Mahendra Engineering College (Autonomous)" },
    { value: "2610", label: "Muthayammal Engineering College (Autonomous)" },
    { value: "2611", label: "Paavai Engineering College (Autonomous)" },
    { value: "2612", label: "P G P College of Engineering and Technology" },
    { value: "2613", label: "K S R College of Engineering (Autonomous)" },
    { value: "2614", label: "S S M College of Engineering" },
    {
      value: "2615",
      label:
        "Government College of Engineering (Autonomous) Karuppur Salem District",
    },
    { value: "2616", label: "Sapthagiri College of Engineering" },
    { value: "2617", label: "Sengunthar Engineering College (Autonomous)" },
    { value: "2618", label: "Sona College of Technology (Autonomous)" },
    {
      value: "2620",
      label: "Vivekanandha College of Engineering for Women (Autonomous)",
    },
    {
      value: "2621",
      label: "Er. Perumal Manimekalai College of Engineering (Autonomous)",
    },
    { value: "2622", label: "V S B Engineering College(Autonomous)" },
    { value: "2623", label: "Mahendra College of Engineering" },
    { value: "2624", label: "Gnanamani College of Technology (Autonomous)" },
    { value: "2625", label: "The Kavery Engineering College" },
    { value: "2627", label: "Selvam College of Technology" },
    { value: "2628", label: "Paavai College of Engineering" },
    { value: "2630", label: "Chettinad College of Engineering and Technology" },
    { value: "2632", label: "Mahendra Institute of Technology (Autonomous)" },
    {
      value: "2633",
      label: "Vidyaa Vikas College of Engineering and Technology",
    },
    { value: "2634", label: "Excel Engineering College (Autonomous)" },
    { value: "2635", label: "CMS College of Engineering" },
    { value: "2636", label: "A V S Engineering College" },
    { value: "2638", label: "Mahendra Engineering College for Women" },
    { value: "2639", label: "R P Sarathy Institute of Technology" },
    { value: "2640", label: "Jayalakshmi Institute of Technology" },
    { value: "2641", label: "Varuvan Vadivelan Institute of Technology" },
    { value: "2642", label: "P S V College of Engineeering and Technology" },
    { value: "2643", label: "Bharathiyar Institute of Engineering for Women" },
    { value: "2646", label: "Tagore Institute of Engineering and Technology" },
    {
      value: "2647",
      label: "J K K Nataraja College of Engineering and Technology",
    },
    { value: "2648", label: "Annapoorana Engineering College (Autonomous)" },
    { value: "2650", label: "Christ The King Engineering College" },
    { value: "2651", label: "Jai Shriram Engineering College" },
    { value: "2652", label: "AL-Ameen Engineering College (Autonomous)" },
    {
      value: "2653",
      label: "Knowledge Institute of Technology (Autonomous) KIOT Campus",
    },
    { value: "2656", label: "Builders Engineering college" },
    { value: "2658", label: "V S A Group of Institutions" },
    { value: "2659", label: "Salem College of Engineering and Technology" },
    { value: "2661", label: "Vivekanandha College of Technology for Women" },
    { value: "2673", label: "Sree Sakthi Engineering College" },
    { value: "2683", label: "Shreenivasa Engineering College" },
    {
      value: "2702",
      label: "Bannari Amman Institute of Technology (Autonomous)",
    },
    {
      value: "2704",
      label: "Coimbatore Institute of Engineering and Technolgoy (Autonomous)",
    },
    { value: "2705", label: "CSI College of Engineering" },
    {
      value: "2706",
      label:
        "Dr. Mahalingam College of Engineering and Technology (Autonomous)",
    },
    {
      value: "2707",
      label: "Erode Sengunthar Engineering College (Autonomous)",
    },
    {
      value: "2708",
      label: "Hindusthan College of Engineering and Technology (Autonomous)",
    },
    {
      value: "2709",
      label:
        "Government College of Engineering (Formerly Institute of Road and Transport Technology",
    },
    { value: "2710", label: "Karpagam College of Engineering (Autonomous)" },
    { value: "2711", label: "Kongu Engineering College (Autonomous)" },
    { value: "2712", label: "Kumaraguru College of Technology (Autonomous)" },
    { value: "2713", label: "M P Nachimuthu M Jaganathan Engineering College" },
    { value: "2715", label: "Nandha Engineering College (Autonomous)" },
    { value: "2716", label: "Park College of Engineering and Technology" },
    { value: "2717", label: "Sasurie College of Engineering" },
    {
      value: "2718",
      label: "Sri Krishna College of Enginering and Technology (Autonomous)",
    },
    {
      value: "2719",
      label: "Sri Ramakrishna Engineering College (Autonomous)",
    },
    {
      value: "2721",
      label: "Tamilnadu College of Engineering Karumathampatti",
    },
    { value: "2722", label: "Sri Krishna College of Technology (Autonomous)" },
    {
      value: "2723",
      label: "Velalar College of Engineering and Technology (Autonomous)",
    },
    {
      value: "2725",
      label: "Sri Ramakrishna Institute of Technology (Autonomous)",
    },
    { value: "2726", label: "SNS College of Technology (Autonomous)" },
    {
      value: "2727",
      label: "Sri Shakthi Institute of Engineering and Technology (Autonomous)",
    },
    { value: "2729", label: "Nehru Institute of Engineering and Technology" },
    { value: "2731", label: "R V S College of Engineering and Technology" },
    { value: "2732", label: "Info Institute of Engineering" },
    { value: "2733", label: "Angel College of Engineering and Technology" },
    { value: "2734", label: "SNS College of Engineering (Autonomous)" },
    { value: "2735", label: "Karpagam Institute of Technology" },
    { value: "2736", label: "Dr. N G P Institute of Technology (Autonomous)" },
    { value: "2737", label: "Sri Sai Ranganathan Engineering College" },
    { value: "2739", label: "Sri Eshwar College of Engineering (Autonomous)" },
    { value: "2740", label: "Hindusthan Institute of Technology (Autonomous)" },
    {
      value: "2741",
      label: "P A College of Engineering and Technology (Autonomous)",
    },
    {
      value: "2743",
      label: "Dhanalakshmi Srinivasan College of Engineering (CBE)",
    },
    { value: "2744", label: "Adithya Institute of Technology" },
    { value: "2745", label: "Kathir College of Engineering" },
    {
      value: "2747",
      label: "Shree Venkateshwara Hi-Tech Engineering College (Autonomous)",
    },
    { value: "2748", label: "Surya Engineering College" },
    { value: "2749", label: "Easa College of Engineering and Technology" },
    {
      value: "2750",
      label: "KIT - Kalaignar Karunanidhi Institute of Technology (Autonomous)",
    },
    { value: "2751", label: "KGISL Institute of Technology KGISL Campus" },
    { value: "2752", label: "Nandha College of Technology" },
    { value: "2753", label: "PPG Institute of Technology" },
    { value: "2755", label: "Nehru Institute of Technology (Autonomous)" },
    { value: "2758", label: "J K K Munirajah College of Technology" },
    { value: "2761", label: "United Institute of Technology" },
    { value: "2762", label: "Jansons Institute of Technology" },
    { value: "2763", label: "Akshaya College of Engineering and Technology" },
    {
      value: "2764",
      label: "K P R Institute of Engineering and Technology (Autonomous)",
    },
    { value: "2767", label: "SRG Engineering College" },
    { value: "2768", label: "Park College of Technology" },
    { value: "2769", label: "J C T College of Engineering and Technology" },
    { value: "2770", label: "Studyworld College of Engineering" },
    { value: "2772", label: "C M S College of Engineering and Technology" },
    { value: "2776", label: "R V S Technical Campus-Coimbatore" },
    {
      value: "3011",
      label: "University College of Engineering Tiruchirappalli",
    },
    { value: "3016", label: "University College of Engineering Ariyalur " },
    { value: "3018", label: "University College of Engineering Nagappattinam" },
    { value: "3019", label: "University College of Engineering Kumbakonam" },
    { value: "3021", label: "University College of Engineering Thanjavur" },
    { value: "3403", label: "Mahalakshmi Engineering College Trichy-Salem" },
    {
      value: "3410",
      label:
        "Krishnasamy College of Engineering and Technology Cuddalore District",
    },
    {
      value: "3425",
      label: "C K College of Engineering and Technology Chellangkuppam ",
    },
    {
      value: "3454",
      label: "Sri Ramakrishna College of Engineering Perambur District",
    },
    {
      value: "3456",
      label: "K S K College of Engineering and Technology Thanjavur Districy",
    },
    {
      value: "3460",
      label: "Surya College of Engineering Thiruchirapally District",
    },
    {
      value: "3461",
      label:
        "Arifa Institute of Technology(Formly Haji sheik Ismail Engineering College) Nagappatinam District",
    },
    { value: "3462", label: "Ariyalur Engineering College Ariyalur District" },
    {
      value: "3464",
      label:
        "Government College of Engineering Gandarvakotta Thanjavur District",
    },
    {
      value: "3465",
      label:
        "Government College of Engineering Srirangam Thiruchirappalli District",
    },
    {
      value: "3466",
      label: "Nelliandavar Institute of Technology Ariyalur Dsitrict",
    },
    {
      value: "3701",
      label:
        "K Ramakrishnan College of Technology (Autonomous) Thiruchirappally District",
    },
    {
      value: "3760",
      label:
        "Sir Issac Newton College of Engineering and Technology Nagappatinam Distric",
    },
    {
      value: "3766",
      label:
        "Star Lion College of Engineering and Technology Thanjavur District",
    },
    {
      value: "3782",
      label: "OASYS Institute of Technology Thiruchirapalli District",
    },
    {
      value: "3786",
      label: "M.A.M. School of Engineering Thiruchirappalli District",
    },
    {
      value: "3795",
      label: "SRM TRP Engineering College Thiruchirappalli District",
    },
    {
      value: "3801",
      label: "A V C College of Engineering Mayiladuthurai District",
    },
    {
      value: "3802",
      label:
        "Shri Angalamman College of Engineering and Technology Thiruchirappalli District ",
    },
    {
      value: "3803",
      label: "Anjalai Ammal Mahalingam Engineering College Thiruvarur District",
    },
    { value: "3804", label: "Arasu Engineering College Thanjavur District" },
    {
      value: "3805",
      label: "Dhanalakshmi Srinivasan Engineering College Perambalur District",
    },
    { value: "3806", label: "E G S Pillay Engineering College (Autonomous)" },
    { value: "3807", label: "J J College of Engineering and Technology" },
    { value: "3808", label: "Jayaram College of Engineering and Technology" },
    { value: "3809", label: "Kurinji College of Engineering and Technology" },
    { value: "3810", label: "M.A.M. College of Engineering" },
    { value: "3811", label: "M I E T Engineering College" },
    { value: "3812", label: "Mookambigai College of Engineering" },
    { value: "3813", label: "Oxford Engineering College" },
    { value: "3814", label: "P R Engineering College" },
    {
      value: "3815",
      label: "Pavendar Bharathidasan College of Engineering and Technology",
    },
    { value: "3817", label: "Roever Engineering College" },
    { value: "3819", label: "Saranathan College of Engineering" },
    { value: "3820", label: "Trichy Engineering College" },
    { value: "3821", label: "A R J College of Engineering and Technology" },
    {
      value: "3822",
      label: "Dr.Navalar Nedunchezhiyan College of Engineering",
    },
    {
      value: "3825",
      label: "St. Joseph's College of Engineering and Technology",
    },
    {
      value: "3826",
      label: "Kongunadu College of Engineering and Technology (Autonomous)",
    },
    { value: "3829", label: "M.A.M. College of Engineering and Technology" },
    {
      value: "3830",
      label: "K Ramakrishnan College of Engineering (Autonomous)",
    },
    { value: "3831", label: "Indra Ganesan College of Engineering" },
    { value: "3833", label: "Parisutham Institute of Technology and Science" },
    { value: "3841", label: "CARE College of Engineering" },
    { value: "3843", label: "M R K Institute of Technology" },
    { value: "3844", label: "Shivani Engineering College" },
    { value: "3845", label: "Imayam College of Engineering" },
    {
      value: "3846",
      label: "Mother Terasa College of Engineering and Technology",
    },
    { value: "3848", label: "Vandayar Engineering College" },
    { value: "3849", label: "Annai College of Engineering and Technology" },
    {
      value: "3850",
      label: "Vetri Vinayaha College of Engineering and Technology",
    },
    { value: "3852", label: "Sri Bharathi Engineering College for Women" },
    {
      value: "3854",
      label: "Mahath Amma Institute of Engineering and Technology (MIET)",
    },
    { value: "3855", label: "As-Salam College of Engineering and Technology" },
    { value: "3857", label: "Meenakshi Ramaswamy Engineering College" },
    {
      value: "3859",
      label: "Sembodai Rukmani Varatharajan Engineering College",
    },
    {
      value: "3860",
      label: "St. Anne's College of Engineering and Technology",
    },
    { value: "3905", label: "Kings College of Engineering" },
    {
      value: "3908",
      label: "Mount Zion College of Engineering and Technology",
    },
    { value: "3918", label: "Shanmuganathan Engineering College" },
    { value: "3920", label: "Sudharsan Engineering College" },
    { value: "3923", label: "M N S K College of Engineering" },
    {
      value: "3926",
      label: "Chendhuran College of Engineering and Technology",
    },
    { value: "4020", label: "Anna University Regional Campus - Tirunelveli" },
    { value: "4023", label: "University College of Engineering Nagercoil" },
    { value: "4024", label: "University V.O.C. College of Engineering" },
    { value: "4669", label: "Thamirabharani Engineering College" },
    { value: "4670", label: "Rohini College of Engineering & Technology" },
    { value: "4672", label: "Stella Mary's College of Engineering" },
    { value: "4675", label: "Universal College of Engineering and Technology" },
    { value: "4676", label: "Renganayagi Varatharaj College of Engineering" },
    {
      value: "4677",
      label: "Lourdes Mount College of Engineering and Technology",
    },
    { value: "4678", label: "Ramco Institute of Technology" },
    { value: "4680", label: "AAA College of Engineering and Technology" },
    {
      value: "4686",
      label: "Good Shepherd College of Engineering and Technology",
    },
    { value: "4864", label: "V V College of Engineering" },
    { value: "4917", label: "Sethu Institute of Technology (Autonomous)" },
    { value: "4925", label: "Sun College of Engineering and Technology" },
    { value: "4927", label: "Maria College of Engineering and Technology" },
    { value: "4928", label: "MAR Ephraem College of Engineering & Technology" },
    { value: "4929", label: "M E T Engineering College" },
    { value: "4931", label: "Grace College of Engineering" },
    { value: "4933", label: "St. Mother Theresa Engineering College" },
    { value: "4934", label: "Holy Cross Engineering College" },
    { value: "4937", label: "A.R College of Engineering and Technology" },
    { value: "4938", label: "Sivaji College of Engineering and Technology" },
    { value: "4941", label: "Unnamalai Institute of Technology" },
    { value: "4943", label: "Satyam College of Engineering and Technology" },
    { value: "4944", label: "Arunachala College of Engineering for Women" },
    { value: "4946", label: "D M I Engineering College" },
    { value: "4949", label: "PSN Institute of Technology and Science" },
    { value: "4952", label: "C S I Institute of Technology" },
    { value: "4953", label: "CAPE Institute of Technology" },
    { value: "4954", label: "Dr. Sivanthi Aditanar College of Engineering" },
    { value: "4955", label: "Francis Xavier Engineering College (Autonomous)" },
    { value: "4956", label: "Jayamatha Engineering College" },
    { value: "4957", label: "Jayaraj Annapackiam CSI College of Engineering" },
    {
      value: "4959",
      label: "Kamaraj College of Engineering and Technology (Autonomous)",
    },
    { value: "4960", label: "Mepco Schlenk Engineering College (Autonomous)" },
    { value: "4961", label: "Nellai College of Engineering" },
    {
      value: "4962",
      label: "National Engineering College (Autonomous) Kovilpatti",
    },
    {
      value: "4964",
      label: "PSN College of Engineering and Technology (Autonomous)",
    },
    { value: "4965", label: "P S R Engineering College (Autonomous)" },
    { value: "4966", label: "PET Engineering College" },
    {
      value: "4967",
      label: "S Veerasamy Chettiar College of Engineering and Technology",
    },
    {
      value: "4968",
      label:
        "Sardar Raja College of EngineeringSardar Raja College of Engineering",
    },
    { value: "4969", label: "SCAD College of Engineering and Technology" },
    { value: "4970", label: "Sree Sowdambika College of Engineering" },
    { value: "4971", label: "St. Xavier's Catholic College of Engineering" },
    { value: "4972", label: "AMRITA College of Engineering and Technology" },
    { value: "4974", label: "Government College of Engineering Tirunelveli " },
    { value: "4975", label: "Dr. G U Pope College of Engineering " },
    { value: "4976", label: "Infant Jesus College of Engineering " },
    { value: "4977", label: "Narayanaguru College of Engineering " },
    { value: "4978", label: "Udaya School of Engineering" },
    {
      value: "4979",
      label: "Arul Tharum VPMM College of Engineering and Technology",
    },
    { value: "4980", label: "Einstein College of Engineering" },
    { value: "4981", label: "Ponjesly College of Engineering" },
    { value: "4982", label: "Vins Christian College of Engineering" },
    {
      value: "4983",
      label: "Lord Jegannath College of Engineering and Technology",
    },
    { value: "4984", label: "Marthandam College of Engineering & Technology " },
    {
      value: "4986",
      label: "Noorul Islam College of Engineering and Technology",
    },
    { value: "4989", label: "PSN Engineering College" },
    { value: "4992", label: "Bethlahem Institute of Engineering " },
    { value: "4993", label: "Loyola Institute of Technology and Science " },
    { value: "4994", label: "J P College of Engineering College" },
    { value: "4995", label: "P.S.R.R College of Engineering" },
    { value: "4996", label: "Sri Vidya College of Engineering and Technology" },
    {
      value: "4998",
      label: "Mahakavi Bharathiyar College of Engineering and Technology",
    },
    { value: "4999", label: "Annai Vailankanni College of Engineering" },
    { value: "5008", label: "Thiagarajar College of Engineering" },
    { value: "5009", label: "Government College of Engineering " },
    { value: "5010", label: "Anna University Regional Campus" },
    { value: "5012", label: "Central Electrochemical Research Institute" },
    {
      value: "5017",
      label: "University College of Engineering Ramanathapuram",
    },
    { value: "5022", label: "University College of Engineering Dindigul" },
    {
      value: "5502",
      label: "Sri Raajaraajan College of Engineering & Technology",
    },
    { value: "5530", label: "SSM Institute of Engineering and Technology" },
    { value: "5532", label: "Vaigai College of Engineering " },
    { value: "5533", label: "Karaikudi Institute of Technology " },
    { value: "5536", label: "Mangayarkarasi College of Engineering" },
    { value: "5537", label: "Jainee College of Engineering and Technology" },
    { value: "5703", label: "Christian College of Engineering and Technology" },
    {
      value: "5832",
      label: "N P R College of Engineering and Technology (Autonomous)",
    },
    {
      value: "5842",
      label:
        "SRM Madurai College for Engineering and Technology (Formely Madurai Institute of Engineering and Technology)",
    },
    { value: "5851", label: "Veerammal Engineering College" },
    {
      value: "5862",
      label:
        "R V S Educational Trust's Groups of Institutions (Integrated Campus) ",
    },
    {
      value: "5865",
      label: "Nadar Saraswathi College of Engineering and Technology",
    },
    {
      value: "5901",
      label:
        "Alagappa Chettiar Government College of Engineering and Technology (Autonomous) ",
    },
    { value: "5902", label: "Bharath Niketan Engineering College" },
    { value: "5904", label: "K L N College of Engineering (Autonomous)" },
    { value: "5907", label: "Mohamed Sathak Engineering College" },
    {
      value: "5910",
      label: "P S N A Colllege of Engineering and Technology (Autonomous)",
    },
    { value: "5911", label: "P T R College of Engineering and Technology" },
    { value: "5912", label: "Pandian Saraswathi Yadav Engineering College" },
    { value: "5913", label: "R V S College of Engineering" },
    { value: "5914", label: "Solamalai College of Engineering" },
    { value: "5915", label: "SACS-M A V M M Engineering College " },
    {
      value: "5919",
      label: "St. Michael College of Engineering and Technology",
    },
    { value: "5921", label: "Syed Ammal Engineering College" },
    {
      value: "5924",
      label: "Ganapathy Chettiar College of Engineering and Technology",
    },
    { value: "5930", label: "SBM College of Engineering and Technology" },
    {
      value: "5935",
      label: "Fatima Michael College of Engineering and Technology",
    },
    { value: "5942", label: "Ultra College of Engineering and Technology " },
    {
      value: "5986",
      label: "Velammal College of Engineering and Technology (Autonomous) ",
    },
    { value: "5988", label: "Theni Kammavar Sangam College of Technology" },
    { value: "5990", label: "Latha Mathavan Engineering College" },
    { value: "10000", label: "Other" },
  ];

  const yearOptions = [
    { value: "I", label: "I" },
    { value: "II", label: "II" },
    { value: "III", label: "III" },
    { value: "IV", label: "IV" },
    { value: "V", label: "V" },
  ];

  const [selectedCollege, setSelectedCollege] = useState(null);

  const handleCollegeChange = (selectedOption) => {
    setSelectedCollege(selectedOption);
  };

  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);
  };


  const loginUser = async (e) => {
    e.preventDefault();
    let { email, password } = data;
    email = email.split(" ").join("");
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/");
        localStorage.setItem("userData", JSON.stringify(data));
        toast.success("Login Successful");
        setTimeout(() => {
          window.location.reload();
        }, 400);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    let { fullName, college, degree, dept, contactNo, email, password } = data;
    email = email.split(" ").join("");
    console.log(data);
    try {
      if (isValidMobileNumber(contactNo)) {
        const { data } = await axios.post("/register", {
          fullName,
          college: selectedCollege.label,
          degree,
          year: selectedYear.label,
          dept,
          contactNo,
          email,
          password,
        });
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success("Registered Successfully");
          setIsSignUpMode(!isSignUpMode);
          setActiveImage(1);
        }
      } else {
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
  };

  const isValidMobileNumber = (phoneNumber) => {
    const pattern = /^\d{10}$/;
    return pattern.test(phoneNumber);
  };

  return (
    <main>
      <div className={`login-box ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="inner-box">
          <div className="forms-wrap">
            <form id="login" autoComplete="off" className="sign-in-form">
              <div className="login-logo">
                <img src={logo} alt="easyclass" />
              </div>

              <div className="heading">
                <h2>{isSignUpMode ? "Welcome back" : "Get registered"}</h2>
                <h6>
                  {isSignUpMode
                    ? "Not registered yet ? "
                    : "Already registered ? "}
                </h6>
                <button className="toggle link-button" onClick={toggleMode}>
                  {isSignUpMode ? "Sign up" : "Sign in"}
                </button>
              </div>

              <div className="actual-form">
                {isSignUpMode ? (
                  ""
                ) : (
                  <>
                    <div className="input-wrap">
                      <input
                        type="text"
                        className="input-field"
                        autoComplete="off"
                        value={data.fullName}
                        onChange={(e) =>
                          setData({ ...data, fullName: e.target.value })
                        }
                        placeholder={data.fullName ? "" : "Full name"}
                      />
                    </div>
                    <div className="input-wrap college-select">
                      <Select
                        className="college-select input-field"
                        options={collegeOptions}
                        value={
                          selectedCollege == null ? "" : selectedCollege.label
                        }
                        onChange={handleCollegeChange}
                        placeholder={
                          selectedCollege == null
                            ? "Select your college "
                            : selectedCollege.label
                        }
                      />
                    </div>

                    <div className="input-wrap div-flex">
                      <div>
                        <input
                          type="text"
                          className="input-field degree-field"
                          autoComplete="off"
                          value={data.degree}
                          onChange={(e) =>
                            setData({ ...data, degree: e.target.value })
                          }
                          placeholder={data.degree ? "" : "Degree"}
                        />
                      </div>
                      <div>
                        <Select
                          className="college-select input-field year-field"
                          options={yearOptions}
                          value={selectedYear == null ? "" : selectedYear.label}
                          onChange={handleYearChange}
                          placeholder={
                            selectedYear == null ? "Year " : selectedYear.label
                          }
                        />
                      </div>
                    </div>

                    <div className="input-wrap">
                      <input
                        type="text"
                        className="input-field"
                        autoComplete="off"
                        value={data.dept}
                        onChange={(e) =>
                          setData({ ...data, dept: e.target.value })
                        }
                        placeholder={data.dept ? "" : "Department"}
                      />
                    </div>

                    <div className="input-wrap">
                      <input
                        type="number"
                        minLength="4"
                        className="input-field"
                        autoComplete="off"
                        value={data.contactNo}
                        onChange={(e) =>
                          setData({ ...data, contactNo: e.target.value })
                        }
                        placeholder={data.contactNo ? "" : "Contact no"}
                      />
                    </div>
                    <div className="warning-div">
                      <span className="contact-span">
                        {isValidMobileNumber(data.contactNo)
                          ? ""
                          : "Enter a valid Mobile Number"}
                      </span>
                    </div>
                  </>
                )}

                <div className="input-wrap">
                  <input
                    type="email"
                    className="input-field"
                    autoComplete="off"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    placeholder={data.email ? "" : "Email"}
                  />
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    className="input-field"
                    autoComplete="off"
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    placeholder={data.password ? "" : "Password"}
                  />
                </div>

                {isSignUpMode ? (
                  <button
                    onClick={loginUser}
                    type="submit"
                    className="sign-btn"
                  >
                    Sign in
                  </button>
                ) : (
                  <button
                    onClick={registerUser}
                    type="submit"
                    className="sign-btn"
                  >
                    Sign up
                  </button>
                )}

                {isSignUpMode ? (
                  <p className="text">
                    Forgotten your password or your login details? &nbsp;
                    <button className="link-button">Get help</button> signing in
                  </p>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>

          <div className="login-carousel">
            <div className="overflow-scroll">
              <div className="scrolling-images">
                <img src={img1} className="image img-1 show" alt="" />
                <img src={img2} className="image img-2 show" alt="" />
                <img src={img3} className="image img-3 show" alt="" />
                <img src={img4} className="image img-3 show" alt="" />
                <img src={img5} className="image img-3 show" alt="" />
                <img src={img6} className="image img-3 show" alt="" />
                <img src={img7} className="image img-3 show" alt="" />
                <img src={img1} className="image img-1 show" alt="" />
                <img src={img2} className="image img-2 show" alt="" />
                <img src={img3} className="image img-3 show" alt="" />
                <img src={img4} className="image img-3 show" alt="" />
                <img src={img5} className="image img-3 show" alt="" />
                <img src={img6} className="image img-3 show" alt="" />
                <img src={img7} className="image img-3 show" alt="" />
                <img src={img1} className="image img-1 show" alt="" />
                <img src={img2} className="image img-2 show" alt="" />
                <img src={img3} className="image img-3 show" alt="" />
                <img src={img4} className="image img-3 show" alt="" />
                <img src={img5} className="image img-3 show" alt="" />
                <img src={img6} className="image img-3 show" alt="" />
                <img src={img7} className="image img-3 show" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginForm;
