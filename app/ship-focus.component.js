System.register(['angular2/core', './ship-focus.service.ts'], function(exports_1, context_1) {
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
    var core_1, ship_focus_service_ts_1;
    var ShipFocusComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ship_focus_service_ts_1_1) {
                ship_focus_service_ts_1 = ship_focus_service_ts_1_1;
            }],
        execute: function() {
            ShipFocusComponent = (function () {
                function ShipFocusComponent(_shipfocusService) {
                    this._shipfocusService = _shipfocusService;
                }
                ShipFocusComponent.prototype.getShipFocus = function (id) {
                    var _this = this;
                    this._shipfocusService.getShipFocus(id)
                        .then(function (shipfocus) { return _this.shipfocus = shipfocus; });
                };
                ShipFocusComponent = __decorate([
                    core_1.Component({
                        selector: 'shipocus',
                        template: '<label>focus: </label>{{getShipFocus(focus_id)}}'
                    }), 
                    __metadata('design:paramtypes', [ship_focus_service_ts_1.ShipFocusService])
                ], ShipFocusComponent);
                return ShipFocusComponent;
            }());
            exports_1("ShipFocusComponent", ShipFocusComponent);
        }
    }
});
//# sourceMappingURL=ship-focus.component.js.map