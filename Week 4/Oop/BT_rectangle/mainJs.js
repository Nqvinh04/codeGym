function Date(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function () {
        return this.day;
    };
    this.getMonth = function () {
        return this.month;
    };
    this.getYear = function () {
        return this.year;
    };
    this.setDay = function (day) {
        this.day = day;
        return day;
    };
    this.setMonth = function (month){
        this.month = month;
        return month;
    }
    this.setYear = function (year){
        this.year = year;
        return year;
    };
    // this.setDate = function (day, month, year) {
    //     this.day = day;
    //     this.month = month;
    //     this.year = year;
    // };
    // this.toString = function () {
    //     return this.day + "/" + this.month + "/" + this.year;
    // };
};

let date = new Date(2,2, 2007);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(day + "/" + month + "/" + year);

day = date.setDay(10);
month = date.setMonth(10);
year = date.setYear(2019);
alert(day + "/" + month + "/" + year);

