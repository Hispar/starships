import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

// Manufacturer
import {Manufacturer} from '../../models/manufacturer';
import {ManufacturerService} from '../../services/manufacturer.service';

// Ship
import {Ship} from '../../models/ship'
import {ShipRowComponent} from '../ship/ship-row.component'

@Component({
    selector: 'manufacturer-detail',
    templateUrl: 'app/templates/manufacturer-detail.component.html',
    directives: [ShipRowComponent]
})
export class ManufacturerDetailComponent implements OnInit {
    @Input()
        manufacturer:Manufacturer;
    ships = [];
    elements = 3;

    constructor(private _manufacturerService:ManufacturerService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        var that = this;
        let id = +this._routeParams.get('id');
        this._manufacturerService.getManufacturer(id)
            .then(manufacturer => this.manufacturer = manufacturer);

        this._manufacturerService.getManufacturerShips(1)
            .then(function (ships) {
                for (var j = 0; (j * that.elements) < ships.length; j++) {
                    that.ships[j] = ships.slice(that.elements * j, that.elements * j + that.elements);
                }
            });
    }

    goBack() {
        window.history.back();
    }
}