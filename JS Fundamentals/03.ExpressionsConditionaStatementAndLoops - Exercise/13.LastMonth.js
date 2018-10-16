function findDaysCountOfTheMonthBefore(input) {
    let month = +input[1];
    let year = +input[2];

    let date = new Date(year, month, 0);

    console.log(date.getMonth());
}

findDaysCountOfTheMonthBefore(['1', '3', '2002']);