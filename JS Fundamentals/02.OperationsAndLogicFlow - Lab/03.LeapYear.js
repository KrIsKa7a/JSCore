function FindIfGivenYearIsLeap(year) {
    let isLeap = (+year % 4 === 0 && +year % 100 !== 0) || +year % 400 === 0;

    console.log(isLeap ? 'yes' : 'no');
}

FindIfGivenYearIsLeap(2000);