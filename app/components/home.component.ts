import {Component, OnInit, Input} from 'angular2/core';

// Ships
import {Ship} from '../models/ship'
import {ShipService} from '../services/ship.service';
import {ShipComponent} from './ship/ship.component'

@Component({
    selector: 'home',
    templateUrl: 'app/templates/home.component.html',
    directives: [ShipComponent]
})
export class HomeComponent implements OnInit {
    @Input()
    ship:Ship;
    //ship2:Ship;
    //ship3:Ship;
    //elements = 20;
    //title = 'All Ships';

    constructor(private _shipService:ShipService) {
    }

    ngOnInit() {
        //var that = this;
        ////var id = Math.random() * this.elements + 1;
        //let id = 1;
        //this._shipService.getShip(id)
        //    .then(ship => this.ship = ship);
        //
        ////this.ship1 = this._shipService.getShip(Math.floor((Math.random() * this.elements) + 1))
        ////    .then(function (ship) {
        ////        return ship;
        ////    });
        ////this._shipService.getShip(Math.floor((Math.random() * this.elements) + 1))
        ////    .then(function (ship) {
        ////        that.ship2 = ship;
        ////    });
        ////this._shipService.getShip(Math.floor((Math.random() * this.elements) + 1))
        ////    .then(function (ship) {
        ////        that.ship3 = ship;
        ////    });
        //console.log('ship:' + this.ship)
        ////console.log('ship:' + this.ship1.manufacturer)
        //for (var variable in this.ship) {
        //    console.log('var:' + variable)
        //}
    }
}
