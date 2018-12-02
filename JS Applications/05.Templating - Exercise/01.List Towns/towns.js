function attachEvents() {
    let button = $("#btnLoadTowns");

    button.on("click", renderTowns);

    function renderTowns() {
        let templateSource = $("#towns-template").html();
        let template = Handlebars.compile(templateSource);

        let container = $("#root");

        let townsInput = $("#towns");

        let townNames = townsInput.val()
            .split(", ");

        container.html(template(townNames));

        townsInput.val("");
    }
}