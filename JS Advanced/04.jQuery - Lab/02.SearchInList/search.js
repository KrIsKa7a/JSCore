function search() {
    const toHave = $("#searchText").val();

    //It's case-sensitive
    const items = $("#towns li")
        .css("font-weight", "")
        .filter((index, el) => {
            return el.textContent.includes(toHave);
        });

    items
        .css("font-weight", "bold");

    $("#result").text(`${items.length} matches found.`)
}