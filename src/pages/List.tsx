import { auth } from "../firebaseConfig";
import { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Events from "../components/events";
import { PartyEvent, getEvent, getEvents } from "../Persistence/DB";
import { AuthContext } from "../App";
import "../styles/list.css"


function List() {

    const navigate = useNavigate();
    const [events, setEvents] = useState<PartyEvent[]>([]);
    const auth = useContext(AuthContext);

   
    // load events
    useEffect(() => {
        getEvents().then((events) => {
            //setEvents(events);
            setEvents(events);
        });
    }, []);

    

    // TODO: return the list.html page here
    return (
        <>
        
        {
            auth?.isLoggedIn ?
            <div>
            
                <p> 
                    Welcome to our party page. View all pending parties you are planning.
                    choose tob either edit or remove the party from out list.
                </p>
        

               <table>
                 <tbody>
                    <th>
                        <td><h2>Event Name</h2></td>
                    </th>
                        <th>
                            <td>Date</td>
                        </th>
                        <th>
                            <td>Location</td>
                        </th>
                        <th>
                            <td>Category</td>
                        </th>
                        <th>
                            <td>Status</td>
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                    {
                        events.map((event) => {
                            return <Events key={event.id} event={event} />
                        })
                    }
                 </tbody>
               </table>
          
            </div>
            :
            <p>Please <a href="/"> Sign in  </a>to view this page</p>

        }

        </>
        
    );
}

export default List;