/*let enlaces = document.querySelectorAll("a.nav-link");
for (let link of enlaces){
    document.addEventListener("keyup", function(event){
        //console.log("event: " + event);
        if ( link.dataset.key === event.key)  {
            link.click();
        }
    })
}*/

document.addEventListener("keyup", function(event){
   const maybeLink =  document.querySelector(`a.nav-link[data-key="${event.key}"]`);
    if (maybeLink) {maybeLink.click()};
})


document.querySelectorAll
for (let input of document.querySelectorAll("input, textarea")){
    input.addEventListener("keyup",function(evente){evente.stopPropagation()});//un evento en este input no lo propaga hacia arriba y no llega a document para que se me cambie
};

for (let input of document.querySelectorAll("input[type=tel]")){
    input.addEventListener("keydown", function(event){
        if (isNaN(parseInt(event.key))) {
            event.preventDefault();
        }
        
    })
};
