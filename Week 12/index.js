"use strict";
var Status;
(function (Status) {
    Status["Active"] = "Active";
    Status["Inactive"] = "Inactive";
    Status["Pending"] = "Pending";
})(Status || (Status = {}));
const my_car = {
    brand: "VW",
    model: "Golf",
    year: 2004,
    status: Status.Active,
};
const my_other_car = {
    brand: "Ford",
    model: "Mustang",
    year: 2020,
    status: Status.Active,
};
const me = {
    name: "Anel",
    licenseNumber: "E51-A-041",
    vehicles: [my_car],
};
// console.log(me);
function addVehicleDriver(driver, vehicle) {
    driver.vehicles.push(vehicle);
}
addVehicleDriver(me, my_other_car);
// console.log(me);
function calculateFuelCost(distance, fuelPrice, fuelEfficiency) {
    if (!fuelEfficiency) {
        fuelEfficiency = 15;
    }
    return ((fuelEfficiency * distance) / 100) * fuelPrice;
}
// console.log(calculateFuelCost(10, 2, 6));
function calculateDiscount(price, discountRate = 0.1) {
    return price * discountRate;
}
// console.log(calculateDiscount(100, 0.5));
function formatGreeting(name, salutation) {
    return name + (salutation ? salutation : "");
}
// console.log(formatGreeting("anel", "hi"));
// function calculateTravelCost(
//   distance: number,
//   fuelPrice: number = 5,
//   fuelEfficiency?: number = 15
// ): number {
//   return (distance / fuelEfficiency) * fuelPrice;
// }
class Product {
    constructor(name, price, category) {
        this.getDetails = () => {
            return (this.name + " " + this.price) + " " + this.category;
        };
        this.name = name;
        this.price = price ? price : 0;
        this.category = category ? category : "General";
    }
}
const laptop = new Product("Laptop", 1500, "Tech");
const notebook = new Product("notebook");
console.log(laptop.getDetails());
console.log(notebook.getDetails());
