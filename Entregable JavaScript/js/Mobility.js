const myquery  = `query metros ($cursor: String){
    metroStations (first: 2 after:$cursor){
      edges{
        node {
          name
          coordinates {
            latitude
            longitude
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }`

  //EndCursor no define el final 
 

  //query lo que vamos a pasarle a la api para que nos devuelva lo que queremos

  const url = new URL("https://barcelona-urban-mobility-graphql-api.netlify.app/graphql");
  //url de la api

  const variables ={cursor:null}

  url.searchParams.set("query",myquery)
  url.searchParams.set("variables",JSON.stringify(variables))

  console.log("New URL: " + url);

  const response = await fetch(url)
/*  const response = await fetch(url), { 
    method: "GET",
    mode: "no-cors",
    headers:{"content-type":"application/json"},
    body: JSON.stringify({query:myquery,variables:variables})
    //Fetch espera la url, y despues un string de las opciones, en las cuales ponemos el metodo POST, 
    //y desp el body hay que pasarlo estilo JSON, y este tambien necesita mode para que nos autorice + header para que sepa que solicito GraphQL
    //un objeto con el body + las variables
}) */
const text = await response.json();

//Mostramos cada nombre de la station

for (const station of text.data.metroStations.edges){
    console.log(station.node.name);
}


const nextPage = text.data.metroStations.pageInfo.endCursor;
variables.cursor = nextPage;
url.searchParams.set("variables",JSON.stringify(variables));
const response2 = await fetch(url);
const text2 = await response2.json();
for (const station of text2.data.metroStations.edges){
    console.log(station.node.name);
}