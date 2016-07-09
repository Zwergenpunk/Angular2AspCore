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
var pet_list_1 = require("../data/pet-list");
var PetListComponent = (function () {
    function PetListComponent() {
        this.petList = pet_list_1.petList;
    }
    PetListComponent.prototype.ngOnChanges = function (changes) {
        console.debug(changes.toString());
        this.filter();
    };
    PetListComponent.prototype.filter = function () {
        var _this = this;
        if (this.type) {
            this.petList = pet_list_1.petList.filter(function (pet) { return pet.type === _this.type; });
        }
        else {
            this.petList = pet_list_1.petList;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PetListComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PetListComponent.prototype, "showOnlyPossibleForNow", void 0);
    PetListComponent = __decorate([
        core_1.Component({
            selector: "pet-list",
            templateUrl: "app/overview/pet-list.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], PetListComponent);
    return PetListComponent;
}());
exports.PetListComponent = PetListComponent;
//# sourceMappingURL=pet-list.component.js.map