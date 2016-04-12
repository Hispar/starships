import {Injectable} from 'angular2/core';

import {SHIPS} from '../mocks/mock-ships';

@Injectable()
export class ShipService {
    getShip(id:number) {
        return Promise.resolve(SHIPS).then(
            ships => ships.filter(ship => ship.id === id)[0]
        );
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