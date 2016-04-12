import {Component, Input} from 'angular2/core';
import {Router} from 'angular2/router';
import {Ship} from '../../models/ship';


@Component({
    selector: 'ship',
    templateUrl: 'app/templates/ship.component.html',
})
export class ShipComponent {
    @Input() ship:Ship;

    constructor(private _router:Router) {
    }

    gotoDetail(ship) {
        let link = ['ShipDetail', {id: ship.id}];
        this._router.navigate(link);
    }
}