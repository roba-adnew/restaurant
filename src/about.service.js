export const loadAboutPage = () => {

    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.innerHTML = `A little more about us!`;
    content.appendChild(headline)

    const questions = [`Who?`, `What?`, `When?`, `Where?`, `Why?`, `How do I get in touch?`];
    const answers = [
        `We're a bunch of enthusiastic empanada lovers from Hyattsville!`,
        `We started this restaurant when we realized we needed to make the webpage for our programming assignment`,
        `We opened up the page just today, 10/19/23`,
        `Well the restaurant is supposed to be in Hyattsville, MD, right off Route 1`,
        `We make the best spinach and chicken empanadas, all others we're kinda just ok`,
        `Address: 1 Nunya Blvd. Phone: (301) - 555 - 6511, email: nunya@nadaempandada.com`
    ]

    const infoTable = document.createElement('table');
    const headerRow = document.createElement('tr');

    const firstColumnHeader = document.createElement('th');
    firstColumnHeader.innerHTML = `The Big Questions!`;

    const secondColumnHeader = document.createElement('th');
    secondColumnHeader.innerHTML = `The Average Sized Answers`;

    headerRow.appendChild(firstColumnHeader);
    headerRow.appendChild(secondColumnHeader);
    infoTable.appendChild(headerRow);

    for (let i = 0; i < questions.length; i++) {
        const newRow = document.createElement('tr');

        const questionCell = document.createElement('td');
        questionCell.innerHTML = questions[i];

        const answerCell = document.createElement('td');
        answerCell.innerHTML = answers[i];

        newRow.appendChild(questionCell);
        newRow.appendChild(answerCell);
        infoTable.appendChild(newRow)
    }
    

    content.appendChild(infoTable);
    return content
}