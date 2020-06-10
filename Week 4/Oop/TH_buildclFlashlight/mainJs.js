function Battery(energy) {
    this.energy = energy;
    this.setEnergy = function (energy) {
        this.energy = energy;
        // return energy;
    };
    this.getEnergy = function () {
        return this.energy
    };
    this.decreaseEnergy = function () {
        if (this.energy > 0){
            this.energy --;
        }
    }
};

function FlashLamp(battery) {
    this.battery = battery;
    this.setBattery= function (battery){
        this.battery = battery;
        // return battery;
    };
    this.getBatteryInfo = function (){
        return this.battery.getEnergy();
    };
    this.light = function(){
        if(this.status){
            alert("The light is turned on");
        } else {
            alert("The light is turned off");
        }
    };
    this.turnOn = function() {
        this.status = true;
        this.battery.decreaseEnergy()
    };
    this.turnOff = function() {
        this.status = false;
    }
}

let battery = new Battery();
battery.setEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.light();

document.write("Turn on<br/>")
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

document.write("Turn off<br/>")
flashLamp.turnOff();
flashLamp.light();