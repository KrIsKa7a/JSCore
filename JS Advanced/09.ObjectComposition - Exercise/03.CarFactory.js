function assembleCar(specs) {
    let car = {};

    car.model = specs.model;

    let carEngine = {};

    if (specs.power <= 90) {
        carEngine.power = 90;
        carEngine.volume = 1800;
    } else if (specs.power <= 120) {
        carEngine.power = 120;
        carEngine.volume = 2400;
    } else {
        carEngine.power = 200;
        carEngine.volume = 3500;
    }

    car.engine = carEngine;
    car.carriage = {
        type: specs.carriage,
        color: specs.color
    };

    let wheelSize = specs.wheelsize;

    if (wheelSize % 2 === 0) {
        wheelSize -= 1;
    }

    car.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

    return car;
}

console.log(assembleCar({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
));

console.log(assembleCar({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
));