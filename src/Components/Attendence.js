import axios from "axios";
import React, { useState } from "react";
import { toast } from 'react-hot-toast';
import "../component-css/attendance.css";
import logo from "../img/zorphix-landing-logo.png"

function Attendence() {
    const [email, setEmail] = useState("");
    const [zorid, setZorid] = useState("ZOR2023");
    const [isLoading, setIsLoading] = useState(false);

    

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const added = await axios.post('/attendence', { zorid, email });
            if (added.error) {
                toast.error(added.error);
            }
            else {
                toast.success(added.message)
            }
            console.log(added);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setIsLoading(false);
        }
        
    }

    return (
        <div className="parent">
            <img src={logo} alt="zorphixlogo"></img>
            <div className="h1">
                <p>Zorphix Super Admin</p>
            </div>
            <div className="attendence">
                <p>Attendance Marker</p>
                <form className="form">
                    <div >
                        <input id="zorid" className="input" type="text" value={zorid} onChange={(e) => setZorid(e.target.value)} required/>
                    </div>
                    <div >
                        <input id="email" className="input" type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                <button className="button"  onClick={handleSubmit}>{isLoading ? 'Marking...' : 'Mark attendance'}</button>
            </form>
        </div>
        </div>
    )
}

export default Attendence
    // < label for= "zorid" > Zorid</ >
    // <label for="email">Email</label>
