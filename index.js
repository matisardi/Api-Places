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

const cargarFotos = async() => {
    try {
        const respuesta = await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=cities+argentina&key=AIzaSyDdiWYYlIp2G_dR5NVKcY_SN2d1-z3maE0`);
        console.log(respuesta);
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            console.log(datos.results);
        // const detalle = await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJvZaFMsjKvJURieIAHSNHtkM&key=AIzaSyDdiWYYlIp2G_dR5NVKcY_SN2d1-z3maE0`);
            let imagenes = "";
            datos.results.forEach(foto => {
                imagenes += `
                    <div class="lugar">
                        <img class="poster" src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${foto.photos[0].photo_reference}&key=AIzaSyDdiWYYlIp2G_dR5NVKcY_SN2d1-z3maE0">
                        <h3 class="titulo">${foto.name}</h3>
                        <p>${foto.formatted_address}</p>
                    </div>
                `;
            });
            document.getElementById("contenedor").innerHTML = imagenes;
        }
    } catch (error) {
        console.log(error.message);
    }
}

cargarFotos();
