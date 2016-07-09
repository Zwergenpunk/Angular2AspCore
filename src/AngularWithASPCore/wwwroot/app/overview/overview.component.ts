import {Component, OnInit} from "@angular/core";
import {Pet, Type}  from "../models/pet";
import {PetListComponent}  from "./pet-list.component";

@Component({
    selector: "overview",
    templateUrl: "app/overview/overview.component.html",
    directives: [PetListComponent]
})
export class OverviewComponent {
    test = true;
    types: Type[] = [Type.Earth, Type.Fire, Type.Light, Type.Shadow, Type.Water];
    selectedType: Type;
    showOnlyPossibleForNow: boolean;

    selectType(type: Type) {
        this.selectedType = type;
    }

    resetType() {
        this.selectType(null);
    }

}