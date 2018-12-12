$(() => {
    const app = Sammy('#main', function () {
        this.use("Handlebars", "hbs");

        this.get("/index.html", displayHome);
        this.get("#/home", displayHome);

        this.get("#/about", function (ctx) {
            let userId = sessionStorage.getItem("userId");
            let username = sessionStorage.getItem("username");

            ctx.loggedIn = userId !== null && userId !== undefined && userId !== "undefined";
            ctx.username = username;

            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs"
            }).then(function () {
                this.partial("./templates/about/about.hbs");
            });
        });

        this.get("#/login", function (ctx) {
            let userId = sessionStorage.getItem("userId");
            let username = sessionStorage.getItem("username");

            ctx.loggedIn = userId !== null && userId !== undefined && userId !== "undefined";
            ctx.username = username;

            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                loginForm: "./templates/login/loginForm.hbs"
            }).then(function () {
                this.partial("./templates/login/loginPage.hbs");
            });
        });
        this.post("#/login", function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;

            let that = this;

            auth.login(username, password)
                .then(function (res) {
                    auth.saveSession(res);
                    auth.showInfo("You've logged in successfully");
                    that.redirect("#/home");
                }).catch(auth.handleError);
        });

        this.get("#/register", function (ctx) {
            let userId = sessionStorage.getItem("userId");
            let username = sessionStorage.getItem("username");

            ctx.loggedIn = userId !== null && userId !== undefined && userId !== "undefined";
            ctx.username = username;

            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                registerForm: "./templates/register/registerForm.hbs"
            }).then(function () {
                this.partial("./templates/register/registerPage.hbs");
            });
        });
        this.post("#/register", function (ctx) {
           let username = ctx.params.username;
           let passsword = ctx.params.password;
           let repeatPassword = ctx.params.repeatPassword;

           if(passsword !== repeatPassword) {
               auth.showError("Passwords doesn't match!");
           } else {
               let that = this;

               auth.register(username, passsword, repeatPassword)
                   .then(function (res) {
                       auth.saveSession(res);
                       auth.showInfo("You've registered successfully");
                       that.redirect("#/home");
                   })
                   .catch(auth.handleError);
           }
        });

        this.get("#/logout", function () {
            let that = this;

            auth.logout()
               .then(function (res) {
                   auth.saveSession({
                      "_id": undefined,
                       "username": undefined,
                       "teamId": undefined,
                       "_kmd": {
                          "authtoken": undefined
                       }
                   });
                   auth.showInfo("You've logged out successfully");
                   that.redirect("#/home");
               }).catch(auth.handleError);
        });

        this.get("#/catalog", function (ctx) {
            let userId = sessionStorage.getItem("userId");
            let username = sessionStorage.getItem("username");
            let teamId = sessionStorage.getItem("teamId");

            ctx.loggedIn = userId !== null && userId !== undefined && userId !== "undefined";
            ctx.username = username;
            ctx.hasNoTeam = teamId === null || teamId === undefined || teamId === "undefined";

            let that = this;

            teamsService.loadTeams()
                .then(function (data) {
                    ctx.teams = data;

                    that.loadPartials({
                        header: "./templates/common/header.hbs",
                        footer: "./templates/common/footer.hbs",
                        team: "./templates/catalog/team.hbs"
                    }).then(function () {
                       this.partial("./templates/catalog/teamCatalog.hbs");
                    });
                }).catch(auth.handleError);
        });

        this.get("#/catalog/:_id", async function (ctx) {
            //TODO Check if it is working with a comment
            let id = ctx.params._id.substring(1);

            let userId = sessionStorage.getItem("userId");
            let username = sessionStorage.getItem("username");

            ctx.loggedIn = userId !== null && userId !== undefined && userId !== "undefined";
            ctx.teamId = id;

            let that = this;

            let data = await teamsService.loadTeamDetails(id);

            let creatorId = data._acl.creator;

            ctx.name = data.name;
            ctx.comment = data.comment ? data.comment : undefined;
            if (data.members) {
                ctx.members = JSON.parse(data.members)
                    .map(el => {
                        return {"username": el}
                    });
                ctx.isOnTeam = JSON.parse(data.members)
                    .filter(m => m === username)
                    .length === 1;
            } else {
                ctx.members = undefined;
                ctx.isOnTeam = false;
            }

            ctx.isAuthor = userId === creatorId;

            if(ctx.isAuthor) {
                ctx.isOnTeam = true;
            }

            that.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                teamMember: "./templates/catalog/teamMember.hbs",
                teamControls: "./templates/catalog/teamControls.hbs"
            }).then(function () {
                this.partial("./templates/catalog/details.hbs");
            });
        });

        //Working up to here

        this.get("#/create", function (ctx) {
            let userId = sessionStorage.getItem("userId");
            let username = sessionStorage.getItem("username");

            ctx.loggedIn = userId !== null && userId !== undefined && userId !== "undefined";
            ctx.username = username;

            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                createForm: "./templates/create/createForm.hbs"
            }).then(function () {
                this.partial("./templates/create/createPage.hbs");
            });
        });
        this.post("#/create", function (ctx) {
            let teamName = ctx.params.name;
            let comment = ctx.params.comment;

            let that = this;

            teamsService.createTeam(teamName, comment)
                .then(async function (res) {
                    let teamId = res._id;
                    sessionStorage.setItem('teamId', teamId);
                    auth.showInfo("Your team was created successfully");

                    that.redirect(`#/catalog/:${teamId}`);
                }).catch(auth.handleError);
        });

        this.get("#/join/:_id", function (ctx) {
            let username = sessionStorage.getItem("username");
            let oldTeam = sessionStorage.getItem("teamId");
            let teamId = ctx.params._id.substring(1);
            let that = this;

            teamsService.joinTeam(teamId)
                .then(function (res) {
                   teamsService.loadTeamDetails(res.teamId)
                       .then(async function (data) {
                           auth.showInfo(`You've successfully joined ${data.name} team`);
                           sessionStorage.setItem("teamId", teamId);

                           that.redirect("#/home");
                       });
                });
        });

        this.get("#/leave", async function () {
           await teamsService.leaveTeam();
           sessionStorage.setItem("teamId", undefined);
           this.redirect("#/home");
        });

        this.get("#/edit/:_id", async function (ctx) {
            let userId = sessionStorage.getItem("userId");
            let username = sessionStorage.getItem("username");

            ctx.loggedIn = userId !== null && userId !== undefined && userId !== "undefined";
            ctx.username = username;
            ctx.teamId = ctx.params._id.substring(1);
            let data = await teamsService.loadTeamDetails(ctx.params._id.substring(1));
            ctx.name = data.name;
            ctx.comment = data.comment;

            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                editForm: "./templates/edit/editForm.hbs"
            }).then(function () {
                this.partial("./templates/edit/editPage.hbs");
            });
        });
        this.post("#/edit/:_id", function (ctx) {
           let teamName = ctx.params.name;
           let comment = ctx.params.comment;
           let teamId = ctx.params._id.substring(1);

           let that = this;

           teamsService.edit(teamId, teamName, comment)
               .then(function (data) {
                  auth.showInfo("You've successfully edited post!")
                  that.redirect(`#/catalog/:${teamId}`);
               }).catch(auth.handleError);
        });

        function displayHome(ctx) {
            let authtoken = sessionStorage.getItem("authtoken");
            let userId = sessionStorage.getItem("userId");
            let username = sessionStorage.getItem("username");
            let teamId = sessionStorage.getItem("teamId");

            ctx.loggedIn = userId !== null && userId !== undefined && userId !== "undefined";
            ctx.hasTeam = teamId !== null && teamId !== undefined && teamId !== "undefined";
            ctx.teamId = teamId;
            ctx.username = username;

            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs"
            }).then(function () {
                this.partial("./templates/home/home.hbs");
            });
        }
    });

    app.run();
});