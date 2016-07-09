"use strict";
var pet_1 = require("../models/pet");
exports.petList = [
    //Fire Pets
    { number: 1, name: "Ratzfratz", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Common, place: "Nevermoor", dayTime: pet_1.DayTime.Day, day: pet_1.Day.Always, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 2, name: "Gullps", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Common, place: "Insel Scarpa", dayTime: pet_1.DayTime.Night, day: pet_1.Day.Always, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 3, name: "Pyrophibus", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Common, place: "Schwarzwassersümpfe", dayTime: pet_1.DayTime.Night, day: pet_1.Day.Always, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 4, name: "Loderfleuch", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Common, place: "Fangzahngebirge", dayTime: pet_1.DayTime.Day, day: pet_1.Day.Always, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 5, name: "Tektospei", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Common, place: "Schweinöde", dayTime: pet_1.DayTime.Night, day: pet_1.Day.Tuesday, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 6, name: "Pyroplant", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Common, place: "Gammelforst", dayTime: pet_1.DayTime.Night, day: pet_1.Day.Autumn, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 7, name: "Kokofö", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Common, place: "Spalta-Canyon", dayTime: pet_1.DayTime.Day, day: pet_1.Day.Monday, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 8, name: "Jappaelo", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Common, place: "Sonnenbrandwüste", dayTime: pet_1.DayTime.Day, day: pet_1.Day.Spring, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 9, name: "Zischbum", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Common, place: "Ebenen von Oz’Korr", dayTime: pet_1.DayTime.Day, day: pet_1.Day.Winter, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 10, name: "Tikkon", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Common, place: "Wucherdschungel", dayTime: pet_1.DayTime.Night, day: pet_1.Day.Wednseday, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 11, name: "Fachan", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Common, place: "Stolpersteppe", dayTime: pet_1.DayTime.Day, day: pet_1.Day.Thursday, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 12, name: "Feugel", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Common, place: "Schwarzwald", dayTime: pet_1.DayTime.Day, day: pet_1.Day.Summer, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 13, name: "Infernox", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Common, place: "Magmaron", dayTime: pet_1.DayTime.Day, day: pet_1.Day.Friday, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 14, name: "Sumsum", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Common, place: "Immernachtwald", dayTime: pet_1.DayTime.Night, day: pet_1.Day.Saturday, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 15, name: "Dragopyr", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Rare, place: "Shakes Store", dayTime: pet_1.DayTime.Always, day: pet_1.Day.Always, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 16, name: "Mantiflam", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Rare, place: "Maerwynn", dayTime: pet_1.DayTime.Always, day: pet_1.Day.MushroomEvent, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 17, name: "Flossnessel", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Rare, place: "Insel Scarpa", dayTime: pet_1.DayTime.Always, day: pet_1.Day.Valentine, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 18, name: "Rocki", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Rare, place: "Immernachtwald", dayTime: pet_1.DayTime.Always, day: pet_1.Day.NewYear, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 19, name: "Zyngel", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Epic, place: "", dayTime: pet_1.DayTime.Always, day: pet_1.Day.Always, specialRequirement: pet_1.SpecialRequirement.SinglePlayerPortalCleard },
    { number: 20, name: "Devastor", type: pet_1.Type.Fire, quantity: pet_1.Quantity.Epic, place: "", dayTime: pet_1.DayTime.Always, day: pet_1.Day.Always, specialRequirement: pet_1.SpecialRequirement.FireHabitatCleared },
    //Water Pets
    { number: 1, name: "Goldi", type: pet_1.Type.Water, quantity: pet_1.Quantity.Common, place: "Magmaron", dayTime: pet_1.DayTime.Day, day: pet_1.Day.Always, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 2, name: "Orkal", type: pet_1.Type.Water, quantity: pet_1.Quantity.Common, place: "Totenkopfinsel", dayTime: pet_1.DayTime.Day, day: pet_1.Day.Always, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 3, name: "Okodil", type: pet_1.Type.Water, quantity: pet_1.Quantity.Common, place: "Immernachtwald", dayTime: pet_1.DayTime.Night, day: pet_1.Day.Always, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 4, name: "Püng", type: pet_1.Type.Water, quantity: pet_1.Quantity.Common, place: "Nordingen", dayTime: pet_1.DayTime.Day, day: pet_1.Day.Always, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 5, name: "Walruphin", type: pet_1.Type.Water, quantity: pet_1.Quantity.Common, place: "Rottenden Lande", dayTime: pet_1.DayTime.Day, day: pet_1.Day.Monday, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 6, name: "Schnögg", type: pet_1.Type.Water, quantity: pet_1.Quantity.Common, place: "Fangzahngebirge", dayTime: pet_1.DayTime.Night, day: pet_1.Day.Tuesday, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 7, name: "Aguaphant", type: pet_1.Type.Water, quantity: pet_1.Quantity.Common, place: "Spalta-Canyon", dayTime: pet_1.DayTime.Day, day: pet_1.Day.Wednseday, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 8, name: "Naar", type: pet_1.Type.Water, quantity: pet_1.Quantity.Common, place: "Insel Scarpa", dayTime: pet_1.DayTime.Day, day: pet_1.Day.Winter, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 9, name: "Tinntak", type: pet_1.Type.Water, quantity: pet_1.Quantity.Common, place: "Gammelforst", dayTime: pet_1.DayTime.Day, day: pet_1.Day.Thursday, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 10, name: "Ewilgryn", type: pet_1.Type.Water, quantity: pet_1.Quantity.Common, place: "Totenkopfinsel", dayTime: pet_1.DayTime.Day, day: pet_1.Day.Friday, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 11, name: "Separd", type: pet_1.Type.Water, quantity: pet_1.Quantity.Common, place: "Schwarzwassersümpfe", dayTime: pet_1.DayTime.Day, day: pet_1.Day.Saturday, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 12, name: "Mussli", type: pet_1.Type.Water, quantity: pet_1.Quantity.Common, place: "Erogenion", dayTime: pet_1.DayTime.Night, day: pet_1.Day.Autumn, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 13, name: "Mingho", type: pet_1.Type.Water, quantity: pet_1.Quantity.Common, place: "Wucherdschungel", dayTime: pet_1.DayTime.Day, day: pet_1.Day.Summer, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 14, name: "Untabis", type: pet_1.Type.Water, quantity: pet_1.Quantity.Common, place: "Schattenfelsgebirge", dayTime: pet_1.DayTime.Night, day: pet_1.Day.Always, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 15, name: "Nixoid", type: pet_1.Type.Water, quantity: pet_1.Quantity.Rare, place: "Totenkopfinsel", dayTime: pet_1.DayTime.Always, day: pet_1.Day.Always, specialRequirement: pet_1.SpecialRequirement.PetRatingTop100 },
    { number: 16, name: "Fluoch", type: pet_1.Type.Water, quantity: pet_1.Quantity.Rare, place: "Fidget Store", dayTime: pet_1.DayTime.Always, day: pet_1.Day.Always, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 17, name: "Patörtel", type: pet_1.Type.Water, quantity: pet_1.Quantity.Rare, place: "Totenkopfinsel", dayTime: pet_1.DayTime.Always, day: pet_1.Day.Birthday, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 18, name: "Unnda", type: pet_1.Type.Water, quantity: pet_1.Quantity.Rare, place: "Arkane Toilette", dayTime: pet_1.DayTime.Always, day: pet_1.Day.Always, specialRequirement: pet_1.SpecialRequirement.None },
    { number: 19, name: "Tritostach", type: pet_1.Type.Water, quantity: pet_1.Quantity.Epic, place: "", dayTime: pet_1.DayTime.Always, day: pet_1.Day.Always, specialRequirement: pet_1.SpecialRequirement.FourteenDungeon },
    { number: 20, name: "Hydrospir", type: pet_1.Type.Water, quantity: pet_1.Quantity.Epic, place: "", dayTime: pet_1.DayTime.Always, day: pet_1.Day.Always, specialRequirement: pet_1.SpecialRequirement.WaterHabitatCleared }
];
//# sourceMappingURL=pet-list.js.map