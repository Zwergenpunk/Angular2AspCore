"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var pet_1 = require("../models/pet");
var pet_list_component_1 = require("./pet-list.component");
var OverviewComponent = (function () {
    function OverviewComponent() {
        this.test = true;
        this.types = [pet_1.Type.Earth, pet_1.Type.Fire, pet_1.Type.Light, pet_1.Type.Shadow, pet_1.Type.Water];
    }
    OverviewComponent.prototype.selectType = function (type) {
        this.selectedType = type;
    };
    OverviewComponent.prototype.resetType = function () {
        this.selectType(null);
    };
    OverviewComponent = __decorate([
        core_1.Component({
            selector: "overview",
            templateUrl: "app/overview/overview.component.html",
            directives: [pet_list_component_1.PetListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], OverviewComponent);
    return OverviewComponent;
}());
exports.OverviewComponent = OverviewComponent;
//# sourceMappingURL=overview.component.js.map