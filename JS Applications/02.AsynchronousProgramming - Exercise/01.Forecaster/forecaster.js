function attachEvents() {
    const weatherIcons = {
        "Sunny": "&#x2600;",
        "Partly sunny": "&#x26C5;",
        "Overcast": "&#x2601;",
        "Rain": "&#x2614;"
    };
    const degreesIcon = "&#176;";

    let submitBtn = $("#submit");

    submitBtn.on("click", showForecast);

    async function showForecast() {
        let citySubmited = $("#location").val();
        let codeValue = "";

        let locationCodes = await $.ajax({
            method: "GET",
            url: "https://judgetests.firebaseio.com/locations.json"
        }).catch(displayError);

        locationCodes
            .forEach(cityInfo => {
               if (cityInfo.name === citySubmited) {
                   codeValue = cityInfo.code;
               }
            });

        if (codeValue === "") {
            displayError();
        }

        let currentConditionsQuery = $.ajax({
            method: "GET",
            url: `https://judgetests.firebaseio.com/forecast/today/${codeValue}.json`
        });

        let upcomingQuery = $.ajax({
            method: "GET",
            url: `https://judgetests.firebaseio.com/forecast/upcoming/${codeValue}.json`
        });

        Promise.all([currentConditionsQuery, upcomingQuery])
            .then(renderForecast)
            .catch(displayError);
    }

    function renderForecast(data) {
        let container = $("#forecast");

        console.log(data);

        resetCurrentConditionsContainer();
        resetUpcomingConditionsContainer();

        renderCurrentForecastHTML();
        renderUpcomingForecastHTML();

        container.show();

        function renderCurrentForecastHTML() {
            let current = $("#current");
            let forecast = data[0]["forecast"];

            let conditionSpan = $("<span class='condition'></span>");

            let cityNameSpan = $(`<span class='forecast-data'>${data[0]["name"]}</span>`);
            let highLowSpan = $(`<span class="forecast-data">${forecast.low}${degreesIcon}/${forecast.high}${degreesIcon}</span>`);
            let typeSpan = $(`<span class="forecast-data">${forecast.condition}</span>`);

            conditionSpan
                .append(cityNameSpan)
                .append(highLowSpan)
                .append(typeSpan);

            current.append(`<span class="condition symbol">${weatherIcons[forecast.condition]}</span>`);
            current.append(conditionSpan);
        }

        function renderUpcomingForecastHTML() {
            let upcoming = $("#upcoming");
            let forecast = data[1]["forecast"];

            forecast
                .forEach(weatherInfo => {
                    let upcomingSpan = $("<span class='upcoming'></span>");

                    let symbolSpan = $(`<span class="symbol">${weatherIcons[weatherInfo.condition]}</span>`);
                    let lowHighSpan =
                        $(`<span class="forecast-data">${weatherInfo.low}${degreesIcon}/${weatherInfo.high}${degreesIcon}</span>`);
                    let conditionSpan = $(`<span class="forecast-data">${weatherInfo.condition}</span>`);

                    upcomingSpan
                        .append(symbolSpan)
                        .append(lowHighSpan)
                        .append(conditionSpan);

                    upcoming
                        .append(upcomingSpan);
                });
        }

        function resetCurrentConditionsContainer() {
            let current = $("#current");

            current.html("<div class=\"label\">Current conditions</div>");
        }

        function resetUpcomingConditionsContainer() {
            let upcoming = $("#upcoming");

            upcoming.html("<div class=\"label\">Three-day forecast</div>");
        }
    }

    function displayError() {
        let forecast = $("#forecast");

        forecast.html("Error");

        forecast.show();
    }
}