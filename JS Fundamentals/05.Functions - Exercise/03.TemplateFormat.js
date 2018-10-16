function templateFormat(input) {
    let template = `<?xml version="1.0" encoding="UTF-8"?>
<quiz>
`;

    for (let i = 0; i < input.length; i += 2) {
        let question = input[i];
        let answer = input[i + 1];

        template += getQuestionAndAnswerFormatted(question, answer);
    }

    template += `</quiz>`;

    console.log(template);

    function getQuestionAndAnswerFormatted(question, answer) {
        return `  <question>
    ${question}
  </question>
  <answer>
    ${answer}
  </answer>
`;
    }
}

templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);