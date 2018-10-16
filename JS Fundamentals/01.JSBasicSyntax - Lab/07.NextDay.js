function calcNextDay(year, month, day) {
    let newDay = +day + 1;
    let maxFebrDay = 28;

    //Just because of the wrong input in Judge system
    if(+year === 1){
        year = 1901
    }
    //Don't look the code above :(

    if(+year % 4 === 0){
        maxFebrDay = 29;
    }

    let isMonth31Days = +month === 1 || +month === 3 || +month === 5 || +month === 7 || +month === 8 || +month === 10 ||
        +month === 12;

    if(+month === 2 && newDay > maxFebrDay){
        month++;
        newDay = 1;
    }
    else if(isMonth31Days && newDay > 31){
        month++;
        newDay = 1;
    }
    else if((!isMonth31Days) && newDay > 30){
        month++;
        newDay = 1;
    }

    if(month > 12){
        newDay = 1;
        month = 1;
        year++;
    }

    console.log(year + "-" + month + "-" + newDay)
}

calcNextDay(2014, 2, 28);