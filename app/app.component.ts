import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';

// Services
import {ShipService} from './services/ship.service';
import {ManufacturerService} from './services/manufacturer.service';

//Home components
import {HomeComponent} from './components/home.component'

//Ship components
import {DashboardComponent} from './components/ship/dashboard.component'
import {ShipDetailComponent} from './components/ship/ship-detail.component'
import {SingleSeatShipsComponent} from './components/ship/single-seat-ships.component'

// Manufacturer components
import {ManufacturerListComponent} from './components/manufacturer/manufacturer-list.component'
import {ManufacturerDetailComponent} from './components/manufacturer/manufacturer-detail.component'


@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        ShipService,
        ManufacturerService
    ]
})
@RouteConfig([
    {
        path: '/home',
        name: 'Home',
        component: HomeComponent,
        useAsDefault: true
    }, {
        path: '/naves',
        name: 'Dashboard',
        component: DashboardComponent,
    }, {
        path: '/naves-un-tripulante',
        name: 'SingleSeatShips',
        component: SingleSeatShipsComponent,
    }, {
        path: '/fabricantes',
        name: 'Manufacturers',
        component: ManufacturerListComponent,
    }, {
        path: '/nave/:id',
        name: 'ShipDetail',
        component: ShipDetailComponent,
    }, {
        path: '/fabricante/:id',
        name: 'ManufacturerDetail',
        component: ManufacturerDetailComponent,
    }
])
export class AppComponent {
    title = 'Starships';
    menu = [
        {
            'url' : 'Dashboard',
            'title': 'Naves'
        },
        {
            'url' : 'Manufacturers',
            'title': 'Fabricantes'
        },
    ];
    router: Router;

    constructor(data: Router) {
        this.router = data;
    }
}