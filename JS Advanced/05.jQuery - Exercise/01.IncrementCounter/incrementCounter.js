function increment(selector) {
    let container = $(selector);

    let textArea = $("<textarea></textarea>");
    textArea.addClass("counter");
    textArea.val("0");
    textArea.attr("disabled", "true");

    let incrementButton = $("<button></button>");
    incrementButton.addClass("btn");
    incrementButton.attr("id", "incrementBtn");
    incrementButton.text("Increment");
    incrementButton.on("click", function () {
        let textArea = $(".counter");
        textArea.val(+textArea.val() + 1);
    });

    let addButton = $("<button></button>");
    addButton.addClass("btn");
    addButton.attr("id", "addBtn");
    addButton.text("Add");
    addButton.on("click", function () {
        let li = $("<li></li>");
        $(li).text($(".counter").val());
        $(".results").append(li);
    });

    let ul = $("<ul></ul>");
    ul.addClass("results");

    container.append(textArea);
    container.append(incrementButton);
    container.append(addButton);
    container.append(ul);
}