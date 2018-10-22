function extractText() {
    const items = $("#items li")
        .toArray()
        .map(el => el.textContent);

    $("#result").text(items.join(", "));
}