const url = "https://catfact.ninja/fact";
const slider = document.getElementById('slider');
const div = document.querySelector("#cats-facts");
const facts = [];
let paragraphs = document.getElementsByTagName('article');
let x = 0;
let currentSlide = 0;

async function loadFact() {
    const resp = await fetch(url);
    const json = await resp.json();
    return json.fact;
}

async function showFact() {
    while (facts.length < 6) {
        const fact = await loadFact();
        const article = document.createElement("article");
        article.classList.add("article");
        article.innerText = fact;
        div.appendChild(article);
        facts.push(article);
    }
}

function showSlide(slideIndex) {
    const slideWidth = slider.offsetWidth;
    if (slideWidth < Math.abs(x * 50)) {
        x = 0;
        if (facts.length >= 6) {
            div.removeChild(div.firstChild);
            facts.shift(paragraphs);
        } else {
            showFact();
        }
    }
    x--;
    div.style.transform = `translateX(${x * 50}px`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % paragraphs.length;
    showSlide(currentSlide);
}

// Cambiar al siguiente slide cada 3 segundos (3000 milisegundos)
setInterval(nextSlide, 500);

// Cargar 6 articles al cargar la pagina
(async function () {
    await showFact();
})();

setInterval(showFact, 3000);


  
  
  
  
  