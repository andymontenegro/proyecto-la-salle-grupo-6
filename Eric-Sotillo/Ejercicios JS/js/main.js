/*let enlaces = document.querySelectorAll("a.nav-link");
for (let link of enlaces){
    document.addEventListener("keyup", function(event){
        //console.log("event: " + event);
        if ( link.dataset.key === event.key)  {
            link.click();
        }
    })
}*/
import "./facts.js";
import "./navKey.js";


/* const url = "https://catfact.ninja/fact";
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


setInterval(showFact, 5000); //Recarga cada 5 seg

setTimeout(() => setInterval(cleanupOne, 5000), 10000); */
