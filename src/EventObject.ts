import { uid } from "uid"


class EventObject {

    name: string
    date: Date
    location: string
    eventId: string = uid()
    status: "upcoming" | "past" = "upcoming"
    category: "christmas" | "birthday" | "other" 


    constructor(name: string, date: Date, location: string, category: "christmas" | "birthday" | "other") {
        this.name = name
        this.date = date
        this.location = location
        this.category = category
    }

}