'use strict';

function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}; //The maximum is inclusive and the minimum is inclusive}

//store hours   
const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function render (){}
//store object literals
const pdx = {
    name:'pdx Airport',
    min: 23,
    max: 65,
    averageCookies: 6.3,
    cookiesSold:hourlySales,
    salesPerHour:[],
    render:render
};
const pioneer = {
    name:'PioneerPlace',
    min:3,
    max:24,
    averageCookies:1.2,
    cookiesSold:hourlySales,
    salesPerHour:[],
    render:render
};

const powells = {
    name:'Powells',
    min:11,
    max:38,
    averageCookies:3.7,
    cookiesSold:hourlySales,
    salesPerHour:[],
    render:render
};
const stJohns = {
    name:'StJohns',
    min:20,
    max:38,
    averageCookies:2.3,
    cookiesSold:hourlySales,
    salesPerHour:[],
    render:render
};
const waterfront = {
    name:'Waterfront',
    min:2,
    max:16,
    averageCookies:4.6,
    cookiesSold:hourlySales,
    salesPerHour:[],
    render:render
};

function hourlySales(){
    const salesPerHour = [];
    for (let i = 0; i < hours.length; i++){
        const hour = hours[i];
        const numCustomers = getRandomIntInclusive(this.min, this.max);
        const numCookies = Math.floor(numCustomers * this.averageCookies);
        const oneHour = {
            hour: hour,
            cookiesSold: numCookies
        };
        salesPerHour.push(oneHour);
    }
    this.salesPerHour = salesPerHour;
}
pdx.cookiesSold();
pioneer.cookiesSold();
powells.cookiesSold();
stJohns.cookiesSold();
waterfront.cookiesSold();
console.log(pdx);






