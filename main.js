import './style.css'

// 20-10 
const arrayCartas = [
  {
    id: 1,
    color: "red",
    imagen: "https://i.pinimg.com/564x/37/8c/d1/378cd197abe24cb7bc051e7c9bfdf78b.jpg"
  },
  {
    id: 2,
    color: "pink",
    imagen: "https://i.pinimg.com/564x/37/8c/d1/378cd197abe24cb7bc051e7c9bfdf78b.jpg"
  },
  {
    id: 3,
    color: "orange",
    imagen: "https://i.pinimg.com/736x/bc/6e/c2/bc6ec226a3cddda674e122b550b289d7.jpg"
  },
  {
    id: 4,
    color: "blue",
    imagen: "https://i.pinimg.com/736x/bc/6e/c2/bc6ec226a3cddda674e122b550b289d7.jpg"
  },
  {
    id: 5,
    color: "black",
    imagen: "https://i.pinimg.com/736x/fb/d3/e8/fbd3e89a1422cd87986c0ca8193f474c.jpg"
  },
  {
    id: 6,
    color: "green",
    imagen: "https://i.pinimg.com/736x/fb/d3/e8/fbd3e89a1422cd87986c0ca8193f474c.jpg"
  },
  {
    id: 7,
    color: "yellow",
    imagen: "https://i.pinimg.com/736x/d8/f7/d8/d8f7d8040de7f979609923fee535c359.jpg"
  },
  {
    id: 8,
    color: "turquoise",
    imagen: "https://i.pinimg.com/736x/d8/f7/d8/d8f7d8040de7f979609923fee535c359.jpg"
  },
  {
    id: 9,
    color: "brown",
    imagen: "https://i.pinimg.com/736x/83/8d/ed/838dedfa19d900aaf62223ab19d766a1.jpg"
  },
  {
    id: 10,
    color: "gold",
    imagen: "https://i.pinimg.com/736x/83/8d/ed/838dedfa19d900aaf62223ab19d766a1.jpg"
  },
  {
    id: 11,
    color: "red",
    imagen: "https://i.pinimg.com/736x/1a/91/2e/1a912ee6496adf72a468cad7a903d39d.jpg"
  },
  {
    id: 12,
    color: "pink",
    imagen: "https://i.pinimg.com/736x/1a/91/2e/1a912ee6496adf72a468cad7a903d39d.jpg"
  },
  {
    id: 13,
    color: "orange",
    imagen: "https://i.pinimg.com/736x/7e/3a/5a/7e3a5af6baa666820b7f32f04227cfa1.jpg"
  },
  {
    id: 14,
    color: "blue",
    imagen: "https://i.pinimg.com/736x/7e/3a/5a/7e3a5af6baa666820b7f32f04227cfa1.jpg"
  },
  {
    id: 15,
    color: "black",
    imagen: "https://i.pinimg.com/736x/2c/1b/c9/2c1bc9d4d6815fa25ace493e807c9849.jpg"
  },
  {
    id: 16,
    color: "green",
    imagen: "https://i.pinimg.com/736x/2c/1b/c9/2c1bc9d4d6815fa25ace493e807c9849.jpg"
  },
  {
    id: 17,
    color: "yellow",
    imagen: "https://i.pinimg.com/736x/1b/bb/65/1bbb65048971002f81257cd20de9c70b.jpg"
  },
  {
    id: 18,
    color: "turquoise",
    imagen: "https://i.pinimg.com/736x/1b/bb/65/1bbb65048971002f81257cd20de9c70b.jpg"
  },
  {
    id: 19,
    color: "brown",
    imagen: "https://i.pinimg.com/736x/da/21/12/da21120ad8a8718924bee8986239da5d.jpg"
  },
  {
    id: 20,
    color: "gold",
    imagen: "https://i.pinimg.com/736x/da/21/12/da21120ad8a8718924bee8986239da5d.jpg"
  },

];
//                                                             /1.1 saber cuando se seleciona una carta
let numCartas = 0;
let carta1;
let carta2;
let puntuacion = 0;
arrayCartas.sort(() => Math.random() - Math.random());

const divApp = document.querySelector('#app');                 //crear h3
const puntuacionHTML = document.createElement("h3");           //agregarte texto
puntuacionHTML.textContent = `Puntuacion: ${puntuacion}`;      //insertarlo dentro del body antes del divApp
document.body.insertBefore(puntuacionHTML, divApp);

const resetValores = () => {
  numCartas = 0;
  carta1 = undefined;
  carta2 = undefined;
}

const resetCarta = (cartaGenerica) => {
  /* cartaGenerica.nodoHTML.style.backgroundColor = "#ba0000"; */
  cartaGenerica.nodoHTML.style.backgroundImage = 'url(https://img2.rtve.es/i/?w=1600&i=1657019154219.jpg)';
  cartaGenerica.nodoHTML.style.backgroundSize = 'revert-layer';
}

const comprobar = () => {
  console.log(carta1);

  if (carta1.datosCarta.imagen == carta2.datosCarta.imagen) {
    puntuacion++;
    puntuacionHTML.textContent = `Puntuacion: ${puntuacion}`;
    console.log(carta1);

    carta1.nodoHTML.classList.add("seleccionada");
    carta2.nodoHTML.classList.add("seleccionada");
    resetValores();

  } else {
    setTimeout(() => {
      resetCarta(carta1);
      resetCarta(carta2);
      resetValores();

    }, 1000);
  }
  if (puntuacion == 10) {
    alert("Ganaste");
  }
}

const seleccionar = (divCartaNodoHTML, datosDeCadaCarta) => {
  if (divCartaNodoHTML.classList.contains('seleccionada')) return;
  if (numCartas < 2) {
    //se selecciona una carta solo si el contador es menos que 2
    //y se le deja ver su color y se qyuta el backgroundImage. 
    numCartas++;
    /* divCartaNodoHTML.style.backgroundColor = datosDeCadaCarta.color; */
    divCartaNodoHTML.style.backgroundImage = `url('${datosDeCadaCarta.imagen}')`;
    divCartaNodoHTML.style.backgroundSize = `cover`;
  }
  //se selecciona la 1º carta
  if (numCartas == 1) {
    carta1 = {
      nodoHTML: divCartaNodoHTML,
      datosCarta: datosDeCadaCarta
    };
  }
  //se selecciona la 2ª carta
  if (numCartas == 2) {
    carta2 = {
      nodoHTML: divCartaNodoHTML,
      datosCarta: datosDeCadaCarta
    };
    comprobar();
  }
};

for (const datosDeCadaCarta of arrayCartas) {
  const divCartaNodoHTML = document.createElement('div');
  divCartaNodoHTML.classList.add('carta');
  divCartaNodoHTML.addEventListener('click', () => {
    seleccionar(divCartaNodoHTML, datosDeCadaCarta)
  });
  divApp.appendChild(divCartaNodoHTML);
};

const divButton = document.createElement('div');
const button = document.createElement('button');
divButton.className = 'divButton';
button.textContent = 'RESET';
button.className = "boton";
document.body.appendChild(divButton);
divButton.appendChild(button);

button.addEventListener('click', () => {
  puntuacion = 0;
  puntuacionHTML.textContent = `Puntuacion: ${puntuacion}`;
  resetValores();
  const cartas = document.querySelectorAll('.carta');
  for (const carta of cartas) {
    resetCarta({ nodoHTML: carta });
  }
});
