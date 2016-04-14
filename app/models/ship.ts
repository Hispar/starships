import {ShipFocus} from './ship-focus'

export class Ship {
    id:number;
    model:string;
    description:string;
    image:string;
    focus:ShipFocus[];
    max_crew:number;
    cargo_capacity:number;
}