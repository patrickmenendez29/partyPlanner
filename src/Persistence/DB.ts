

export interface PartyEvent {
    id: string;
    name: string;
    date: Date;
    location: string;
    category: "christmas" | "birthday" | "other";
    status: "upcoming" | "past";
}


export async function getEvents() {
    const events = []
    for (let i = 1; i < 5; i++) {
        const event: PartyEvent = await getEvent(i.toString())
        events.push(event)
    }    
    return events

}


export async function getEvent(id: string) {
    return await fetch(`https://ts--astounding-cobbler-8d4eb0.netlify.app/events/${id}.json`)
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
}
