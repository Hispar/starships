System.register(['angular2/core', 'angular2/router', './models/ship', './ship.service'], function(exports_1, context_1) {
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
    var core_1, router_1, ship_1, ship_service_1;
    var ShipDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ship_1_1) {
                ship_1 = ship_1_1;
            },
            function (ship_service_1_1) {
                ship_service_1 = ship_service_1_1;
            }],
        execute: function() {
            ShipDetailComponent = (function () {
                function ShipDetailComponent(_shipService, _routeParams) {
                    this._shipService = _shipService;
                    this._routeParams = _routeParams;
                }
                ShipDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._shipService.getShip(id)
                        .then(function (ship) { return _this.ship = ship; });
                };
                ShipDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', ship_1.Ship)
                ], ShipDetailComponent.prototype, "ship", void 0);
                ShipDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'ship-detail',
                        templateUrl: 'app/templates/ship-detail.component.html',
                    }), 
                    __metadata('design:paramtypes', [ship_service_1.ShipService, router_1.RouteParams])
                ], ShipDetailComponent);
                return ShipDetailComponent;
            }());
            exports_1("ShipDetailComponent", ShipDetailComponent);
        }
    }
});
//# sourceMappingURL=ship-detail.component.js.map