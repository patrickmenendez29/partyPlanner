import { useContext } from "react";
import { AuthContext } from "../App";
import "../styles/createNew.css"


function CreateNew() {

    const auth = useContext(AuthContext);

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
                <label htmlFor="fpartyname">First name of individual htmlFor the party</label><br />
                <input type="text" id="fpartyname" name="fname" placeholder="John"  className="textfield"/><br />
                <label htmlFor="lpartyname">Last name of individual htmlFor the party</label><br />
                <input type="text" id="lpartyname" name="lname" placeholder="Appleseed" className="textfield"/><br />
                <div>
                    <label htmlFor="partytype">Type of party</label><br />
                    <select id="partys" name="partys" className="textfield">
                        <option value="Birthday">Birthday</option> 
                        <option value="Bachlors">Bachlors</option> 
                        <option value="Ball">Ball</option>
                        <option value="Dinner">Dinner</option>  
                        <option value="Pool">Pool</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Baby Shower">Baby Shower</option>  
                    </select>
                </div>
                <label htmlFor="number">Phone Number</label>
                <input type="text" className="textfield" id="number" name="number" placeholder="(123) 456 7890"/>
                <label htmlFor="location" >Location</label>
                <input type="text" id="location" name="location" className="textfield" placeholder="123 Main St."/>
                <label htmlFor="adult">Adult Themed</label>
                <input type="checkbox" id="adultp" name="adultp"/>
                <label htmlFor="msg"> Enter any request you would like to make</label>
                <textarea id="msg" name="message" maxLength={500} className="textfield" ></textarea>
                <input type="submit" value="submit" className="submitButtons login"/>
            </form>
        </div>

            </>
            : <div>Please <a href="/">Sign in </a> to view this page</div>
        }
    </>
    );
}

export default CreateNew;