import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { ShipService } from './ship.service';
import { RowComponent } from './row.component';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/templates/dashboard.component.html',
    directives: [RowComponent]
})
export class DashboardComponent implements OnInit {
    ships = [];

    constructor(
        private _router: Router,
        private _shipService: ShipService) {
    }

    ngOnInit() {
        this._shipService.getShips()
            .then(ships => this.ships[0] = ships.slice(0, 4));
    }
}