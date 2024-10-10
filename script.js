var swiper = new Swiper(".mySwiper-1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
  
  });
  
  var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints : {
      0: {
        slidesPerView: 1
      },
      520: {
        slidesPerView: 2
      },
      950: {
        slidesPerView: 3
      }
    }
    
  });
  
  
    //carrito de  mercado
  
    const carrito = document.getElementById('carrito');
    const elementos1 = document.getElementById('lista-1');
    const elementos2 = document.getElementById('lista-2');
    const elementos3 = document.getElementById('lista-3');
    const lista = document.querySelector('#lista-carrito tbody');
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
  
    cargarEventListeners();


    //elementos que se agregaran al carrito
    // yamel guaca ficha 2758368
    // proyecto minimarket
  
    function cargarEventListeners() {
      elementos1.addEventListener('click', comprarElemento)
      elementos2.addEventListener('click', comprarElemento);
      elementos3.addEventListener('click', comprarElemento);
      carrito.addEventListener('click', eliminarElemento);
  
      vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
  
    }
  
    function comprarElemento(e) {
      e.preventDefault();
      if(e.target.classList.contains('agregar-carrtito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
      }
    }
  

   

  function leerDatosElemento(elemento) {
    const infoElemento = {
      imagen: elemento.querySelector('img').src,
      titulo: elemento.querySelector('h3').textContent,
      precio: elemento.querySelector('.precio').textContent,
      precio: elemento.querySelector('a').getAttribute('data-id')      
    }
  
    insertarCarrito(infoElemento);
  
  }
  
   // elaborado por yamel guaca ficha 2758368
  //de la creacion de la pagina web para un minisuper mercado
  //se emplea javaScript

  // se crea la clase insertarCarrito

  function insertarCarrito(elemento) {

     // se crea el construtor
     //ses crean los elementos que seran agregados al carrito
  
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>
      <img src="${elemento.imagen}" width=100 >
    </td>
  
    <td>
      ${elemento.titulo}
    </td>
  
    <td>
      ${elemento.precio}
      </td>
  
    <td>
      <a href="#" class="borrar" data-id="${elemento.id}">X</a>
    </td>
  
    `;
  
      lista.appendChild(row);
  
  }

  // elaborado por yamel guaca ficha 2758368
  //de la creacion de la pagina web para un minisuper mercado
  //se emplea javaScript

  // boton de borrar copmras carrito de mercado

  // se crea la clase 
  // se crea el construtor
  // se emplea propiedad privada let
  // nombres en Pascal Case
  
  function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
  
        //metodo
        
  if(e.target.classList.contains('borrar')) {
    e.target.parentElement.parentElement.revove();
    elemento = e.target.parentElement.parentElement;
    elementoId = elemento.querySelector('a').getAttribute('data-id');
  }
  }
  
  function vaciarCarrito() {
    while(lista.firstChild) {
      lista.removeChild(lista.firstChild);
    }
    return false;
  
  }
  
  