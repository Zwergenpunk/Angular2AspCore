"use strict";
(function (DayTime) {
    DayTime[DayTime["Always"] = "Immer"] = "Always";
    DayTime[DayTime["Day"] = "Tag"] = "Day";
    DayTime[DayTime["Night"] = "Nacht"] = "Night";
    DayTime[DayTime["Midnight"] = "Geisterstunde"] = "Midnight";
})(exports.DayTime || (exports.DayTime = {}));
var DayTime = exports.DayTime;
(function (Day) {
    Day[Day["Always"] = ""] = "Always";
    Day[Day["Monday"] = "Montag"] = "Monday";
    Day[Day["Tuesday"] = "Dienstag"] = "Tuesday";
    Day[Day["Wednseday"] = "Mittwoch"] = "Wednseday";
    Day[Day["Thursday"] = "Donnerstag"] = "Thursday";
    Day[Day["Friday"] = "Freitag"] = "Friday";
    Day[Day["Saturday"] = "Samstag"] = "Saturday";
    Day[Day["Sunday"] = "Sonntag"] = "Sunday";
    Day[Day["Winter"] = "Winter"] = "Winter";
    Day[Day["Spring"] = "Frühling"] = "Spring";
    Day[Day["Summer"] = "Sommer"] = "Summer";
    Day[Day["Autumn"] = "Herbst"] = "Autumn";
    Day[Day["MushroomEvent"] = "Pilzevent"] = "MushroomEvent";
    Day[Day["Valentine"] = "Valentienstag"] = "Valentine";
    Day[Day["NewYear"] = "Silvester/Neujahr"] = "NewYear";
    Day[Day["Birthday"] = "Geburtstagsevent"] = "Birthday";
})(exports.Day || (exports.Day = {}));
var Day = exports.Day;
(function (Type) {
    Type[Type["Fire"] = "Feuer"] = "Fire";
    Type[Type["Water"] = "Wasser"] = "Water";
    Type[Type["Earth"] = "Erde"] = "Earth";
    Type[Type["Light"] = "Licht"] = "Light";
    Type[Type["Shadow"] = "Schatten"] = "Shadow";
})(exports.Type || (exports.Type = {}));
var Type = exports.Type;
(function (Quantity) {
    Quantity[Quantity["Common"] = "verbreitet"] = "Common";
    Quantity[Quantity["Rare"] = "selten"] = "Rare";
    Quantity[Quantity["Epic"] = "epic"] = "Epic";
})(exports.Quantity || (exports.Quantity = {}));
var Quantity = exports.Quantity;
(function (SpecialRequirement) {
    SpecialRequirement[SpecialRequirement["None"] = ""] = "None";
    SpecialRequirement[SpecialRequirement["FireHabitatCleared"] = "Feuerhabitat bezwungen"] = "FireHabitatCleared";
    SpecialRequirement[SpecialRequirement["WaterHabitatCleared"] = "Wasserhabitat bezwungen"] = "WaterHabitatCleared";
    SpecialRequirement[SpecialRequirement["EarthHabitatCleared"] = "Erdhabitat bezwungen"] = "EarthHabitatCleared";
    SpecialRequirement[SpecialRequirement["LightHabitatCleared"] = "Lichthabitat bezwungen"] = "LightHabitatCleared";
    SpecialRequirement[SpecialRequirement["ShadowHabitatCleared"] = "Schattenhabitat bezwungen"] = "ShadowHabitatCleared";
    SpecialRequirement[SpecialRequirement["FourteenDungeon"] = "14. Dungeon geschafft"] = "FourteenDungeon";
    SpecialRequirement[SpecialRequirement["PetRatingTop100"] = "Ehrenhalle Pets min. Rang 100"] = "PetRatingTop100";
    SpecialRequirement[SpecialRequirement["SinglePlayerPortalCleard"] = "Einzelspieler Portal beendet"] = "SinglePlayerPortalCleard";
})(exports.SpecialRequirement || (exports.SpecialRequirement = {}));
var SpecialRequirement = exports.SpecialRequirement;
var Pet = (function () {
    function Pet() {
    }
    return Pet;
}());
exports.Pet = Pet;
//# sourceMappingURL=pet.js.map