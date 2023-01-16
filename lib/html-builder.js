function buildHTML(objArray) {
    let cardArray = [];
    for (const obj of objArray) {
        const cardDiv = `<div class="border border-dark bg-dark text-white col p-3 me-3 mb-3">
        <h3>${obj.getRole()}</h3>
        <p>Name: ${obj.name}</p>
        <p>ID: ${obj.id}</p>
        <p>Email: ${obj.email}</p>
        <p>${Object.keys(obj).slice(-1)}: ${obj.officeNumber || obj.github || obj.school}</p>
    </div>`;
    cardArray.push(cardDiv);
    }
    console.log('HTML cooked~');
    console.log(cardArray);
    return cardArray;
}
module.exports = buildHTML;