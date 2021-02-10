prompt("make:")
prompt("model:")
prompt("color:")
prompt("year")
prompt("currency in price of car")
};
document.getElementById("pricetag")
    .innerHTML = dreamCar.price;

document.getElementById("model:")
    .innerHTML = dreamCar.year;

document.getElementById("body")
    .style.backgroundColor = dreamCar.color;

document.getElementById("body")
    .innerHTML = dreamCar.make + " " + dreamCar.model;