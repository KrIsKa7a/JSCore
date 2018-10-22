function attachEvents() {
    $('#items').on('click', 'li', function () {
        let li = $(this);

        if (li.attr('data-selected')) {
            li.removeAttr('data-selected');
            li.css('background', '');
        } else {
            li.attr('data-selected', 'true');
            li.css('background', '#DDD');
        }
    });

    $("#showTownsButton").on("click", function () {
        let lis = $("#items li[data-selected = true]");
        let towns = lis.toArray()
            .map(el => el.textContent)
            .join(", ");

        $("#selectedTowns").text("Selected towns: " + towns);
    });
}
