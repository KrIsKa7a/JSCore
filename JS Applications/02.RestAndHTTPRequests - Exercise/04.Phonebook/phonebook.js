function attachEvents() {
    $("#btnLoad").on("click", loadMessages);
    $("#btnCreate").on("click", createMessage);

    $("#phonebook").empty();
    loadMessages();

    function loadMessages() {
        let containerUl = $("#phonebook");

        containerUl.empty();

        $.ajax({
            method: "GET",
            url: "https://phonebook-nakov.firebaseio.com/phonebook.json",
            success: displayData,
            error: displayError
        });

        function displayData(data) {
            for (let key in data) {
                let currentMsgLi = $("<li>");
                currentMsgLi.text(`${data[key].person}: ${data[key].phone}`);

                let deleteBtn = $("<button>").text("Delete");
                deleteBtn.on("click", function () {
                   $.ajax({
                      method: "DELETE",
                      url: `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`,
                      success: loadMessages,
                      error: displayError
                   });
                });
                deleteBtn.appendTo(currentMsgLi);

                currentMsgLi.appendTo(containerUl);
            }
        }
    }

    function createMessage() {
        let person = $("#person").val();
        let phone = $("#phone").val();

        let data = {
            "person": person,
            "phone": phone
        };

        $("#person").val("");
        $("#phone").val("");

        $.ajax({
            method: "POST",
            url: "https://phonebook-nakov.firebaseio.com/phonebook.json",
            data: JSON.stringify(data),
            success: loadMessages(),
            error: displayError()
        });
    }

    function displayError() {
        $("#phonebook").append($("<li>").text("Error"));
    }
}