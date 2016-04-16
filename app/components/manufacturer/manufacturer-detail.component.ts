import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Manufacturer} from '../../models/manufacturer';
import {ManufacturerService} from '../../services/manufacturer.service';

import {ShipRowComponent} from '../ship/ship-row.component'

@Component({
    selector: 'manufacturer-detail',
    templateUrl: 'app/templates/manufacturer-detail.component.html',
    directives: [ShipRowComponent]
})
export class ManufacturerDetailComponent implements OnInit {
    @Input()
        manufacturer:Manufacturer;

    constructor(private _manufacturerService:ManufacturerService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._manufacturerService.getManufacturer(id)
            .then(manufacturer => this.manufacturer = manufacturer);
    }

    goBack() {
        window.history.back();
    }
}