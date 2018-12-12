$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let templateSource = $("#cat-template").html();
        let template = Handlebars.compile(templateSource);

        $("#allCats").html(template(cats));

        $(".btn-primary").on("click", function () {
            let toShowAndHide = $(this).next();

            if ($(this).text() === "Show status code") {
                $(this).text("Hide status code");
                toShowAndHide.show();
            } else {
                $(this).text("Show status code");
                toShowAndHide.hide();
            }
        });
    }

});
