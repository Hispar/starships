import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router'

// Ships
import {Ship} from '../models/ship'
import {ShipService} from '../services/ship.service';
import {ShipComponent} from './ship/ship.component'

@Component({
    selector: 'home',
    templateUrl: 'app/templates/home.component.html',
    directives: [ROUTER_DIRECTIVES, ShipComponent]
})
export class HomeComponent implements OnInit {
    single_ships = [];
    double_ships = [];
    capital_ships = [];
    elements = 20;
    title = 'Star Citizen';
    home_subtitle = 'Aquí puedes ver algunas de las naves que se encuentran disponibles en Star Citizen';
    single_ship_title = 'Naves de un solo tripulante';
    double_ship_title = 'Naves multi tripuladas';
    capital_ship_title = 'Naves capitales';
    router: Router;

    constructor(
        private _shipService:ShipService,
        private data:Router
    ) {
        this.router = data;
    }

    ngOnInit() {
        this._shipService.getRandomShipCrew(1, 3)
            .then(ships => this.single_ships = ships);
        this._shipService.getRandomShipCrew(2, 3)
            .then(ships => this.double_ships = ships);
        this._shipService.getRandomShipCrew(10, 3)
            .then(ships => this.capital_ships = ships);
    }
}
