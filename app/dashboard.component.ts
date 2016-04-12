import {Component, OnInit} from 'angular2/core';

import {ShipService} from './ship.service';
import {RowComponent} from './row.component';
//import {SearchPipe} from "./pipes/search.pipe";

@Component({
    selector: 'my-dashboard',
    //pipes: [SearchPipe],
    templateUrl: 'app/templates/dashboard.component.html',
    directives: [RowComponent]
})
export class DashboardComponent implements OnInit {
    ships = [];
    elements = 3;
    title = 'Top Ships';

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