import {Component} from 'angular2/core';

import {ManufacturerRowComponent} from './manufacturer-row.component'
//import { ShipService } from './ship.service';
//import { ShipDetailComponent } from './ship-detail.component'


@Component({
    selector: 'manufacturers-list',
    templateUrl: 'app/templates/manufacturer-list.component.html',
    directives: [ManufacturerRowComponent]
    //providers: [
    //    ShipService,
    //]
})
export class ManufacturerListComponent {
    title = 'Manufacturers';
    manufacturers = [];
}