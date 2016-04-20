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

    getRandomShip() {
        var id = Math.floor(Math.random() * SHIPS.length + 1);
        return Promise.resolve(SHIPS).then(
                ships => ships.filter(ship => ship.id === id)[0]
        );
    }

    getRandomShipCrew(crew:number, limit:number) {
        return Promise.resolve(SHIPS).then(
                ships => ships.filter(ship => ship.max_crew >= crew).slice(0, limit)
        );
    }
}