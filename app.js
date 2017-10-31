'use strict';

function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;} //The maximum is inclusive and the minimum is inclusive}

const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];  
const pdx = {
    name:'pdx Airport',
    min: 23,
    max: 65,
    avg: 6.3,
    salesByHour:hourlySales
};  
const pioneer = {
    name:'PioneerPlace',
    min:3,
    max:24,
    averagecookies:1.2,
    salesPerHour:hourlySales
};

const powells = {
    name:'Powells',
    min:11,
    max:38,
    averagecookies:3.7,
    salesPerHour:hourlySales
};

const stJohns = {
    name:'StJohns',
    min:20,
    max:38,
    averagecookies:2.3,
    salesPerHour:hourlySales
};

const waterfront = {
    name:'Waterfront',
    min:2,
    max:16,
    averagecookies:4.6,
    salesPerHour:hourlySales
};

function hourlySales(){
    const salesPerHour = [];
    for (let i = 0; i < hours.length; i++){
        const hour = hours[i];
        const numCustomers = getRandomIntInclusive(this.min, this.max);
        const numCookies = numCustomers * this.avg;
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
console.log(pdx);