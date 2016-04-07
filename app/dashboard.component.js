System.register(['angular2/core', 'angular2/router', './ship.service'], function(exports_1, context_1) {
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
    var core_1, router_1, ship_service_1;
    var DashboardComponent;
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
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_router, _shipService) {
                    this._router = _router;
                    this._shipService = _shipService;
                    this.ships = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._shipService.getShips()
                        .then(function (ships) { return _this.ships = ships.slice(1, 5); });
                };
                DashboardComponent.prototype.gotoDetail = function (ship) {
                    var link = ['ShipDetail', { id: ship.id }];
                    this._router.navigate(link);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        templateUrl: 'app/templates/dashboard.component.html',
                        styleUrls: ['app/css/dashboard.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, ship_service_1.ShipService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map