function createBook(selector, bookName, author, isbn) {
    (function bookGenerator() {
        let id = 1;

        return function () {
          let container = $(selector);

          let book = $("<div></div>");
          book.attr("id", `book${id}`);

          let bookNameP = $("<p></p>");
          bookNameP.addClass("title");
          bookNameP.text(bookName);
          bookNameP.appendTo(book);

          let bookAuthorP = $("<p></p>");
          bookAuthorP.addClass("author");
          bookAuthorP.text(author);
          bookAuthorP.appendTo(book);

          let bookIsbnP = $("<p></p>");
          bookIsbnP.addClass("isbn");
          bookIsbnP.text(isbn);
          bookIsbnP.appendTo(book);

          let selectBtn = $("<button></button>");
          selectBtn.text("Select");
          selectBtn.on("click", function () {
             book.css("border", "2px solid blue");
          });
          selectBtn.appendTo(book);

          let deselectBtn = $("<button></button>");
          deselectBtn.text("Deselect");
          deselectBtn.on("click", function () {
             book.css("border", "");
          });
          deselectBtn.appendTo(book);

          book.appendTo(container);

          id++;
        };
    })()();
}