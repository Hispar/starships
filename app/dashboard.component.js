System.register(['angular2/core', './services/ship.service', './row.component'], function(exports_1, context_1) {
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
    var core_1, ship_service_1, row_component_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ship_service_1_1) {
                ship_service_1 = ship_service_1_1;
            },
            function (row_component_1_1) {
                row_component_1 = row_component_1_1;
            }],
        execute: function() {
            //import {SearchPipe} from "./pipes/search.pipe";
            DashboardComponent = (function () {
                function DashboardComponent(_shipService) {
                    this._shipService = _shipService;
                    this.ships = [];
                    this.elements = 3;
                    this.title = 'Top Ships';
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var that = this;
                    this._shipService.getShips()
                        .then(function (ships) {
                        for (var j = 0; (j * that.elements) < ships.length; j++) {
                            that.ships[j] = ships.slice(that.elements * j, that.elements * j + that.elements);
                        }
                    });
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        //pipes: [SearchPipe],
                        templateUrl: 'app/templates/dashboard.component.html',
                        directives: [row_component_1.RowComponent]
                    }), 
                    __metadata('design:paramtypes', [ship_service_1.ShipService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map