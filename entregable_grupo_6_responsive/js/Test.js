console.log('Javascript cargado');
const url = 'https://catfact.ninja/fact';
const div = document.querySelector('#cats-facts');
const span = "<spam></spam>";
let options = {
    root: null,
    threshold: 0,
  };
//const fact = div.querySelector("#article");




const observer = new IntersectionObserver( entries => {

    let entry = entries[0];

    



    if (entry.isIntersecting){
        
        if (!entry.target.nextElementSibling) {
            
                showFact();
                
            //loadFact();
            console.log("Es el ultimo - Agregar")
        }
        
        console.log("Elemento Visible");
    } else {
        if (!entry.target.previousElementSibling){
            cleanupOne();

            //entry.target.remove
            console.log("Es el primero - Quitar del dom y quitar obserser");
            
            //div.removeChild(div.firstChild);
            observer.unobserve(entry.target);

        } 
        //console.log("No Visible");
    }


},options);




//observer.observe(div);
//Solicitamos el Fact de la API
async function loadFact() {
    const resp = await fetch(url);
    const json = await resp.json();
    //console.log('Dato sobre gatos es: ', json.fact);
    return json.fact;
};

//Se agrega el Fact dentro del elemento Article
function factArticle(fact) {
    const article = document.createElement("article");
    article.innerText = fact;
    //<article>fact</article><span></span>|<article>fact</article><span></span><article>fact </article><span></span>|
    return article;
}



function renderFact(fact) {
    const article = factArticle(fact);
    div.appendChild(article);
/*     const span = document.createElement("span");
    article.appendChild(span); */
    observer.observe(article);
}

//Mostrar un Fact - Primero carga un fact y luego crear un articulo
async function showFact() {
    const fact = await loadFact();
    renderFact(fact);
}
//showFact();
async function cleanupOne() {
    div.removeChild(div.firstElementChild);
}


/*

cada elemento se anima por su cuenta
haciendo de left 100% a left -300% 
cuando desaparece la cola lo puedo quitar
cuando aparece la cola es cuando debo cargar el siguiente


<Elemento 0>
<Elemento 2>(-522px)|<Elemento 3><Elemento 4><Elemento 5>
Quitar elemento 2 y mover el contenedor a 0
<Elemento 4>
*/

await showFact();


//setInterval(showFact, 5000);

//setTimeout(() => setInterval(cleanupOne, 20000), 21000);

//observer.observe(div[0]);
//console.log(fact);





