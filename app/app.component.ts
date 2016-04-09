import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { ShipService } from './ship.service';
import { DashboardComponent } from './dashboard.component'
import { ShipDetailComponent } from './ship-detail.component'


@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        ShipService,
    ]
})
@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    }, {
        path: '/detail/:id',
        name: 'ShipDetail',
        component: ShipDetailComponent,
    }
])
export class AppComponent {
    title = 'Starships';
}