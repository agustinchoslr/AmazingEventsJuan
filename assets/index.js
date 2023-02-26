// 3 - Capturando elemntos del DOM e insertando HTML con bucle (Fragment)

let contenedor = document.getElementById('cards-container');
let fragment = document.createDocumentFragment()

console.log(data.events);

for (let evento of data.events) {
    let firstDiv = document.createElement('div')
    firstDiv.classList.add('m-1')
    firstDiv.innerHTML = `
     <div class="card" style="width: 15rem;">
       <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
       <div class="card-body">
         <div class="text-center">
           <h5 class="card-title">${evento.name}</h5>
           <p class="card-text">${evento.description}</p>
         </div>
         <div class="d-flex justify-content-end mt-4">
           <a href="./details.html" class="btn btn-primary justify-content-end">Details</a>
         </div>
       </div>
     </div>
     </div>
   `;
    fragment.appendChild(firstDiv)
}

contenedor.appendChild(fragment)