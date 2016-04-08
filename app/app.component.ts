import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { ShipService } from './ship.service';
import { FocusService } from './focus.service';
//import {HeroesComponent} from './heroes.component'
import { DashboardComponent } from './dashboard.component'
import { ShipDetailComponent } from './ship-detail.component'


@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    //styleUrls: ['app/css/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        ShipService,
        FocusService
    ]
})
@RouteConfig([
    {
    //    path: '/heroes',
    //    name: 'Heroes',
    //    component: HeroesComponent
    //}, {
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
export class AppComponent implements OnInit {
    title = 'Starships';
}