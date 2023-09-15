import axios from "axios";
import React, { useState } from "react";
import { toast } from 'react-hot-toast';


function Attendence() {
    const [email, setEmail] = useState("");
    const [zorid, setZorid] = useState("");
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
            <div className="h1">
                <h1>Zorphix Super Admin</h1>
            </div>
            <div className="attendence">
                <h2>Attendence Marker</h2>
                <form className="form">
                    <div >
                        <input id="zorid" className="input" type="text" value={zorid} placeholder="Zorid" onChange={(e) => setZorid(e.target.value)} required/>
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
