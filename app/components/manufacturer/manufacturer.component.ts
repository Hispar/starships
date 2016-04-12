import {Component, Input} from 'angular2/core';
//import {Router} from 'angular2/router';
import {Manufacturer} from '../../models/manufacturer';


@Component({
    selector: 'manufacturer',
    templateUrl: 'app/templates/manufacturer.component.html',
})
export class ManufacturerComponent {
    @Input() manufacturer:Manufacturer;

    //constructor(private _router:Router) {
    //}

    //gotoDetail(manufacturer) {
    //    let link = ['ShipDetail', {id: ship.id}];
    //    this._router.navigate(link);
    //}
}