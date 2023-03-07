class animal {
  constructor(
    nombre,
    nombrecientifico,
    clase,
    tipoSangre,
    dieta,
    reproduccion,
    habitat,
    patas,
    aletas,
    escamas,
    plumas,
    proteccionCorporal,
    color,
    imagen
  ) {
    this.nombre = nombre;
    this.nombrecientifico = nombrecientifico;
    this.clase = clase;
    this.tipoSangre = tipoSangre;
    this.dieta = dieta;
    this.reproduccion = reproduccion;
    this.habitat = habitat;
    this.patas = patas;
    this.aletas = aletas;
    this.escamas = escamas;
    this.plumas = plumas;
    this.proteccionCorporal = proteccionCorporal;
    this.color = color;
    this.imagen = imagen;
  }

  crearHtml() {
    const animalHtml = document.createElement("div");
    animalHtml.classList.add("animal");
    animalHtml.innerHTML = `
        <img src="${this.imagen}" alt="${this.nombre}">
        <h3>${this.nombre}</h3>
      `;
    return animalHtml;
  }

  asignarEventoClick() {
    const animalHtml = this.crearHtml();
    animalHtml.addEventListener("click", () => {
      this.abrirModal();
    });
    return animalHtml;
  }

  abrirModal() {
    const modalHtml = document.createElement("div");
    modalHtml.classList.add("modal");
    modalHtml.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2>${this.nombre}</h2>
          <img src="${this.imagen}" alt="${this.nombre}">
          <p><strong>Nombre:</strong> ${this.nombre}</p>
          <p><strong>Nombre Cientifico:</strong> ${this.nombrecientifico}</p>
          <p><strong>Clase:</strong> ${this.clase}</p>
          <p><strong>Tipo de sangre:</strong> ${this.tipoSangre}</p>
          <p><strong>Dieta:</strong> ${this.dieta}</p>
          <p><strong>Reproducción:</strong> ${this.reproduccion}</p>
          <p><strong>Hábitat:</strong> ${this.habitat}</p>
          <p><strong> Patas :</strong> ${this.patas}</p>
          <p><strong> Aletas:</strong> ${this.aletas}</p>
          <p><strong> Escamas:</strong> ${this.escamas}</p>
          <p><strong> Plumas:</strong> ${this.plumas}</p>
          <p><strong> Protección:</strong> ${this.proteccionCorporal}</p>
          <p><strong> Color:</strong> ${this.color}</p>
        </div>
      `;
    document.body.appendChild(modalHtml);

    let closeButton = modalHtml.querySelector(".close");
    closeButton.addEventListener("click", () => {
      modalHtml.remove();
    });
  }
  asignarEventoClick() {
    let animalHtml = this.crearHtml();
    animalHtml.addEventListener("click", () => {
      this.abrirModal();
    });
    return animalHtml;
  }
}

PandaRojo = new animal(
  "Panda rojo",
  "Ailurus fulgens",
  "Mamiferos",
  "Caliente",
  "Omnivoro",
  "viviparos",
  "Tierra",
  4,
  0,
  "No",
  "No",
  "No",
  "Color rojo, blanco y cafe",
  "https://res.cloudinary.com/adriandeveloper/image/upload/v1678196514/samples/animals/mammals-RedPanda2_xfvxmz.png"
);
Mapache = new animal(
  "Mapache",
  "Procyon lotor",
  "Mamiferos",
  "Caliente",
  "Omnivoro",
  "viviparos",
  "Tierra",
  4,
  0,
  "No",
  "No",
  "No",
  "grey, white and black",
  "https://res.cloudinary.com/adriandeveloper/image/upload/v1678196515/samples/animals/mammals-Raccoon_i5itgc.png"
);
ZorroRojo = new animal(
  "Zorro Rojo",
  "Vulpes vulpes",
  "Mamiferos",
  "Caliente",
  "Omnivoro",
  "viviparos",
  "Tierra",
  4,
  0,
  "No",
  "No",
  "No",
  "Rojo, blanco y negro",
  "https://res.cloudinary.com/adriandeveloper/image/upload/v1678196562/samples/animals/mammals-Fox2_lmhcvk.png"
);
Gecko = new animal(
  "Gecko",
  "Palmatogecko rangei",
  "Reptiles",
  "Frio",
  "Omnivoro",
  "Oviparos",
  "Tierra",
  4,
  0,
  "No",
  "No",
  "No",
  "Verde",
  "https://res.cloudinary.com/adriandeveloper/image/upload/v1678196592/samples/animals/Reptiles-Gecko_grjbpo.png"
);
Camaleon = new animal(
  "Cameleon",
  "Trioceros melleri",
  "Reptiles",
  "Frio",
  "Omnivoro",
  "Oviparos",
  "Tierra",
  4,
  0,
  "No",
  "No",
  "No",
  "Verde",
  "https://res.cloudinary.com/adriandeveloper/image/upload/v1678196568/samples/animals/Reptiles-chameleon_hgirlw.png"
);
TortugaVerde = new animal(
  "Tortuga verde marina",
  "Chelonia mydas",
  "Reptiles",
  "Frio",
  "Herbivoro",
  "Oviparos",
  "Agua",
  0,
  4,
  "no",
  "no",
  "no",
  "Verde / Amarillo",
  "https://res.cloudinary.com/adriandeveloper/image/upload/v1678196575/samples/animals/Reptiles-tortoise2_yifxqf.png"
);
RanaOjosrojos = new animal(
  "Rana de ojos rojos",
  "Agalychnis callidryas",
  "Anfibios",
  "Frio",
  "Carnivoro",
  "Oviparos",
  "Tierra",
  4,
  0,
  "No",
  "No",
  "No",
  "verde, naranja y blanco",
  "https://res.cloudinary.com/adriandeveloper/image/upload/v1678196539/samples/animals/amphibians-frog_qnfcze.png"
);
Axo = new animal(
  "Axolotls",
  "Ambystoma mexicanum",
  "Anfibios",
  "Frio",
  "Carnivoro",
  "Oviparos",
  "Agua",
  4,
  0,
  "No",
  "No",
  "No",
  "rosa / gris",
  "https://res.cloudinary.com/adriandeveloper/image/upload/v1678196535/samples/animals/amphibians-axolotl2_agigxy.png"
);
RanaToro = new animal(
  "Ranas toro americanas",
  "Lithobates catesbeianus",
  "Anfibios",
  "Frio",
  "Carnivoro",
  "Oviparos",
  "Agua",
  4,
  0,
  "No",
  "No",
  "No",
  "Verde",
  "https://res.cloudinary.com/adriandeveloper/image/upload/v1678196539/samples/animals/amphibians-bullfrog_z5wc5m.png"
);
PavoReal = new animal(
  "Pavo real indio",
  "Pavo cristatus",
  "Aves",
  "Caliente",
  "Omnivoro",
  "Oviparos",
  "Tierra",
  2,
  0,
  "No",
  "Si",
  "No",
  "azul, verde y negro",
  "https://res.cloudinary.com/adriandeveloper/image/upload/v1678196598/samples/animals/Birds-IndianPeafowl2_jswrnc.png"
);
Buho = new animal(
  "Buho",
  "Bubo scandiaca",
  "Aves",
  "Caliente",
  "Carnivoro",
  "Oviparos",
  "Tierra",
  2,
  0,
  "No",
  "Si",
  "No",
  "Blanco",
  "https://res.cloudinary.com/adriandeveloper/image/upload/v1678196581/samples/animals/Birds-Owl_agt3eu.png"
);
Pato = new animal(
  "Pato azulón",
  "Bubo scandiaca",
  "Aves",
  "Caliente",
  "Omnivoro",
  "Oviparos",
  "Tierra",
  2,
  0,
  "No",
  "Si",
  "No",
  "griego, blanco y negro",
  "https://res.cloudinary.com/adriandeveloper/image/upload/v1678196581/samples/animals/Birds-Duck_vsyra8.png"
);
PezGlobo = new animal(
  "Pez globo",
  "Tetraodontidae",
  "Pez",
  "Frio",
  "Carnivoro",
  "Oviparos",
  "Agua",
  0,
  2,
  "Si",
  "No",
  "Si",
  "Cafe",
  "https://res.cloudinary.com/adriandeveloper/image/upload/v1678196547/samples/animals/fish-pufferfish_uq3q6e.png"
);
CaballoMar = new animal(
  "Caballito de Mar",
  "Hippocampus",
  "Pez",
  "Frio",
  "Carnivoro",
  "viviparos",
  "Agua",
  0,
  3,
  "Si",
  "No",
  "No",
  "Variado",
  "https://res.cloudinary.com/adriandeveloper/image/upload/v1678196548/samples/animals/fish-seahorse2_bjeujq.png"
);
Tiburon = new animal(
  "Tiburón Toro",
  "Carcharhinus leucas",
  "Pez",
  "Frio",
  "Carnivoro",
  "viviparos",
  "Agua",
  0,
  3,
  "No",
  "No",
  "Si",
  "Cafe",
  "https://res.cloudinary.com/adriandeveloper/image/upload/v1678196549/samples/animals/fish-shark2_ss23mo.png"
);
Luciernaga = new animal(
  "Luciernaga",
  "Lampyridae",
  "Invertebrados",
  "Frio",
  "Omnivoro",
  "Viviparos",
  "Tierra",
  4,
  0,
  "No",
  "No",
  "No",
  "rojo, negro y blanco",
  "https://res.cloudinary.com/adriandeveloper/image/upload/v1678196551/samples/animals/invertebrates-firefly_f7yjhg.png"
);
Mariquita = new animal(
  "Mariquita",
  "Coccinellidae",
  "Invertebrados",
  "Caliente",
  "Omnivoro",
  "viviparos",
  "Tierra",
  6,
  0,
  "No",
  "No",
  "Si",
  "rojo y negro",
  "https://res.cloudinary.com/adriandeveloper/image/upload/v1678196558/samples/animals/invertebrates-ladybug_w7gbl7.png"
);
Pulpo = new animal(
  "Pulpo",
  "Octopus vulgaris",
  "Invertebrados",
  "Caliente",
  "Carnivoro",
  "viviparos",
  "Agua",
  8,
  0,
  "No",
  "No",
  "Si",
  "Rosado",
  "https://res.cloudinary.com/adriandeveloper/image/upload/v1678196523/samples/animals/octopus-oc1_svs1zj.png"
);

let listaAnimales = [
  PandaRojo,
  Mapache,
  ZorroRojo,
  Gecko,
  Camaleon,
  TortugaVerde,
  RanaOjosrojos,
  Axo,
  RanaToro,
  PavoReal,
  Buho,
  Pato,
  PezGlobo,
  CaballoMar,
  Tiburon,
  Luciernaga,
  Mariquita,
  Pulpo,
];


function mostrarAnimales(filtro) {
  const galeria = document.querySelector(".galeria");
  galeria.innerHTML = "";

  let animalesFiltrados = listaAnimales;
  switch (filtro) {
    case "clase":
      animalesFiltrados = listaAnimales.filter(
        (animal) => animal.clase === filtroSeleccionado
      );
      break;
    case "tipoSangre":
      animalesFiltrados = listaAnimales.filter(
        (animal) => animal.tipoSangre === filtroSeleccionado
      );
      break;
    case "dieta":
      animalesFiltrados = listaAnimales.filter(
        (animal) => animal.dieta === filtroSeleccionado
      );
      break;
    case "reproduccion":
      animalesFiltrados = listaAnimales.filter(
        (animal) => animal.reproduccion === filtroSeleccionado
      );
      break;
    case "habitat":
      animalesFiltrados = listaAnimales.filter(
        (animal) => animal.habitat === filtroSeleccionado
      );
      break;
      /*case "Todos":
      animalesFiltrados = listaAnimales.filter(
        (animal) => animal === filtroSeleccionado
      );
      break;*/
    default:
      animalesFiltrados;
  }

  animalesFiltrados.forEach((animal) => {
    const animalHtml = animal.asignarEventoClick();
    galeria.appendChild(animalHtml);
  });
}



let selectClase = document.querySelector("#filtro-clase");
selectClase.addEventListener("change", () => {
  filtroSeleccionado = selectClase.value;
  mostrarAnimales("clase");
});

const selectTipoSangre = document.querySelector("#filtro-tipo-sangre");
selectTipoSangre.addEventListener("change", () => {
  filtroSeleccionado = selectTipoSangre.value;
  mostrarAnimales("tipoSangre");
});

const selectDieta = document.querySelector("#filtro-dieta");
selectDieta.addEventListener("change", () => {
  filtroSeleccionado = selectDieta.value;
  mostrarAnimales("dieta");
});

const selectReproduccion = document.querySelector("#filtro-reproduccion");
selectReproduccion.addEventListener("change", () => {
  filtroSeleccionado = selectReproduccion.value;
  mostrarAnimales("reproduccion");
});

const selectHabitat = document.querySelector("#filtro-habitat");
selectHabitat.addEventListener("change", () => {
  filtroSeleccionado = selectHabitat.value;
  mostrarAnimales("habitat");
});

/*const selectTodos = document.querySelector("#Todos");
selectTodos.addEventListener("change", () => {
  filtroSeleccionado = selectTodos.value;
  mostrarAnimales("Todos");
});*/

let filtroSeleccionado = "todos";
mostrarAnimales(filtroSeleccionado);