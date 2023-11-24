// const btnAnterior = document.getElementById("btnAnterior");
// const btnSiguiente = document.getElementById("btnSiguiente");
// let pagina = 1;

// btnAnterior.addEventListener("click", ()=>{
//     if (pagina > 1) {
//         pagina -= 1;
//         cargarFotos();
//     }
// });

// btnSiguiente.addEventListener("click", ()=>{
//     if (pagina < 1000) {
//         pagina += 1;
//         cargarFotos();
//     }
// });

function initMap() {
    let imagenes = "";
    const map = new google.maps.Map(document.getElementById("map"), {});
    const service = new google.maps.places.PlacesService(map);
    const requestSearch = {
        query: 'ciudades en argentina'
    };
    service.textSearch(requestSearch, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log(results);

            for (let i=0; i < results.length; i++) {
                const requestDetails = {
                    placeId: results[i].place_id,
                    fields: ["name", "photos", "rating", "reviews", "url", "website"],
                };
                service.getDetails(requestDetails, (place, status) => {
                    if (
                        status === google.maps.places.PlacesServiceStatus.OK &&
                        place
                    ) {
                    console.log(place);
                    imagenes += `
                        <div class="lugar">
                            <img class="poster" src=${results[i].photos[0].getUrl()}>
                            <h3 class="titulo">${results[i].name}</h3>
                            <p>${results[i].formatted_address}</p>
                            <a href="${place.url}">Mapa</a>
                        </div>
                    `;
                    document.getElementById("contenedor").innerHTML = imagenes;
                    }
                });
            }
        }
    });
}

window.initMap = initMap;
