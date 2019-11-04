document.addEventListener("DOMContentLoaded", () => {
    getMonsters().then(res => {
        console.log(res);
    })
})

async function getMonsters(url='http://localhost:3000/monsters') {
    let response = await fetch(url);
    let json = await response.json();
    return json;
}

function renderMonsters(monstersArray) {
    for (let i of monstersArray) {
        // put them thangs on the screen
    }
}