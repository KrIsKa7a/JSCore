function ticketsScan(text, wantedToExtract) {
    let namePattern = / (([A-Z][A-Za-z]*)-([A-Z][A-Za-z]*\.)*\-*([A-Z][A-Za-z]*)) /;
    let airportPattern = / (([A-Z]{3})\/([A-Z]{3})) /;
    let flightNumberPattern = / ([A-Z]{1,3}[0-9]{1,5}) /;
    let companyPattern = /- ([A-Z][A-Za-z]*\*[A-Z][A-Za-z]*) /;

    let passengerNameMatch = text.match(namePattern);
    let airportMatch = text.match(airportPattern);
    let flightNumberMatch = text.match(flightNumberPattern);
    let companyMatch = text.match(companyPattern);

    if (wantedToExtract === "name") {
        let name = passengerNameMatch[1]
            .replace(/-/g, ' ');

        console.log(`Mr/Ms, ${name}, have a nice flight!`);
    } else if (wantedToExtract === "flight") {
        let flightNumber = flightNumberMatch[1];
        let fromAirport = airportMatch[2];
        let toAirport = airportMatch[3];

        console.log(`Your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}.`);
    } else if (wantedToExtract === "company") {
        let companyName = companyMatch[1]
            .replace('*', ' ');

        console.log(`Have a nice flight with ${companyName}.`);
    } else if (wantedToExtract === "all") {
        let name = passengerNameMatch[1]
            .replace(/-/g, ' ');
        let flightNumber = flightNumberMatch[1];
        let fromAirport = airportMatch[2];
        let toAirport = airportMatch[3];
        let company = companyMatch[1]
            .replace('*', ' ');

        console.log(`Mr/Ms, ${name}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`);
    }
}