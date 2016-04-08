import {Injectable} from 'angular2/core';

import { Ship } from './ship'
import { SHIPS } from './mock-ships';

import { FocusService } from './focus.service'

@Injectable()
export class ShipService {
    constructor(private _focusService : FocusService) { }

    getShip(id:number) {
        return Promise.resolve(SHIPS).then(
                ships => ships.filter(ship => ship.id === id)[0]
        ).then(ship => ship.focus = this._focusService.getFocus(ship.focus));
    }

    getShips() {
        return Promise.resolve(SHIPS);
    }

    //getHeroesSlowly() {
    //    return new Promise<Ship[]>(resolve =>
    //            setTimeout(()=>resolve(SHIPS), 2000) // 2 seconds
    //    );
    //}
}