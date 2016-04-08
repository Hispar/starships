import {Injectable} from 'angular2/core';

import { Ship } from './ship'
import { SHIPS } from './mock-ships';

import { FocusService } from './focus.service'

@Injectable()
export class ShipService {
    constructor(private _focusService : FocusService) { }

    getShip(id:number) {
        var that = this;
        var obj = Promise.resolve(SHIPS).then(
                function(ships){
                    var ship = ships.filter(ship => ship.id === id)[0];
                    ship.focus = that._focusService.getFocus(ship.focus[0]);
                    return ship;
                }
        );
        console.log(obj);
        return obj;
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