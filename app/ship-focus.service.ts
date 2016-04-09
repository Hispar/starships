import {Injectable} from 'angular2/core';

import { SHIPFOCUSES } from './mock-ship-focus';

@Injectable()
export class ShipFocusService {
    getShipFocus(id:number) {
        return Promise.resolve(SHIPFOCUSES).then(
            shipfocuses => shipfocuses.filter(shipfocus => shipfocus.id === id)[0]
        );
    }

    getShipFocuses() {
        return Promise.resolve(SHIPFOCUSES);
    }
}