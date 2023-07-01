function fetchCatFact() {
    const apiUrl = 'https://catfact.ninja/fact';
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const fact = data.fact;
            const marquee = document.getElementById('cats-facts');
            marquee.textContent = fact;
        })
        .catch(error => {
            console.error('Error fetching cat fact:', error);
        });
}

// llama función  que carga el api y luego al terminar la animacion
fetchCatFact();
document.querySelector('#cats-facts').addEventListener('animationiteration', fetchCatFact);