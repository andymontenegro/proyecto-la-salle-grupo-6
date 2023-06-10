console.log('Javascript cargado');
const url = 'https://catfact.ninja/fact';
const div = document.querySelector('#cats-facts');



async function loadFact() {
    const resp = await fetch(url);
    const json = await resp.json();
    console.log('Dato sobre gatos es: ', json.fact);
    return json.fact;
};

function factArticle(fact) {
    const article = document.createElement("article");
    article.innerText = fact;
    return article;
}

function renderFact(fact) {
    const article = factArticle(fact);
    div.appendChild(article);
    const articleObs = document.querySelector("#cats-facts article");
    console.log('articleObs is:', articleObs);
    return articleObs;
}

async function showFact() {
    const fact = await loadFact();
    renderFact(fact);
    console.log('recarga fact')

}
//showFact();
async function cleanupOne() {
    div.removeChild(div.firstChild);
}

showFact();


articleObs.addEventListener('animationiteration', showFact);


