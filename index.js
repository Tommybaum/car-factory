class Car {
    constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year
    };
    getDescription() {
        return `
                Make: ${this.make}
                Model: ${this.model}
                Year: ${this.year}`
    }
}

class electricCar extends Car {
    constructor(make, model, year, range){
        super(make, model, year);
        this.range = range;
    }
    getDescription(){
        return `${super.getDescription()} 
                range: ${this.range} mi`
    };
};
const electricCar1 = new electricCar (`tesla`, `ModelS`, 2020, 300)
console.log(electricCar1.getDescription())