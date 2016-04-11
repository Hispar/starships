System.register(['angular2/core', 'angular2/router', './models/ship'], function(exports_1, context_1) {
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
    var core_1, router_1, ship_1;
    var ShipComponent;
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
            }],
        execute: function() {
            ShipComponent = (function () {
                function ShipComponent(_router) {
                    this._router = _router;
                }
                ShipComponent.prototype.gotoDetail = function (ship) {
                    var link = ['ShipDetail', { id: ship.id }];
                    this._router.navigate(link);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', ship_1.Ship)
                ], ShipComponent.prototype, "ship", void 0);
                ShipComponent = __decorate([
                    core_1.Component({
                        selector: 'ship',
                        templateUrl: 'app/templates/ship.component.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ShipComponent);
                return ShipComponent;
            }());
            exports_1("ShipComponent", ShipComponent);
        }
    }
});
//# sourceMappingURL=ship.component.js.map