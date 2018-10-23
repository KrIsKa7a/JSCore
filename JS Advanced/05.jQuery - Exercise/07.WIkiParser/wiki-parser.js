function wikiParser(selector) {
    let container = $(selector);

    let text = container.text();

    let formattedText = text
        .replace(/===([^='\[]+?)===/g, (m, g) => `<h3>${g}</h3>`)
        .replace(/==([^='\[]+?)==/g, (m, g) => `<h2>${g}</h2>`)
        .replace(/=([^='\[]+?)=/g, (m, g) => `<h1>${g}</h1>`)
        .replace(/'''([^'=\[]+?)'''/g, (m, g) => `<b>${g}</b>`)
        .replace(/''([^'=\[]+?)''/g, (m, g) => `<i>${g}</i>`)
        .replace(/\[\[([^'=\[\]]+?)\|([^'=\[\]]+?)]]/g, (m, g1, g2) => `<a href="/wiki/${g1}">${g2}</a>`)
        .replace(/\[\[([^'=\[\]]+?)]]/g, (m, g) => `<a href="/wiki/${g}">${g}</a>`);

    container.html(formattedText);
}