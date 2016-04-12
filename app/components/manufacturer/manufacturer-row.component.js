System.register(['angular2/core', './manufacturer.component'], function(exports_1, context_1) {
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
    var core_1, manufacturer_component_1;
    var ManufacturerRowComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (manufacturer_component_1_1) {
                manufacturer_component_1 = manufacturer_component_1_1;
            }],
        execute: function() {
            ManufacturerRowComponent = (function () {
                function ManufacturerRowComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ManufacturerRowComponent.prototype, "row", void 0);
                ManufacturerRowComponent = __decorate([
                    core_1.Component({
                        selector: 'manufacturer-row',
                        template: "<manufacturer *ngFor=\"#manufacturer of row\" [manufacturer]=\"manufacturer\"></manufacturer>",
                        directives: [manufacturer_component_1.ManufacturerComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ManufacturerRowComponent);
                return ManufacturerRowComponent;
            }());
            exports_1("ManufacturerRowComponent", ManufacturerRowComponent);
        }
    }
});
//# sourceMappingURL=manufacturer-row.component.js.map