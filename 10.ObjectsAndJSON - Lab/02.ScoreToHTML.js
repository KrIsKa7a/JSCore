function convertJSONToHTML(input) {
    let parsed = JSON.parse(input);

    let html = '<table>\n';
    html += '\t<tr><th>name</th><th>score</th></tr>\n';

    for (let obj of parsed) {
        let objKeys = Object.keys(obj);
        let currentName = escapeHtml(obj[objKeys[0]]);
        let currentScore = escapeHtml(obj[objKeys[1]]);

        html += `\t<tr><td>${currentName}</td><td>${currentScore}</td></tr>\n`;
    }

    html += '</table>';

    console.log(html);


    function escapeHtml(unsafe) {
        let safe = unsafe
            .toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");

        return safe;
    }
}

convertJSONToHTML(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);
convertJSONToHTML(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']);