function roadRadar(input) {
    let driverSpeed = +input[0];
    let area = input[1];

    let limit = getLimit(area);

    let getInfraction = function (driverSpeed, limit) {
        let diff = driverSpeed - limit;

        if (driverSpeed <= limit) {
            return "";
        } else if (diff > 40) {
            return "reckless driving";
        } else if (diff > 20) {
            return "excessive speeding";
        } else {
            return "speeding";
        }
    };

    console.log(getInfraction(driverSpeed, limit));

    function getLimit(zone) {
        if (zone === "residential") {
            return 20;
        } else if (zone === "city") {
            return 50;
        } else if (zone === "interstate") {
            return 90;
        } else if (zone === "motorway") {
            return 130;
        }
    }
}

roadRadar([120, 'interstate']);