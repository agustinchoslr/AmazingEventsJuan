fetch('https://mindhub-xj03.onrender.com/api/amazing').then( response => response.json()).then(data => {
  console.log(data.events)
  
//aprendiendo método new Set y Array.from (autodidácticamente)
const categorias = Array.from(new Set(data.events.map(iterador => iterador.category)));

// Creando Checkboxes de categorías desde la api con un fragment //
let fragmentForCategories = document.createDocumentFragment();
const categoryChecks = document.querySelector("#category-checks");

categorias.forEach((categoria) => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("form-check-input");
  checkbox.id = `${categoria}`;
  const label = document.createElement("label");
  label.classList.add("form-check-label");
  label.htmlFor = `${categoria}`;
  label.textContent = categoria;

  const div = document.createElement("div");
  div.classList.add("form-check", "form-check-inline");
  div.appendChild(checkbox);
  div.appendChild(label);

  fragmentForCategories.appendChild(div);
});
categoryChecks.appendChild(fragmentForCategories);
// HASTA ACÁ TRAE LOS CHECKBOX DE LA API

//**********************capturando checkboxs *********************************** */

const checkboxCapturados = document.querySelectorAll('input[type=checkbox]')
// console. log(checkboxCapturados);
checkboxCapturados.forEach(checkbox => { checkbox.addEventListener('change', categoriasFiltradas) });

function categoriasFiltradas() {
  const inputsChequeados = Array.from(checkboxCapturados).filter(checkbox => checkbox.checked).map(function (checkbox) {
    return checkbox.id;
  });

  const eventosFiltrados = data.events.filter(evento => inputsChequeados.includes(evento.category))
  console.log(eventosFiltrados);


  // MOSTRANDO CONTENIDO A PARTIR DEL FILTRO DE CHECKBOX CAPTURADO***

  if (eventosFiltrados.length === 0) {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = "";
    console.log("No hay filtros seleccionados en los checkboxes");
    mostrarAllCards();
  } else {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = "";

    eventosFiltrados.forEach(function (evento) {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("m-1");
      cardDiv.innerHTML = `
      <div class="card" style="width: 15rem;">
        <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
        <div class="card-body">
          <div class="text-center">
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
          </div>
          <div class="d-flex justify-content-end mt-4">
            <a href="./details.html?id=${evento._id}" class="btn btn-primary justify-content-end">Details</a>
          </div>
        </div>
      </div>
    `;
      cardsContainer.appendChild(cardDiv);
    });
  }
}


//**********************capturando el BUSCADOR - buscador PROPIAMENTE DICHO *********************************** */


const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.trim();

  const eventosFiltrados = data.events.filter(function (event) {
    return event.name.toLowerCase().includes(searchText.toLowerCase());

  });

  actualizarCardsHtml(eventosFiltrados);


});




//**********************PARA CREAR CARDS A PARTIR DEL BUSCADOR *********************************** */


function crearCardHtml(evento) {
  return `
    <div class="m-1">
      <div class="card" style="width: 15rem;">
        <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
        <div class="card-body">
          <div class="text-center">
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
          </div>
          <div class="d-flex justify-content-end mt-4">
            <a href="./details.html?id=${evento._id}" class="btn btn-primary justify-content-end">Details</a>
          </div>
        </div>
      </div>
    </div>
  `;
}



function actualizarCardsHtml(eventosFiltrados) {
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = "";

  eventosFiltrados.forEach(function (evento) {
    const cardHtml = crearCardHtml(evento);
    cardsContainer.innerHTML += cardHtml;
  });
}

//MAIN CARDS DE EVENTOS.
let fragment = document.createDocumentFragment();
let contenedor = document.getElementById('cards-container');

mostrarAllCards();


function mostrarAllCards() {
  for (let evento of data.events) {
    let firstDiv = document.createElement('div');
    firstDiv.classList.add('m-1');
    firstDiv.innerHTML = `
     <div class="card" style="width: 15rem;">
       <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
       <div class="card-body">
         <div class="text-center">
           <h5 class="card-title">${evento.name}</h5>
           <p class="card-text">${evento.description}</p>
         </div>
         <div class="d-flex justify-content-end mt-4">
           <a href="./details.html?id=${evento._id}" class="btn btn-primary justify-content-end">Details</a>
         </div>
       </div>
     </div>
     </div>
   `;
    fragment.appendChild(firstDiv);
  }

  contenedor.appendChild(fragment);
}
// // FIN MAINCARDS DE EVENTOS 
// let m1 = document.getElementsByClassName("m-1")
// console.log(m1);
// if (m1.length == 0) {
// alert("NO SE ENCONTRÓ NADA")
// }
// URL SEARCH PARAMS

const id = new URLSearchParams(location.search).get("id")

})
.catch(error => console.error("Se produjo el siguiente error: " + error))







