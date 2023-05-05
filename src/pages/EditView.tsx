import { useLocation, useNavigate } from "react-router-dom";
import { PartyEvent } from "../Persistence/DB";
import { getEvent } from "../Persistence/DB";
import { useState, useEffect } from "react";
import "../styles/createNew.css"

export default function EditView() {
    const navigate = useNavigate();
    // get id from url query 
    const query = new URLSearchParams(useLocation().search);
    const id = query.get("id");
    // get event from id

    const [payload, setPayload] = useState<{[key: string]: any}>({});
    
    


    // handle edit event
    const handleEditEvent = async () => {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
           }
           
           let bodyContent = JSON.stringify(payload);

           console.log(bodyContent);
           
           let response = await fetch(`https://partyplanner-backend.onrender.com/updateEvent?id=3`, { 
             method: "POST",
             body: bodyContent,
             headers: headersList
           });
           
           let data = await response.text();
           console.log(data);
        
    };

    // handle change
    const handleChange = (event: any) => {
        setPayload({
            ...payload,
            [event.target.name]: event.target.value,
        });
        console.log(payload);
    };




    return (
        <div className="details">
            <button onClick={() => {navigate("/list")}}>Return</button>
            
            <>
                <h1>Edit Event</h1>
                <form>

                    <input type="text" name="name" placeholder="Event title" className="textfield" onChange={handleChange} />
                    <input type="date" name="date" className="textfield" onChange={handleChange} />
                    <input type="text" name="location" placeholder="Event location" className="textfield" onChange={handleChange} />
                    <div>Event status:</div>
                    <select className="textfield" name="status" onChange={handleChange}>
                        <option value="upcoming">Upcoming</option>
                        <option value="past">Past</option>
                    </select>
                    <div>Event category:</div>
                    <select className="textfield" name="category" onChange={handleChange}>
                        <option value="other">Other</option>
                        <option value="birthday">Birthday</option>
                        <option value="wedding">Wedding</option>
                        <option value="christmas">Christmas</option>
                    </select>

                    <div>Event status:</div>
                    

                </form>
                    <button className="submitButtons login" onClick={handleEditEvent}> Submit</button>
            </>
        </div>
    );
}