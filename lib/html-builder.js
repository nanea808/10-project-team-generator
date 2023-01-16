let { firstHalfHTML, lastHalfHTML } = require('./html-strings');
const fs = require('fs');

function buildHTML(objArray) {
    let cardArray = [];
    for (const obj of objArray) {
        const cardDiv = `<div class="card col" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${obj.getRole()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${obj.name}</h6>
                <p class="card-text">ID: ${obj.id}</p>
                <a href="#" class="card-link">${obj.email}</a>
                <a href="#" class="card-link">${Object.keys(obj).slice(-1)}: ${obj.officeNumber || obj.github || obj.school}</a>
            </div>
        </div>`;
        cardArray.push(cardDiv);
    }
    console.log('HTML cooked~');
    console.log(cardArray);

    for (const card of cardArray) {
        firstHalfHTML = firstHalfHTML + card;
    }

    const fullHTML = firstHalfHTML + lastHalfHTML;
    console.log(fullHTML);
    fs.writeFileSync('dist/index.html', fullHTML, () => {
            if(err) console.log('error', err);
    });
}
module.exports = buildHTML;