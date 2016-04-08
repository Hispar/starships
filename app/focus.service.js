System.register(['angular2/core', './mock-focus'], function(exports_1, context_1) {
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
    var core_1, mock_focus_1;
    var FocusService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_focus_1_1) {
                mock_focus_1 = mock_focus_1_1;
            }],
        execute: function() {
            FocusService = (function () {
                function FocusService() {
                }
                FocusService.prototype.getFocus = function (id) {
                    return Promise.resolve(mock_focus_1.FOCUSES).then(function (focuses) { return focuses.filter(function (focus) { return focus.id === id; })[0]; });
                };
                FocusService.prototype.getFocuses = function () {
                    return Promise.resolve(mock_focus_1.FOCUSES);
                };
                FocusService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FocusService);
                return FocusService;
            }());
            exports_1("FocusService", FocusService);
        }
    }
});
//# sourceMappingURL=focus.service.js.map