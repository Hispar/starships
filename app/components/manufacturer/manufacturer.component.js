System.register(['angular2/core', '../../models/manufacturer'], function(exports_1, context_1) {
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
    var core_1, manufacturer_1;
    var ManufacturerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (manufacturer_1_1) {
                manufacturer_1 = manufacturer_1_1;
            }],
        execute: function() {
            ManufacturerComponent = (function () {
                function ManufacturerComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', manufacturer_1.Manufacturer)
                ], ManufacturerComponent.prototype, "manufacturer", void 0);
                ManufacturerComponent = __decorate([
                    core_1.Component({
                        selector: 'manufacturer',
                        templateUrl: 'app/templates/manufacturer.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], ManufacturerComponent);
                return ManufacturerComponent;
            }());
            exports_1("ManufacturerComponent", ManufacturerComponent);
        }
    }
});
//# sourceMappingURL=manufacturer.component.js.map