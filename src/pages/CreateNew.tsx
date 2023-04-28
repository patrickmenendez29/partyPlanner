import { auth } from "../firebaseConfig";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../App";


function CreateNew() {

    const auth = useContext(AuthContext);

    // TODO: add the create new html here:
    return (
        <>
        { auth?.isLoggedIn ?
            <>

                <ul>
                    <li>1) please submit your party at least 2 weeks behtmlFore the planned date.</li>
                    <li>2) please insert inhtmlFormation as how it is displayed on official doccuments</li>
                    <li>3) visit the tasks page to make changes to your party request</li>
                </ul>
                <br />

        <div className="party_planner">
            <form className="party_htmlForm" action="index.html" method="">
                <label htmlFor="fpartyname">First name of individual htmlFor the party</label><br />
                <input type="text" id="fpartyname" name="fname" placeholder="John" /><br />
                <label htmlFor="lpartyname">Last name of individual htmlFor the party</label><br />
                <input type="text" id="lpartyname" name="lname" placeholder="Appleseed"/><br />
                <label htmlFor="partytype">Type of party</label><br />
                <select id="partys" name="partys">
                    <option value="Birthday">Birthday</option> 
                    <option value="Bachlors">Bachlors</option> 
                    <option value="Ball">Ball</option>
                    <option value="Dinner">Dinner</option>  
                    <option value="Pool">Pool</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Baby Shower">Baby Shower</option>  
                </select>
                <label htmlFor="number">Phone Number</label>
                <input type="text" id="number" name="number" placeholder="(123) 456 7890"/>
                <label htmlFor="location">Location</label><br />
                <input type="text" id="plocation" name="plocation" placeholder="123 Main St."/><br />
                <label htmlFor="adult">Adult Themed</label>
                <input type="checkbox" id="adultp" name="adultp"/><br />
                <label htmlFor="msg"> Enter any request you would like to make</label><br />
                <textarea id="msg" name="message" maxLength={500} ></textarea><br />
                <input type="submit" value="submit" />
            </form>
        </div>

            </>
            : <div>Please <a href="/">Sign in </a> to view this page</div>
        }
    </>
    );
}

export default CreateNew;