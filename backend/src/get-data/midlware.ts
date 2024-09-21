import { Ticket } from "data/Ticket.type";

export default function writeTxtFile(data:Ticket[]){
    let text: string = " ";

    for(let i: number = 0; i < data.length; i++){
        text = text.concat(" ", data[i].Date)
        text = text.concat("", "  ")
        text = text.concat(" ", data[i].Name)
        text = text.concat("", "  ")
        text = text.concat(" ", data[i].hash)
        text = text.concat("", "  ")
        text = text.concat(" ", data[i].data)
        text = text.concat("", `    all of the ${i} data`)
    }

    return text

}