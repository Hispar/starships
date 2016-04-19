import {DashboardComponent} from './dashboard.component';
import {Component, OnInit} from 'angular2/core';

import {ShipRowComponent} from './ship-row.component';
import {ShipService} from '../../services/ship.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/templates/dashboard.component.html',
    directives: [ShipRowComponent]
})
export class MultiCrewShipsComponent extends DashboardComponent implements OnInit{
    ships = [];
    elements = 3;
    title = 'Naves de varios tripulantes';

    constructor(private _shipService:ShipService) {
        super(_shipService);
    }

    ngOnInit() {
        var that = this;
        this._shipService.getShips()
            .then(function (ships) {
                ships = ships.filter(ship => ship.max_crew >= 2);
                for (var j = 0; (j * that.elements) < ships.length; j++) {
                    that.ships[j] = ships.slice(that.elements * j, that.elements * j + that.elements);
                }
            });
    }
}
