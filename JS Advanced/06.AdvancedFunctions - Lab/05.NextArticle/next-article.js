function getArticleGenerator(input) {
    return (function () {
        let articles = input;

        return function () {
            let currentArticle = articles.shift();

            if(currentArticle) {
                let a = $("<article></article>");
                a.text(currentArticle);

                $("#content").append(a);
            }
        };
    })();
}