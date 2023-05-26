const url = "https://catfact.ninja/fact";
const div = document.querySelector("#cats-facts");

async function loadFact() {
    const resp = await fetch(url);
    const json = await resp.json();
    return json.fact;
}

async function showFact() {
    const fact = await loadFact();
    const article = document.createElement("article");
    article.innerText = fact;
    div.appendChild(article);
}

async function cleanupOne() {
    div.removeChild(div.firstChild);
}

//showFact();
//setTimeout(() => setInterval(cleanupOne, 60000), 60000);
//setInterval(showFact, 20000); //Recarga cada 5 seg

//intersetion observer - callback (array de observadores//regiones)