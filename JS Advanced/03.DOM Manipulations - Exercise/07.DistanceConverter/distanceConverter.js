function attachEventsListeners() {
    document.getElementById("convert").addEventListener("click", convertUnits);

    function convertUnits() {
        let firstSelectedUnit = document.getElementById("inputUnits").value;
        let secondSelectedUnit = document.getElementById("outputUnits").value;

        let inputValue = +document.getElementById("inputDistance").value;

        let firstUnitToMeters = 0;
        let result = 0;

        if (firstSelectedUnit === "km") {
            firstUnitToMeters = inputValue * 1000;
        } else if (firstSelectedUnit === "m") {
            firstUnitToMeters = inputValue;
        } else if (firstSelectedUnit === "cm") {
            firstUnitToMeters = inputValue * 0.01;
        } else if (firstSelectedUnit === "mm") {
            firstUnitToMeters = inputValue * 0.001;
        } else if (firstSelectedUnit === "mi") {
            firstUnitToMeters = inputValue * 1609.34;
        } else if (firstSelectedUnit === "yrd") {
            firstUnitToMeters = inputValue * 0.9144;
        } else if (firstSelectedUnit === "ft") {
            firstUnitToMeters = inputValue * 0.3048;
        } else if (firstSelectedUnit === "in") {
            firstUnitToMeters = inputValue * 0.0254;
        }

        if (secondSelectedUnit === "km") {
            result = firstUnitToMeters / 1000;
        } else if (secondSelectedUnit === "m") {
            result = firstUnitToMeters;
        } else if (secondSelectedUnit === "cm") {
            result = firstUnitToMeters / 0.01;
        } else if (secondSelectedUnit === "mm") {
            result = firstUnitToMeters / 0.001;
        } else if (secondSelectedUnit === "mi") {
            result = firstUnitToMeters / 1609.34;
        } else if (secondSelectedUnit === "yrd") {
            result = firstUnitToMeters / 0.9144;
        } else if (secondSelectedUnit === "ft") {
            result = firstUnitToMeters / 0.3048;
        } else if (secondSelectedUnit === "in") {
            result = firstUnitToMeters / 0.0254;
        }

        document.getElementById("outputDistance").value = result;
    }
}