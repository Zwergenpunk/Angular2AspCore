import {Component, Input, OnChanges, SimpleChange} from "@angular/core";
import {Pet, Type}  from "../models/pet";
import {petList as PetList}  from "../data/pet-list";

@Component({
    selector: "pet-list",
    templateUrl: "app/overview/pet-list.component.html"
})
export class PetListComponent implements OnChanges {
    @Input() type: Type;
    @Input() showOnlyPossibleForNow: boolean;
    petList = PetList;

    ngOnChanges(changes: { [change: string]: SimpleChange }) {
        console.debug(changes.toString());
        this.filter();
    }

    filter() {
        if (this.type) {
            this.petList = PetList.filter(pet => pet.type === this.type);
        } else {
            this.petList = PetList;
        }
    }
}