import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

// Services
import {ShipService} from './services/ship.service';
import {ManufacturerService} from './services/manufacturer.service';

//Ship components
import {DashboardComponent} from './components/ship/dashboard.component'
import {ShipDetailComponent} from './components/ship/ship-detail.component'

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
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    }, {
        path: '/manufacturers',
        name: 'Manufacturers',
        component: ManufacturerListComponent,
    }, {
        path: '/ship/:id',
        name: 'ShipDetail',
        component: ShipDetailComponent,
    }, {
        path: '/manufacturer/:id',
        name: 'ManufacturerDetail',
        component: ManufacturerDetailComponent,
    }
])
export class AppComponent {
    title = 'Starships';
}