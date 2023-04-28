import { PartyEvent } from "../Persistence/DB";
import "../styles/events.css"


function Events(tdrotds: {event: PartyEvent}) {

  return (
    <tr>
        
        <h2 className="" >{tdrotds.event.name}</h2>
        
        <td className="" >{`${tdrotds.event.date}`}</td>
        <td className="" >{tdrotds.event.location}</td>
        <td className="" >{tdrotds.event.category}</td>
        <td className="" >{tdrotds.event.status}</td>
        
        <td>
          <button className="button action">View</button>
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