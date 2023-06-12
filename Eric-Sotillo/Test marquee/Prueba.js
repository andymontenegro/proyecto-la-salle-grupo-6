window.addEventListener('DOMContentLoaded', function() {
    const url = 'https://catfact.ninja/fact/?max_length=100';
    const marqueeContent = document.getElementById('marquee-content');
    const marqueeContainer = document.getElementById('marquee');
    let options = {
      root: null,
      threshold: 0,
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("se ve");
          if (!entry.target.nextElementSibling) {
            console.log("No tiene siguiente");
            loadFact();
          }
        } else {
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    // Función para solicitar un Fact en la API
    async function loadFact() {
      const fact = await fetchFact();
      const article = createFactArticle(fact);
      addFact(article);
    }
  
    // Función para solicitar un fact a la API
    async function fetchFact() {
      const response = await fetch(url);
      const json = await response.json();
      return json.fact;
    }
  
    // Función para crear un artículo y colocar un texto dentro
    function createFactArticle(fact) {
      const article = document.createElement("article");
      article.innerText = fact;
      return article;
    }
  
    // Función para agregar un artículo a la cola
    function addFact(article) {
      marqueeContent.appendChild(article);
      observer.observe(article);
      marqueeContainer.style.setProperty('--marquee-content-width', `${marqueeContent.offsetWidth}px`); // Actualizar la variable CSS para el ancho del contenido
    }
  
    async function showFact() {
      const fact = await fetchFact();
      const article = createFactArticle(fact);
      addFact(article);
    }
  
    showFact();
  });
  



