﻿import {Pet, Type, Quantity, DayTime, Day, SpecialRequirement} from "../models/pet"

export var petList: Pet[] = [
    //Fire Pets
    { number: 1, name: "Ratzfratz", type: Type.Fire, quantity: Quantity.Common, place: "Nevermoor", dayTime: DayTime.Day, day: Day.Always, specialRequirement: SpecialRequirement.None },
    { number: 2, name: "Gullps", type: Type.Fire, quantity: Quantity.Common, place: "Insel Scarpa", dayTime: DayTime.Night, day: Day.Always, specialRequirement: SpecialRequirement.None },
    { number: 3, name: "Pyrophibus", type: Type.Fire, quantity: Quantity.Common, place: "Schwarzwassersümpfe", dayTime: DayTime.Night, day: Day.Always, specialRequirement: SpecialRequirement.None },
    { number: 4, name: "Loderfleuch", type: Type.Fire, quantity: Quantity.Common, place: "Fangzahngebirge", dayTime: DayTime.Day, day: Day.Always, specialRequirement: SpecialRequirement.None },
    { number: 5, name: "Tektospei", type: Type.Fire, quantity: Quantity.Common, place: "Schweinöde", dayTime: DayTime.Night, day: Day.Tuesday, specialRequirement: SpecialRequirement.None },
    { number: 6, name: "Pyroplant", type: Type.Fire, quantity: Quantity.Common, place: "Gammelforst", dayTime: DayTime.Night, day: Day.Autumn, specialRequirement: SpecialRequirement.None },
    { number: 7, name: "Kokofö", type: Type.Fire, quantity: Quantity.Common, place: "Spalta-Canyon", dayTime: DayTime.Day, day: Day.Monday, specialRequirement: SpecialRequirement.None },
    { number: 8, name: "Jappaelo", type: Type.Fire, quantity: Quantity.Common, place: "Sonnenbrandwüste", dayTime: DayTime.Day, day: Day.Spring, specialRequirement: SpecialRequirement.None },
    { number: 9, name: "Zischbum", type: Type.Fire, quantity: Quantity.Common, place: "Ebenen von Oz’Korr", dayTime: DayTime.Day, day: Day.Winter, specialRequirement: SpecialRequirement.None },
    { number: 10, name: "Tikkon", type: Type.Fire, quantity: Quantity.Common, place: "Wucherdschungel", dayTime: DayTime.Night, day: Day.Wednseday, specialRequirement: SpecialRequirement.None },
    { number: 11, name: "Fachan", type: Type.Fire, quantity: Quantity.Common, place: "Stolpersteppe", dayTime: DayTime.Day, day: Day.Thursday, specialRequirement: SpecialRequirement.None },
    { number: 12, name: "Feugel", type: Type.Fire, quantity: Quantity.Common, place: "Schwarzwald", dayTime: DayTime.Day, day: Day.Summer, specialRequirement: SpecialRequirement.None },
    { number: 13, name: "Infernox", type: Type.Fire, quantity: Quantity.Common, place: "Magmaron", dayTime: DayTime.Day, day: Day.Friday, specialRequirement: SpecialRequirement.None },
    { number: 14, name: "Sumsum", type: Type.Fire, quantity: Quantity.Common, place: "Immernachtwald", dayTime: DayTime.Night, day: Day.Saturday, specialRequirement: SpecialRequirement.None },
    { number: 15, name: "Dragopyr", type: Type.Fire, quantity: Quantity.Rare, place: "Shakes Store", dayTime: DayTime.Always, day: Day.Always, specialRequirement: SpecialRequirement.None },
    { number: 16, name: "Mantiflam", type: Type.Fire, quantity: Quantity.Rare, place: "Maerwynn", dayTime: DayTime.Always, day: Day.MushroomEvent, specialRequirement: SpecialRequirement.None },
    { number: 17, name: "Flossnessel", type: Type.Fire, quantity: Quantity.Rare, place: "Insel Scarpa", dayTime: DayTime.Always, day: Day.Valentine, specialRequirement: SpecialRequirement.None },
    { number: 18, name: "Rocki", type: Type.Fire, quantity: Quantity.Rare, place: "Immernachtwald", dayTime: DayTime.Always, day: Day.NewYear, specialRequirement: SpecialRequirement.None },
    { number: 19, name: "Zyngel", type: Type.Fire, quantity: Quantity.Epic, place: "", dayTime: DayTime.Always, day: Day.Always, specialRequirement: SpecialRequirement.SinglePlayerPortalCleard },
    { number: 20, name: "Devastor", type: Type.Fire, quantity: Quantity.Epic, place: "", dayTime: DayTime.Always, day: Day.Always, specialRequirement: SpecialRequirement.FireHabitatCleared },
    //Water Pets
    { number: 1, name: "Goldi", type: Type.Water, quantity: Quantity.Common, place: "Magmaron", dayTime: DayTime.Day, day: Day.Always, specialRequirement: SpecialRequirement.None },
    { number: 2, name: "Orkal", type: Type.Water, quantity: Quantity.Common, place: "Totenkopfinsel", dayTime: DayTime.Day, day: Day.Always, specialRequirement: SpecialRequirement.None },
    { number: 3, name: "Okodil", type: Type.Water, quantity: Quantity.Common, place: "Immernachtwald", dayTime: DayTime.Night, day: Day.Always, specialRequirement: SpecialRequirement.None },
    { number: 4, name: "Püng", type: Type.Water, quantity: Quantity.Common, place: "Nordingen", dayTime: DayTime.Day, day: Day.Always, specialRequirement: SpecialRequirement.None },
    { number: 5, name: "Walruphin", type: Type.Water, quantity: Quantity.Common, place: "Rottenden Lande", dayTime: DayTime.Day, day: Day.Monday, specialRequirement: SpecialRequirement.None },
    { number: 6, name: "Schnögg", type: Type.Water, quantity: Quantity.Common, place: "Fangzahngebirge", dayTime: DayTime.Night, day: Day.Tuesday, specialRequirement: SpecialRequirement.None },
    { number: 7, name: "Aguaphant", type: Type.Water, quantity: Quantity.Common, place: "Spalta-Canyon", dayTime: DayTime.Day, day: Day.Wednseday, specialRequirement: SpecialRequirement.None },
    { number: 8, name: "Naar", type: Type.Water, quantity: Quantity.Common, place: "Insel Scarpa", dayTime: DayTime.Day, day: Day.Winter, specialRequirement: SpecialRequirement.None },
    { number: 9, name: "Tinntak", type: Type.Water, quantity: Quantity.Common, place: "Gammelforst", dayTime: DayTime.Day, day: Day.Thursday, specialRequirement: SpecialRequirement.None },
    { number: 10, name: "Ewilgryn", type: Type.Water, quantity: Quantity.Common, place: "Totenkopfinsel", dayTime: DayTime.Day, day: Day.Friday, specialRequirement: SpecialRequirement.None },
    { number: 11, name: "Separd", type: Type.Water, quantity: Quantity.Common, place: "Schwarzwassersümpfe", dayTime: DayTime.Day, day: Day.Saturday, specialRequirement: SpecialRequirement.None },
    { number: 12, name: "Mussli", type: Type.Water, quantity: Quantity.Common, place: "Erogenion", dayTime: DayTime.Night, day: Day.Autumn, specialRequirement: SpecialRequirement.None },
    { number: 13, name: "Mingho", type: Type.Water, quantity: Quantity.Common, place: "Wucherdschungel", dayTime: DayTime.Day, day: Day.Summer, specialRequirement: SpecialRequirement.None },
    { number: 14, name: "Untabis", type: Type.Water, quantity: Quantity.Common, place: "Schattenfelsgebirge", dayTime: DayTime.Night, day: Day.Always, specialRequirement: SpecialRequirement.None },
    { number: 15, name: "Nixoid", type: Type.Water, quantity: Quantity.Rare, place: "Totenkopfinsel", dayTime: DayTime.Always, day: Day.Always, specialRequirement: SpecialRequirement.PetRatingTop100 },
    { number: 16, name: "Fluoch", type: Type.Water, quantity: Quantity.Rare, place: "Fidget Store", dayTime: DayTime.Always, day: Day.Always, specialRequirement: SpecialRequirement.None },
    { number: 17, name: "Patörtel", type: Type.Water, quantity: Quantity.Rare, place: "Totenkopfinsel", dayTime: DayTime.Always, day: Day.Birthday, specialRequirement: SpecialRequirement.None },
    { number: 18, name: "Unnda", type: Type.Water, quantity: Quantity.Rare, place: "Arkane Toilette", dayTime: DayTime.Always, day: Day.Always, specialRequirement: SpecialRequirement.None },
    { number: 19, name: "Tritostach", type: Type.Water, quantity: Quantity.Epic, place: "", dayTime: DayTime.Always, day: Day.Always, specialRequirement: SpecialRequirement.FourteenDungeon },
    { number: 20, name: "Hydrospir", type: Type.Water, quantity: Quantity.Epic, place: "", dayTime: DayTime.Always, day: Day.Always, specialRequirement: SpecialRequirement.WaterHabitatCleared }
];