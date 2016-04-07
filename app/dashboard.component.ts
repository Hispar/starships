import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

import { Ship } from './ship';
import { ShipService } from './ship.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/templates/dashboard.component.html',
    //styleUrls: ['app/css/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    ships:Ship[] = [];

    constructor(
        private _router: Router,
        private _shipService: ShipService) {
    }

    ngOnInit() {
        this._shipService.getShips()
            .then(ships => this.ships = ships.slice(1, 5));
    }

    gotoDetail(ship) {
        let link = ['ShipDetail', { id: ship.id }];
        this._router.navigate(link);
    }
}