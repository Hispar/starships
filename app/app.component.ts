import {Component, provide} from 'angular2/core';
import {
    RouteConfig,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    Router,
    Route,
    Location,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';

// Services
import {ShipService} from './services/ship.service';
import {ManufacturerService} from './services/manufacturer.service';

//Home components
import {HomeComponent} from './components/home.component'

//Extra components
import {DropDownComponent} from './components/extras/dropdown.component'

//Ship components
import {DashboardComponent} from './components/ship/dashboard.component'
import {ShipDetailComponent} from './components/ship/ship-detail.component'
import {SingleSeatShipsComponent} from './components/ship/single-seat-ships.component'
import {MultiCrewShipsComponent} from './components/ship/multi-crew-ships.component'

// Manufacturer components
import {ManufacturerListComponent} from './components/manufacturer/manufacturer-list.component'
import {ManufacturerDetailComponent} from './components/manufacturer/manufacturer-detail.component'


@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    directives: [ROUTER_DIRECTIVES, DropDownComponent],
    providers: [
        ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy}),
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
        path: '/naves-varios-tripulantes',
        name: 'MultiCrewShips',
        component: MultiCrewShipsComponent,
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
            'url': 'Dashboard',
            'title': 'Naves',
            'submenu': [
                {
                    'url': 'Dashboard',
                    'title': 'Todas'
                },
                {
                    'url': 'SingleSeatShips',
                    'title': 'De un tripulante'
                },
                {
                    'url': 'MultiCrewShips',
                    'title': 'De varios tripulantes'
                },
            ]
        },
        {
            'url': 'Manufacturers',
            'title': 'Fabricantes'
        },
    ];
    menu_over = '';
    router:Router;
    location: Location;
    constructor(location: Location, data:Router) {
        this.location = location;
        this.router = data;
    }

    showSubmenu(link){
        this.menu_over = link;
    }
}