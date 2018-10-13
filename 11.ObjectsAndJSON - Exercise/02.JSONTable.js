function JSONTable(input) {
    let html = "<table>\n";

    for (let row of input) {
        html += "\t<tr>\n";

        let objData = JSON.parse(row);

        for (let key of Object.keys(objData)) {
            html += `\t\t<td>${objData[key]}</td>\n`;
        }

        html += "\t</tr>\n";
    }

    html += "</table>";

    console.log(html);
}

JSONTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
);