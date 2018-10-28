function calcBMI(name, age, weight, height) {
    let personObj = (function () {
        let heightInMeters = height / 100;
        let BMI = weight / Math.pow(heightInMeters, 2);

        let objWanted = {
            name: name,
            personalInfo: {
                age: age,
                weight: weight,
                height: height
            },
            BMI: Math.round(BMI),
            status: getStatus()
        };

        if (objWanted.status === "obese") {
            objWanted["recommendation"] = "admission required";
        }

        return objWanted;

        function getStatus() {
            if (BMI  < 18.5) {
                return "underweight";
            } else if (BMI < 25) {
                return "normal";
            } else if (BMI < 30) {
                return "overweight";
            } else {
                return "obese";
            }
        }
    })();

    console.log(personObj);

    return personObj;
}

calcBMI("Kristiyan", 18, 62, 170);