import { useLocation, useNavigate } from "react-router-dom";
import { PartyEvent } from "../Persistence/DB";
import { getEvent } from "../Persistence/DB";
import { useState, useEffect } from "react";

export default function Details() {
    const navigate = useNavigate();
    // get id from url query 
    const query = new URLSearchParams(useLocation().search);
    const id = query.get("id");
    // get event from id

    const [event, setEvent] = useState<PartyEvent | null>(null);
    useEffect(() => {
        if (id) {
            getEvent(id).then((event) => {
                setEvent(event);
                console.log(event);
            });
        }
    }, [id]);


    return (
        <div className="details">
            <button onClick={() => {navigate("/list")}}>Return</button>
            { event &&
            <>
                <h1>Event Details</h1>
                <div>Event title: {event!.name} </div>
                <div>Event date: {`${event!.date}`} </div>
                <div>Event location: {event!.location} </div>
                <div>Event category: {event!.category} </div>
                <div>Event status: {event!.status} </div>
            </>}
        </div>
    );
}