function attachEvents() {
    let loadBtn = $(".load");
    let createBtn = $(".add");
    let updateBtn = $(".update");
    let deleteBtn = $(".delete");

    loadBtn.on("click", loadCatches);
    createBtn.on("click", createCatch);
    updateBtn.on("click", updateCatch);
    deleteBtn.on("click", deleteCatch);

    async function loadCatches() {
        let catches = await $.ajax({
            method: "GET",
            url: "https://baas.kinvey.com/appdata/kid_HkV_55aAQ/biggestCatches",
            headers: {
                //Replace the authorization key with word "Secret" for judge system
                "Authorization": "Basic Z3Vlc3Q6cGFzcw=="
            }
        });

        let container = $("#catches");

        container.empty();

        catches
            .forEach(displayCatch);

        function displayCatch(catchInfo) {
            let catchDiv = $("<div class='catch'></div>");
            catchDiv.attr("data-id", catchInfo._id);

            catchDiv
                .append($(`<label>Angler</label>`))
                .append($(`<input type="text" class="angler" value="${catchInfo.angler}"/>`))
                .append($(`<label>Weight</label>`))
                .append($(`<input type="number" class="weight" value="${catchInfo.weight}"/>`))
                .append($(`<label>Species</label>`))
                .append($(`<input type="text" class="species" value="${catchInfo.species}"/>`))
                .append($(`<label>Location</label>`))
                .append($(`<input type="text" class="location" value="${catchInfo.location}"/>`))
                .append($(`<label>Bait</label>`))
                .append($(`<input type="text" class="bait" value="${catchInfo.bait}"/>`))
                .append($(`<label>Capture Time</label>`))
                .append($(`<input type="number" class="captureTime" value="${catchInfo.captureTime}"/>`));

            let updateButton = $(`<button class="update">Update</button>`);
            updateButton.on("click", updateCatch);
            updateButton.appendTo(catchDiv);

            let deleteButton = $(`<button class="delete">Delete</button>`);
            deleteButton.on("click", deleteCatch);
            deleteButton.appendTo(catchDiv);

            container.append(catchDiv);
        }
    }

    async function createCatch() {
        let angler = $("#addForm .angler");
        let weight = $("#addForm .weight");
        let species = $("#addForm .species");
        let location = $("#addForm .location");
        let bait = $("#addForm .bait");
        let captureTime = $("#addForm .captureTime");

        let data = {
            "angler": angler.val(),
            "weight": +weight.val(),
            "species": species.val(),
            "location": location.val(),
            "bait": bait.val(),
            "captureTime": +captureTime.val()
        };

        await $.ajax({
            method: "POST",
            url: "https://baas.kinvey.com/appdata/kid_HkV_55aAQ/biggestCatches",
            headers: {
                //Replace the authorization key with word "Secret" for judge system
                "Authorization": "Basic Z3Vlc3Q6cGFzcw==",
                "Content-Type": "application/json"
            },
            data: JSON.stringify(data)
        });

        await loadCatches();

        angler.val("");
        weight.val("");
        species.val("");
        location.val("");
        bait.val("");
        captureTime.val("");
    }

    async function updateCatch() {
        let clickedCatch = this.parentNode;

        let clickedCatchId = $(clickedCatch).attr("data-id");

        let data = {};

        for(let i = 1; i < clickedCatch.childNodes.length - 2; i += 2) {
            let currentInfo = clickedCatch.childNodes[i];

            if (isNaN(+currentInfo.value)) {
                data[currentInfo.className] = currentInfo.value;
            } else {
                data[currentInfo.className] = +currentInfo.value;
            }
        }

        await $.ajax({
            method: "PUT",
            url: `https://baas.kinvey.com/appdata/kid_HkV_55aAQ/biggestCatches/${clickedCatchId}`,
            headers: {
                //Replace the authorization key with word "Secret" for judge system
                "Authorization": "Basic Z3Vlc3Q6cGFzcw==",
                "Content-Type": "application/json"
            },
            data: JSON.stringify(data)
        });

        await loadCatches();
    }

    async function deleteCatch(event) {
        let clickedCatch = this.parentNode;

        let clickedCatchId = $(clickedCatch).attr("data-id");

        await $.ajax({
            method: "DELETE",
            url: `https://baas.kinvey.com/appdata/kid_HkV_55aAQ/biggestCatches/${clickedCatchId}`,
            headers: {
                //Replace the authorization key with word "Secret" for judge system
                "Authorization": "Basic Z3Vlc3Q6cGFzcw==",
                "Content-Type": "application/json"
            },
        });

        await loadCatches();
    }
}