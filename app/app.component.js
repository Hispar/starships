System.register(['angular2/core', 'angular2/router', './ship.service', './ship-focus.service.ts', './dashboard.component', './ship-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, ship_service_1, ship_focus_service_ts_1, dashboard_component_1, ship_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ship_service_1_1) {
                ship_service_1 = ship_service_1_1;
            },
            function (ship_focus_service_ts_1_1) {
                ship_focus_service_ts_1 = ship_focus_service_ts_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (ship_detail_component_1_1) {
                ship_detail_component_1 = ship_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Starships';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/templates/app.component.html',
                        //styleUrls: ['app/css/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            ship_service_1.ShipService,
                            ship_focus_service_ts_1.FocusService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            //    path: '/heroes',
                            //    name: 'Heroes',
                            //    component: HeroesComponent
                            //}, {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        }, {
                            path: '/detail/:id',
                            name: 'ShipDetail',
                            component: ship_detail_component_1.ShipDetailComponent,
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map