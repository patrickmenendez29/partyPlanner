

export interface PartyEvent {
    id: string;
    name: string;
    date: string;
    location: string;
    category: "christmas" | "birthday" | "other";
    status: "upcoming" | "past";
}


export async function getEvents() {
    // fetch events from backend using getEvents endpoint
    return await fetch("https://partyplanner-backend.onrender.com/getEvents")
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
        
}


export async function getEvent(id: string) {
    // get current url without subdirectories
    const url = window.location.href.split("/").slice(0, 3).join("/")
    console.log(url)
    return await fetch(`https://partyplanner-backend.onrender.com/getEvent?id=${id}`)
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
}

// update event by id
export async function updateEvent(id: string, event: PartyEvent) {
    return await fetch(`https://partyplanner-backend.onrender.com/updateEvent?id=${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
}

// delte event by id
export async function deleteEvent(id: string) {
    return await fetch(`https://partyplanner-backend.onrender.com/deleteEvent?id=${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
}


// get events by name
export async function getEventsByName(name: string) {
    // if name is empty, get all events
    if (name === "") {
        return await fetch("https://partyplanner-backend.onrender.com/getEvents")

            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }
    
    return await fetch(`https://partyplanner-backend.onrender.com/getEventsByName?name=${name}`)
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
}

