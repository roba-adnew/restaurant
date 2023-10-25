export const loadMenu = () => {
    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.innerHTML = `Here's our menu!`;
    content.appendChild(headline);

    const menuObjects = [
        {"Name": "Spinach", "Price": "3.99", "Description": "Creamy spinach with spices and love"},
        {"Name": "Chicken", "Price": "4.99", "Description": "Juicy chicken with herbs and care"},
        {"Name": "Steak", "Price": "5.99", "Description": "Tender steak with sauce and general likeness"},
        {"Name": "Gold", "Price": "Tree Fitty", "Description": "IYKYK"}
    ]    
    
    const infoTable = document.createElement('table');
    const headerRow = document.createElement('tr');

    const firstColumnHeader = document.createElement('th');
    firstColumnHeader.innerHTML = `Empanada fo yo Mama`;

    const secondColumnHeader = document.createElement('th');
    secondColumnHeader.innerHTML = `Price`;

    const thirdColumnHeader = document.createElement('th');
    thirdColumnHeader.innerHTML = `Description`;

    headerRow.appendChild(firstColumnHeader);
    headerRow.appendChild(secondColumnHeader);
    headerRow.appendChild(thirdColumnHeader);
    infoTable.appendChild(headerRow);

    for (let i = 0; i < menuObjects.length; i++) {
        const newRow = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.innerHTML = menuObjects[i].Name;

        const priceCell = document.createElement('td');
        priceCell.innerHTML = menuObjects[i].Price;

        const descriptionCell = document.createElement('td');
        descriptionCell.innerHTML = menuObjects[i].Description;

        newRow.appendChild(nameCell);
        newRow.appendChild(priceCell);
        newRow.appendChild(descriptionCell);
        infoTable.appendChild(newRow)
    }
    
    content.appendChild(infoTable);
    return content
}