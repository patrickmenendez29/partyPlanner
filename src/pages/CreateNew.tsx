import { useContext } from "react";
import { AuthContext } from "../App";
import "../styles/createNew.css"
import { useNavigate } from "react-router-dom";
import { PartyEvent } from "../Persistence/DB";
import { useState } from "react";
import { uid } from "uid";


function CreateNew() {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [form , setForm] = useState<PartyEvent>({
        id: uid(),
        name: "",
        date: "",
        location: "",
        category: "other",
        status: "upcoming",

    });

    const handleChange = (event: any) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };


    const handleCreateEvent = async (event: any) => {
        event.preventDefault();
        // send post request to backend with form data
        const response = await fetch("https://partyplanner-backend.onrender.com/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: form.id,
                name: form.name,
                date: form.date,
                location: form.location,
                category: form.category,
                status: form.status,
            }),
        });
        console.log(response.json());
        // redirect to list page
        navigate("/list");
    };
    
    
    // TODO: add the create new html here:
    return (
        <>
        { auth?.isLoggedIn ?
            <>

                <ul>
                    <li>please submit your party at least 2 weeks before the planned date.</li>
                    <li>please insert information as how it is displayed on official doccuments</li>
                    <li>visit the tasks page to make changes to your party request</li>
                </ul>
                <br />

        <div className="partyPlanner">
            <form className="party_htmlForm" method="">
                <label htmlFor="fpartyname">Party Title</label><br />
                <input type="text" id="fpartyname" name="name" placeholder="Christmas Party"  className="textfield" onChange={handleChange}/><br />
                <label htmlFor="fdate">Date</label><br />
                <input type="date" id="fdate" name="date" className="textfield" onChange={handleChange}/><br />
                <div>
                    <label htmlFor="partytype">Type of party</label><br />
                    <select id="partys" name="partys" className="textfield" onChange={handleChange}>
                        <option value="christmas">Christmas</option> 
                        <option value="birthday">Birthday</option> 
                        <option value="other">Other</option>
                    </select>
                </div>
                <label htmlFor="location" >Location</label>
                <input type="text" id="location" name="location" className="textfield" placeholder="123 Main St." onChange={handleChange}/>
                <label htmlFor="adult">Adult Themed</label>
                <input type="checkbox" id="adultp" name="adultp" onChange={handleChange}/>
                <label htmlFor="msg"> Enter any request you would like to make</label>
                <textarea id="msg" name="message" maxLength={500} className="textfield" ></textarea>
                <button className="submitButtons login" onClick={handleCreateEvent}> submit</button>
            </form>
        </div>

            </>
            : <div>Please <a href="/">Sign in </a> to view this page</div>
        }
    </>
    );
}

export default CreateNew;