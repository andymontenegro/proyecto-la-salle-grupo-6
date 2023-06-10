const myQuery = `
query metros ($cursor:String) {
    metroStations(first:2 after:$cursor ){
      edges {
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
    
  
  }
`

const url = "https://healthy-fox-82.deno.dev/graphql";
const variables = { cursor: null };

const response = await fetch(url, {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({ query: myQuery, variables: variables })
})
const data = await response.json();
console.log('json metro station is: ', data);



