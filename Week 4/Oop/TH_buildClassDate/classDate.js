function Date(day,month,year) {
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
    this.setDay = function (new_day) {
        this.day = new_day;
    };
    this.setMonth = function (new_month) {
        this.month = new_month;
    };
    this.setYear = function (new_year) {
        this.year = new_year;
    };
    this.setDate = function (day,month,year) {
         this.day = day;
         this.month = month;
         this.year = year;
    }
    this.toString = function () {
        return this.day + "/" + this.month + "/" + this.year;
    }

};
let date = new Date(2,2,2007);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(day + "/" + month + "/" + year);
date.setDate(10,10,2019)
alert(date.toString());