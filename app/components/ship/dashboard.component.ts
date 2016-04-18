import {Component, OnInit} from 'angular2/core';

import {ShipService} from '../../services/ship.service';
import {ShipRowComponent} from './ship-row.component';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/templates/dashboard.component.html',
    directives: [ShipRowComponent]
})
export class DashboardComponent implements OnInit {
    ships = [];
    elements = 3;
    title = 'All Ships';

    constructor(private _shipService:ShipService) {
    }

    ngOnInit() {
        var that = this;
        this._shipService.getShips()
            .then(function (ships) {
                for (var j = 0; (j * that.elements) < ships.length; j++) {
                    that.ships[j] = ships.slice(that.elements * j, that.elements * j + that.elements);
                }
            });
    }
}