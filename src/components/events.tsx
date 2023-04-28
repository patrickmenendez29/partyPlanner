import { PartyEvent } from "../Persistence/DB";
import "../styles/events.css"
import { NavLink } from "react-router-dom";


function Events(props: {event: PartyEvent}) {

  return (
    <tr>
        
        <h2 className="" >{props.event.name}</h2>
        
        <td className="" >{`${props.event.date}`}</td>
        <td className="" >{props.event.location}</td>
        <td className="" >{props.event.category}</td>
        <td className="" >{props.event.status}</td>
        
        <td>
          <NavLink to={`/details?id=${props.event.id}`} >View</NavLink>
        </td>
        <td>
          <button className="button secondary">Edit</button>
        </td>
        <td>
          <button className="button alert">Delete</button>
        </td>
      
    </tr>
  );
}

export default Events;