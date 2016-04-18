import {Component, OnInit} from 'angular2/core';

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
    ship1:Ship;
    ship2:Ship;
    ship3:Ship;
    elements = 20;
    title = 'Star Citizen';
    home_subtitle = 'Aquí puedes ver algunas de las naves que se encuentras disponibles en Star Citizen';

    constructor(private _shipService:ShipService) {
    }

    ngOnInit() {
        var id = Math.floor(Math.random() * this.elements + 1);
        this._shipService.getShip(id)
            .then(ship => this.ship1 = ship);
        id = Math.floor(Math.random() * this.elements + 1);
        this._shipService.getShip(id)
            .then(ship => this.ship2 = ship);
        id = Math.floor(Math.random() * this.elements + 1);
        this._shipService.getShip(id)
            .then(ship => this.ship3 = ship);
    }
}
