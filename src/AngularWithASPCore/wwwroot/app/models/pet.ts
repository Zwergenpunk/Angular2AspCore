export enum DayTime {
    Always = "Immer" as any,
    Day = "Tag" as any,
    Night = "Nacht" as any,
    Midnight = "Geisterstunde" as any
}
export enum Day {
    Always = "" as any,
    Monday = "Montag" as any,
    Tuesday = "Dienstag" as any,
    Wednseday = "Mittwoch" as any,
    Thursday = "Donnerstag" as any,
    Friday = "Freitag" as any,
    Saturday = "Samstag" as any,
    Sunday = "Sonntag" as any,
    Winter = "Winter" as any,
    Spring = "Frühling" as any,
    Summer = "Sommer" as any,
    Autumn = "Herbst" as any,
    MushroomEvent = "Pilzevent" as any,
    Valentine = "Valentienstag" as any,
    NewYear = "Silvester/Neujahr" as any,
    Birthday = "Geburtstagsevent" as any
}

export enum Type {
    Fire = <any>"Feuer",
    Water = <any>"Wasser",
    Earth = <any>"Erde",
    Light = <any>"Licht",
    Shadow = <any>"Schatten"
}

export enum Quantity {
    Common = "verbreitet" as any,
    Rare = "selten" as any,
    Epic = "epic" as any
}

export enum SpecialRequirement {
    None = "" as any,
    FireHabitatCleared = "Feuerhabitat bezwungen" as any,
    WaterHabitatCleared = "Wasserhabitat bezwungen" as any,
    EarthHabitatCleared = "Erdhabitat bezwungen" as any,
    LightHabitatCleared = "Lichthabitat bezwungen" as any,
    ShadowHabitatCleared = "Schattenhabitat bezwungen" as any,
    FourteenDungeon = "14. Dungeon geschafft" as any,
    PetRatingTop100 = "Ehrenhalle Pets min. Rang 100" as any,
    SinglePlayerPortalCleard = "Einzelspieler Portal beendet" as any
}

type Place = "" | "Nevermoor" | "Insel Scarpa" | "Schwarzwassersümpfe" | "Fangzahngebirge" | "Schweinöde" | "Gammelforst" | "Spalta-Canyon" | "Sonnenbrandwüste" | "Ebenen von Oz’Korr" | "Wucherdschungel" |
    "Stolpersteppe" | "Schwarzwald" | "Magmaron" | "Immernachtwald" | "Shakes Store" | "Maerwynn" | "Totenkopfinsel" | "Nordingen" | "Rottenden Lande" | "Erogenion" | "Schattenfelsgebirge" |
    "Fidget Store" | "Arkane Toilette";

export class Pet {
    number: number;
    name: string;
    place: Place;
    dayTime: DayTime;
    day: Day;
    type: Type;
    quantity: Quantity;
    specialRequirement: SpecialRequirement;
}