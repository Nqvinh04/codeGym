let Battery = function () {
    this.setEnergy = function (energy) {
        this.energy = energy
    }
    this.getEnergy = function () {
        return this.energy
    }
    this.descreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}

let FlashLamp = function () {
    this.setBattery = function (battery) {
        this.battery = battery;


    }
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    }
    this.light = function () {
        if (this.status) {
            alert('The light is turned on');
        } else {
            alert('The light is turned off');
        }
    }
    this.turnOn = function () {
        this.status = true;
        this.battery.descreaseEnergy();
    }
    this.turnOff = function () {
        this.status = false;
    }
}



let iPhoneBattery = new Battery();
iPhoneBattery.setEnergy(10);

console.log(iPhoneBattery.getEnergy());
let iPhoneLamp = new FlashLamp();

iPhoneLamp.setBattery(iPhoneBattery);
console.log(iPhoneLamp.getBatteryInfo());
iPhoneLamp.turnOn();
iPhoneLamp.light();
console.log(iPhoneLamp.getBatteryInfo());
iPhoneLamp.turnOff();
iPhoneLamp.light();
console.log(iPhoneLamp.getBatteryInfo());