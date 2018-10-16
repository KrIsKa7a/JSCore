function systemComponents(input) {
    let data = {};

    for (let row of input) {
        let tokens = row
            .split(" | ");

        let systemName = tokens[0];
        let componentName = tokens[1];
        let subComponentName = tokens[2];

        if (!data[systemName]) {
            data[systemName] = {};
        }

        if (!data[systemName][componentName]) {
            data[systemName][componentName] = [];
        }

        data[systemName][componentName].push(subComponentName);
    }

    let sortedSystemNames = Array.from(Object.keys(data))
        .sort((a, b) => Object.keys(data[b]).length - Object.keys(data[a]).length || a.localeCompare(b));

    for (let systemName of sortedSystemNames) {
        console.log(systemName);

        let systemData = data[systemName];

        let sortedComponents = Array.from(Object.keys(systemData))
            .sort((a, b) => systemData[b].length - systemData[a].length);

        for (let component of sortedComponents) {
            let subComponents = systemData[component];

            console.log(`|||${component}`);

            for (let subComponent of subComponents) {
                console.log(`||||||${subComponent}`);
            }
        }
    }
}

systemComponents(['SULS | Main Site | Home Page',
                'SULS | Main Site | Login Page',
                'SULS | Main Site | Register Page',
                'SULS | Judge Site | Login Page',
                'SULS | Judge Site | Submittion Page',
                'Lambda | CoreA | A23',
                'SULS | Digital Site | Login Page',
                'Lambda | CoreB | B24',
                'Lambda | CoreA | A24',
                'Lambda | CoreA | A25',
                'Lambda | CoreC | C4',
                'Indice | Session | Default Storage',
                'Indice | Session | Default Security']
);