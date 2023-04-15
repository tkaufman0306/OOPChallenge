class Vehicle {
    constructor(a, b, c) {
        console.log('INSIDE VEHICLE CONSTRUCTOR');
        this.a = a ;
        this.b = b;
        this.c = c;
    }
        honk() {
            return "Beep";
        }
        toString() {
            return `The vehicle is a ${this.a} ${this.b} from ${this.c} .`;
            
        }
    }
    const myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
    
    myFirstVehicle.toString();



class Car extends Vehicle {
    constructor(a, b, c) {
        console.log('INSIDE CAR CONSTRUCTOR');
        super(a, b, c);
        this.numWheels = 4;
    }
}
const myFirstCar = new Car("Toyota", "Corolla", 2005);

class Motorcycle extends Vehicle {
    constructor(a, b, c) {
        console.log('INSIDE MOTORCYCLE CONSTRUCTOR');
        super(a, b, c);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!";
    }
}
const myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles ar allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
        }
    }
