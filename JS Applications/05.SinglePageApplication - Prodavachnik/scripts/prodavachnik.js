async function startApp() {
    
    const templates = {};

    await loadTemplates();

    //It would be better to show Home when page first entered :)))
    showView("viewHome");

    async function loadTemplates() {
        //I've changed file names (bug fix) and give them /.hbs/ extension for more clarity
        const [adsCatalogTemplate, adBoxTemplate]
            = await Promise.all([
                $.get('./templates/adsCatalog.hbs'),
            $.get('./templates/adBoxPartial.hbs')
        ]);

        templates['catalog'] = Handlebars.compile(adsCatalogTemplate);
        Handlebars.registerPartial('adBox', adBoxTemplate);
    }

    // Attach click events
    (() => {
        $('header').find('a[data-target]').click(navigateTo);
        $('#buttonLoginUser').click(login);
        $('#buttonRegisterUser').click(register);
        $('#linkLogout').click(logout);
        $('#buttonCreateAd').click(createAd);
        $('.notification').click(function () {
            $(this).hide();
        });
    })();

    let requester = (() => {
        const appKey = 'kid_BJcZftNP-';
        const appSecret = '55297dee18e3431aa460d74048b4bdf5';
        const baseUrl = 'https://baas.kinvey.com/';

        // Creates the authentication header
        function makeAuth(type) {
            return type === 'basic'
                ?  'Basic ' + btoa(appKey + ':' + appSecret)
                :  'Kinvey ' + localStorage.getItem('authtoken');
        }

        // Creates request object to kinvey
        function makeRequest(method, module, endpoint, auth) {
            return req = {
                method,
                url: baseUrl + module + '/' + appKey + '/' + endpoint,
                headers: {
                    'Authorization': makeAuth(auth)
                }
            };
        }

        // Function to return GET promise
        function get (module, endpoint, auth) {
            return $.ajax(makeRequest('GET', module, endpoint, auth));
        }

        // Function to return POST promise
        function post (module, endpoint, auth, data) {
            let req = makeRequest('POST', module, endpoint, auth);
            req.data = data;
            return $.ajax(req);
        }

        // Function to return PUT promise
        function update (module, endpoint, auth, data) {
            let req = makeRequest('PUT', module, endpoint, auth);
            req.data = data;
            return $.ajax(req);
        }

        // Function to return DELETE promise
        function remove (module, endpoint, auth) {
            return $.ajax(makeRequest('DELETE', module, endpoint, auth));
        }

        return {
            get,
            post,
            update,
            remove
        }
    })();

    if(localStorage.getItem('authtoken') !== null){
        userLoggedIn();
    } else {
        userLoggedOut();
    }

    // Handle notifications
    $(document).on({
        ajaxStart: () => $("#loadingBox").show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    });

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.text(message);
        errorBox.show();
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();

        if(viewName === 'viewAds'){
            loadAds();
        }
    }

    // Shows only the correct links for a logged in user
    function userLoggedIn() {
       $("#linkHome").show();
       $("#linkCreateAd").show();
       $("#linkListAds").show();
       $("#linkLogin").hide();
       $("#linkLogout").show();
       $("#linkRegister").hide();
       $("#loggedInUser").text(`Welcome, ${localStorage.username}`);
       $("#loggedInUser").show();
    }

    // Shows only the correct links for an anonymous user
    function userLoggedOut() {
        $("#linkHome").show();
        $("#linkCreateAd").hide();
        $("#linkListAds").hide();
        $("#linkLogin").show();
        $("#linkLogout").hide();
        $("#linkRegister").show();
        $("#loggedInUser").text("");
        $("#loggedInUser").hide();
    }

    function navigateTo() {
        $("section").hide();
        let target = $(this).attr("data-target");

        showView(target);
    }

    // Saves username/id/authtoken to local storage
    function saveSession(data) {
        localStorage.setItem('username', data.username);
        localStorage.setItem('id', data._id);
        localStorage.setItem('authtoken', data._kmd.authtoken);
        userLoggedIn();
    }

    // Logs in the user
    async function login() {
        let form = $('#formLogin');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();

        try {
            let response = await requester.post('user', 'login', 'basic', { username, password });
            saveSession(response);
            showView('viewAds');
            showInfo('Successfully logged in!');
        } catch (e) {
            handleError(e);
        }
    }

    // Register a user
    async function register() {
        let form = $('#formRegister');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();

        try {
            let response = await requester.post('user', '', 'basic', { username, password});
            saveSession(response);
            showView('viewAds');
            showInfo('Successfully registered!');
        } catch (e) {
            handleError(e);
        }
    }

    // Logout a user
    async function logout() {
        try {
            await requester.post('user', '_logout', 'kinvey', { authtoken: localStorage.getItem('authtoken')});
            localStorage.clear(); // Clears all session storage on logout
            userLoggedOut();
            showView('viewHome');
            showInfo('Logout successful!')
        } catch (e) {
            handleError(e);
        }
    }

    // Load all ads
    async function loadAds() {
        try {
            let ads = await requester.get("appdata", "ads", "");

            let container = $("#viewAds > div");

            let context = ads.reduce((acc, cur) => {
                let isAuthor = localStorage.getItem("id") === cur._acl.creator;

                //TODO Find a way to find username by id

                let currentAd = {
                    "_id": cur._id,
                    isAuthor,
                    "title": cur.title,
                    "imageUrl": cur.imageUrl,
                    "price": cur.price,
                    "publisher": cur._acl.creator
                };

                acc['ads'].push(currentAd);

                return acc;
            }, {'ads': []});

            let adBoxTemplateSource = await $.get('./templates/adBoxPartial.hbs');
            let adsCatalogTemplateSource = await $.get('./templates/adsCatalog.hbs');
            let adBoxTemplate = Handlebars.compile(adBoxTemplateSource);
            let adsCatalogTemplate = Handlebars.compile(adsCatalogTemplateSource);

            Handlebars.registerPartial("adBox", adBoxTemplate);

            container.html(adsCatalogTemplate(context));
            $(".delete").click(deleteAd);
            $(".edit").click(openEditAdd);
        }
        catch (e) {
            handleError(e);
        }
    }

    // Create an add
    async function createAd() {
        let form = $("#formCreateAd");

        try {
            let title = form.find("input[name='title']");
            let description = form.find("textarea[name='description']");
            let price = form.find("input[name='price']");
            let imageUrl = form.find("input[name='imageUrl']");

            let data = {
                "title": title.val(),
                "description": description.val(),
                "price": price.val(),
                "imageUrl": imageUrl.val()
            };

            let result = await requester.post("appdata", "ads", "", data);

            //TODO If we add functionality for displaying single ad we can directly redirect using the result

            showView("viewAds");

            showInfo("Your ad was created successfully!");
        } catch (e) {
            handleError(e);
        }
    }

    // Delete an add
    async function deleteAd() {
        let articleId = $(this.parentNode).attr("data-id");

        try {
            await requester.remove("appdata", `ads/${articleId}`, "");

            showView("viewAds");

            showInfo("Your ad was deleted successfully!");
        }
        catch (e) {
            handleError(e);
        }
    }

    // Edit an add
    async function editAd(id, publisher, date) {
        try {
            let form = $("#formEditAd");

            let newTitle = form.find("input[name='title']").val();
            let newDescription = form.find("textarea[name='description']").val();
            let newPrice = form.find("input[name='price']").val();
            let newImageUrl = form.find("input[name='imageUrl']").val();

            let data = {
                "title": newTitle,
                "description": newDescription,
                "price": newPrice,
                "imageUrl": newImageUrl
            };

            await requester.update("appdata", `ads/${id}`, "", data);

            showView("viewAds");

            showInfo("Your ad was edited successfully!");
        }
        catch (e) {
            handleError(e);
        }
    }

    // Open edit add view
    async function openEditAdd() {
        let form = $("#formEditAd");

        let adId = $(this.parentNode).attr("data-id");

        let adInfo = await requester.get("appdata", `ads/${adId}`, "");

        console.log(adInfo);

        form.find("input[name='id']").val(adId);
        form.find("input[name='publisher']").val(adInfo._acl.creator);
        form.find("input[name='title']").val(adInfo.title);
        form.find("textarea[name='description']").val(adInfo.description);
        form.find("input[name='price']").val(adInfo.price);
        form.find("input[name='imageUrl']").val(adInfo.imageUrl);

        $("#buttonEditAd").click(async function f() {
            await editAd(adId, adInfo._acl.creator, new Date())
        });

        showView("viewEditAd");
    }
}