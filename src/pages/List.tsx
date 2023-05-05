import { useState, useEffect, useContext } from "react";
import Events from "../components/events";
import { PartyEvent, getEvents, getEventsByName } from "../Persistence/DB";
import { AuthContext } from "../App";
import "../styles/list.css"
import Modal from "react-modal";


function List() {

    const [events, setEvents] = useState<PartyEvent[]>([]);
    const [searchName, setSearchName] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [deleteId, setDeleteId] = useState<string>("");

    const auth = useContext(AuthContext);

   
    // load events
    useEffect(() => {
        getEvents().then((events) => {
            setEvents(events as PartyEvent[]);
        });
    }, []);

    // handle search
    const handleSearch = async (event: any) => {
        event.preventDefault();
        const events = await getEventsByName(searchName);
        console.log(events);
        setEvents(events as PartyEvent[]);
    }

    const handleOpenModal = (value: boolean, id: string) => {
        setIsOpen(value);
        setDeleteId(id);

    }

    const handleDeleteEvent = async (event: any) => {
        event.preventDefault();
        console.log("deleting event");
        // delete event by adding id to query params
        await fetch(`http://localhost:5001/deleteEvent?id=${deleteId}`, {
            method: "DELETE",
        });

        // alert the user that the event has been deleted
        alert("Event has been deleted");
        // reload the events
        const events = await getEvents();
        setEvents(events as PartyEvent[]);
        // close the modal
        setIsOpen(false);
    };

    // handle name change
    const handleNameChange = (event: any) => {
        setSearchName(event.target.value);
        console.log(searchName);
    }

    // TODO: return the list.html page here
    return (
        <>
            <Modal isOpen={isOpen} onRequestClose={() => {setIsOpen(false)}} className="modal" > 
                <div className="modalWindow">
                    <h2>
                        Are you sure you want to delete this event?
                    </h2>
                    <div style={{display: "flex", justifyContent: "space-around"}}>
                        <button className="submitButtons login" onClick={() => {setIsOpen(false)}}>Cancel</button>
                        <button className="submitButtons delete" onClick={handleDeleteEvent}>Delete</button>
                    </div>
                </div>

            </Modal>
        {
            auth?.isLoggedIn ?
            <div>
            
                <div className="listHeader">
                    <div> 
                        Welcome to our party page. View all pending parties you are planning.
                        choose tob either edit or remove the party from out list.
                    </div>
            
                    <div style={{display: "flex"}}>
                        <input type="text" placeholder="Search event by name" name="name" className="searchbar" onChange={handleNameChange}/>
                        <button onClick={handleSearch} className="submitButtons login">Search</button>
                    </div>
                </div>

               <table>
                    <tbody>
                        <tr>
                            <th>
                                Event Name
                            </th>
                                <th>
                                    Date
                                </th>
                                <th>
                                    Location
                                </th>
                                <th>
                                    Category
                                </th>
                                <th>
                                    Status
                                </th>
                                <th></th>
                                <th></th>
                                <th></th>
                        </tr>
                    
                        {
                            // events is not empty 
                            events &&
                            events.map((event) => {
                                if (event === undefined) {
                                    return <></>
                                }
                                return <Events key={event.id} event={event} modalCallback={handleOpenModal} />
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