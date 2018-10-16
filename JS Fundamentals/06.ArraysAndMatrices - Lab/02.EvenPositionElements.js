function findEvenPositionElements(input) {
    function extractEvenElements(input) {
        let evenElements = input
            .filter((el, index) => {
               return index % 2 === 0;
            });

        return evenElements;
    }

    let evenElements = extractEvenElements(input);

    console.log(evenElements.join(" "));
}

findEvenPositionElements(['5', '10']);