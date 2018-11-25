function attachEvents() {
    let baseUrl = "https://messanger-d3cfc.firebaseio.com/messanger.json";

    let submitBtn = $("#submit");
    let refreshBtn = $("#refresh");

    function loadMessages() {
        $.ajax({
            method: "GET",
            url: baseUrl,
            success: displayMessages
        });
    }

    function displayMessages(data) {
        let textBox = $("#messages");

        textBox.empty();

        let orderedMessages = {};
        Object.keys(data).sort((a,b) => a.timestamp - b.timestamp).forEach(i => orderedMessages[i] = data[i]);

        for (let message of Object.keys(orderedMessages)) {
            $('#messages').append(`${orderedMessages[message]['author']}: ${orderedMessages[message]['content']}\n`);
        }
    }

    submitBtn.on("click", function () {
        let data = {
            author:$('#author').val(),
            content: $('#content').val(),
            timestamp: Date.now()
        };

        $.ajax({
           method: "POST",
           url: baseUrl,
           data: JSON.stringify(data),
           success: loadMessages()
        });
    });

    refreshBtn.on("click", function () {
       loadMessages();
    });

    loadMessages();
}