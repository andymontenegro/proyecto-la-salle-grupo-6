const loader = document.querySelector('.loader');

// Show the loader
loader.classList.remove('hidden');



let jsonData = null; // Declare the jsonData variable
let userLocation = { latitude: null, longitude: null };
const defaultLocation = { latitude: 41.3903901, longitude: 2.166456 };

const myQuery = `
query ObtenerEstaciones ($coord_lat: Float!, $coord_long: Float!)
{
  bicing: bikeStation(
    findBy: { closest: { latitude: $coord_lat, longitude: $coord_long } }
  ) {
    ...on BikeStation {
      name
      coordinates {
        longitude
        latitude
      }
      available {
        bikes {
          electrical
          mechanical
        }
      }
    }
  }
  estacion_metro: metroStation(
     findBy: { closest: { latitude: $coord_lat, longitude: $coord_long } }
  ) {
    ...on MetroStation {
      name
      lines
      coordinates {
        longitude
        latitude
      }
      
    }
  }
  
  parada_bus: busStop(
     findBy: { closest: { latitude: $coord_lat, longitude: $coord_long } }
  ) {
    ...on BusStop {
      name
      location {
        address
        coordinates {
        longitude
        latitude
      	}
      }
      
    }
  }
}
`
async function getGeolocation() {
    if ('geolocation' in navigator) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const { latitude, longitude } = position.coords;
                    userLocation.latitude = latitude;
                    userLocation.longitude = longitude;
                    console.log("User Latitude: " + latitude);
                    console.log("User Longitude: " + longitude);
                    resolve();
                },
                function (error) {
                    console.error("Error getting geolocation:", error);
                    userLocation.latitude = defaultLocation.latitude;
                    userLocation.longitude = defaultLocation.longitude;
                    resolve();
                    //reject(error);
                }
            );
        });
    } else {
        console.log("Geolocation is not supported by this browser.");

        return Promise.resolve(); // Resolve immediately
    }
}

async function fetchData() {
    try {
        await getGeolocation();

        const url = "https://healthy-fox-82.deno.dev/graphql";
        const variables = {
            coord_lat: userLocation.latitude || defaultLocation.latitude,
            coord_long: userLocation.longitude || defaultLocation.longitude
        };

        const response = await fetch(url, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ query: myQuery, variables: variables })
        });

        jsonData = await response.json(); // Assign the response directly to jsonData
        console.log('json metro station is:', jsonData);
        loader.classList.add('hidden');

    } catch (error) {
        console.error("Error:", error);
        loader.classList.add('hidden');
        renderInfo("No se ha podido acceder a la geolocalización \n inténtalo mas tarde.:", "p", "tmb-info-heading")
    }
}

// Call fetchData to populate the jsonData
await fetchData();

// Access the jsonData variable here
console.log('jsonData:', jsonData);

// definienoo valores extraidos de la data
let estacion_bicing = jsonData.data.bicing.name;
let parada_bus = { nombre: jsonData.data.parada_bus.name, direccion: jsonData.data.parada_bus.location.address };
let metro = jsonData.data.estacion_metro;
console.log('Parada de metro mas cercana es : ', metro.name);


//-------------------- UI rendering

const section = document.querySelector('#tmb-info');

function renderInfo(info, tag = "article", style = "visible") {
    const domContainer = document.createElement(tag);
    domContainer.innerText = info
    const tagInsert = section.appendChild(domContainer);
    domContainer.classList.add(style);
    //console.log('tagInsert: ', tagInsert);
    //return tagInsert;

}

function renderLines() {
    for (const line of metro.lines) {
        const myspan = document.createElement("span");
        myspan.innerText = line
        section.appendChild(myspan);
        switch (line) {
            case 'L1':
                myspan.classList.add("l1");
                break

            case 'L2':
                myspan.classList.add("l2");
                break

            case 'L3':
                myspan.classList.add("l3");
                break

            case 'L4':
                myspan.classList.add("l4");
                break

            case 'L5':
                myspan.classList.add("l5");
                break

            case 'L6':
                myspan.classList.add("l6");
                break

            case 'L7':
                myspan.classList.add("l7");
                break

            case 'L8':
                myspan.classList.add("l8");
                break

            case 'L9S':
                myspan.classList.add("l9");
                break

            case 'L9N':
                myspan.classList.add("l9");
                break

            case 'L10S':
                myspan.classList.add("l10");
                break

            case 'L10N':
                myspan.classList.add("l10");
                break

            case 'L11':
                myspan.classList.add("l11");
                break

            default:
                console.log("Linea de metro desconocida, ha habido un error al cargar la información");
        }
    }



}

renderInfo("La estación de metro más cercana es:", "p", "tmb-info-heading")
renderInfo(metro.name, "article", "metro-icon");
renderLines();

renderInfo("La parada de bus más cercana es: ", "p", "bus-info-heading-margin-t")
renderInfo(`${parada_bus.nombre}. \n Está en ubicada en ${parada_bus.direccion}`, "span");


renderInfo(`La estación de bicing más cercana esta en `, "p", "bicing-info-heading-margin-t");
renderInfo(estacion_bicing);



