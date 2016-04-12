import {Component, OnInit} from 'angular2/core';

import {ManufacturerRowComponent} from './manufacturer-row.component'
import {ManufacturerService} from '../../services/manufacturer.service';


@Component({
    selector: 'manufacturers-list',
    templateUrl: 'app/templates/manufacturer-list.component.html',
    directives: [ManufacturerRowComponent]
})
export class ManufacturerListComponent implements OnInit {
    title = 'Manufacturers';
    manufacturers = [];
    elements = 4;

    constructor(private _manufacturerService:ManufacturerService) {
    }

    ngOnInit() {
        var that = this;
        this._manufacturerService.getManufacturers()
            .then(function (manufacturers) {
                for (var j = 0; (j * that.elements) < manufacturers.length; j++) {
                    that.manufacturers[j] = manufacturers.slice(that.elements * j, that.elements * j + that.elements);
                }
            });
    }
}