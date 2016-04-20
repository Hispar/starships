import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {Ship} from '../../models/ship';
import {ShipService} from '../../services/ship.service';

@Component({
    selector: 'ship-detail',
    templateUrl: 'app/templates/ship-detail.component.html',
})
export class ShipDetailComponent implements OnInit {
    ship:Ship;

    constructor(private _shipService:ShipService,
                private _routeParams:RouteParams,
                private _router:Router) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._shipService.getShip(id)
            .then(ship => this.ship = ship);
    }

    goBack() {
        window.history.back();
    }

    goToManufacturer(id:number) {
        let link = ['ManufacturerDetail', {id: id}];
        this._router.navigate(link);
    }
}