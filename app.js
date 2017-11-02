'use strict';

function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}; //The maximum is inclusive and the minimum is inclusive}

//store hours   
const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//constructor function for object literals
const pdx = new Store('pdx Airport',23,65,6.3);
const pioneer = new Store('Pioneer Place',3,24,1.2);
const powells = new Store('Powell\s',11,38,3.7);
const stJohns = new Store('St John\s',20,38,2.3);
const waterfront = new Store('Waterfront',2,16,4.6);

function Store(name, min, max, averageCookies){
    this.name = name;
    this.min = min;
    this.max = max;
    this.ave = averageCookies;
};
//calls protoype of store and hourly sales of cookies
Store.prototype.hourlySales=function(){
    const salesPerHour = [];
    for (let i = 0; i < hours.length; i++){
        const hour = hours[i];
        const numCustomers = getRandomIntInclusive(this.min, this.max);
        const numCookies = Math.floor(numCustomers * this.ave);
        console.log(numCookies);
        const oneHour = {
            hour: hour,
            cookiesSold: numCookies
        };
        salesPerHour.push(oneHour);
    }
    this.salesPerHour = salesPerHour;
    
}

pdx.hourlySales();
pioneer.hourlySales();
powells.hourlySales();
stJohns.hourlySales();
waterfront.hourlySales();

//Store.prototype.build = function (){
   // const Store = document.getElementById