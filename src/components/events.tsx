import { PartyEvent } from "../Persistence/DB";
import "../styles/events.css"
import { NavLink } from "react-router-dom";



function Events(props: {event: PartyEvent, modalCallback: (value: boolean, id: string) => void}) {

  return (
    <tr>
        
        <td className="" >{props.event.name}</td>
        
        <td className="" >{`${props.event.date}`}</td>
        <td className="" >{props.event.location}</td>
        <td className="" >{props.event.category}</td>
        <td className="" >{props.event.status}</td>
        
        <td>
          <NavLink to={`/details?id=${props.event.id}`} >View</NavLink>
        </td>
        <td>
          <NavLink to={`/edit?id=${props.event.id}`} className="button secondary">Edit</NavLink>
        </td>
        <td>
          <button className="button alert" onClick={() => {props.modalCallback(true, props.event.id)}}>Delete</button>
        </td>
      
    </tr>
  );
}

export default Events;