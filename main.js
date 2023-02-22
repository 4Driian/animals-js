const animal = {
    nombreComun: "",
    nombreCientifico: "",
    tipoSangre: "",
    dieta: "",
    reproduccion: "",
    habitat: "",
    patas: 0,
    aletas: 0,
    pelo: "",
    escamas: "",
    plumas: "",
    proteccionCorporal: "",
    color: "",
  }
  
  const animales = [
    {
      nombreComun: "Red Panda",
      nombreCientifico: "Ailurus fulgens",
      tipo: "Mammals",
      tipoSangre: "Hot",
      dieta: "Omnivore",
      reproduccion: "viviparous",
      habitat: "Earth",
      patas: 4,
      aletas: 0,
      escamas: "no",
      plumas: "no",
      proteccionCorporal: "no",
      color: "Red, white and brown",
    },
    {
      nombreComun: "Raccoons",
      nombreCientifico: "Procyon lotor",
      tipo: "Mammals",
      tipoSangre: "Hot",
      dieta: "Omnivore",
      reproduccion: "viviparous",
      habitat: "Earth",
      patas: 4,
      aletas: 0,
      escamas: "no",
      plumas: "no",
      proteccionCorporal: "no",
      color: "grey, white and black",
    },
    {
        nombreComun: "Red Fox",
        nombreCientifico: "Vulpes vulpes",
        tipo: "Mammals",
        tipoSangre: "Hot",
        dieta: "Omnivore",
        reproduccion: "viviparous",
        habitat: "Earth",
        patas: 4,
        aletas: 0,
        escamas: "no",
        plumas: "no",
        proteccionCorporal: "no",
        color: "red, white and black",
      },
    // ...otros animales
  ];
  
  function mostrarGaleria() {
    const galeria = document.querySelector("#galeria");
    galeria.innerHTML = "";
    animales.forEach((animal) => {
      const div = document.createElement("div");
      div.classList.add("animal");
      div.innerHTML = `
        <img src="img/${animal.nombreComun}.jpg" alt="${animal.nombreComun}">
        <h3>${animal.nombreComun}</h3>
      `;
      div.addEventListener("click", () => mostrarDetalle(animal));
      galeria.appendChild(div);
    });
  }
  
  function mostrarDetalle(animal) {
    const detalle = document.querySelector("#detalle");
    detalle.innerHTML = `
      <img src="img/${animal.nombreComun}.jpg" alt="${animal.nombreComun}">
      <h2>${animal.nombreComun}</h2>
      <p><strong>Nombre científico:</strong> ${animal.nombreCientifico}</p>
      <p><strong>Tipo de sangre:</strong> ${animal.tipoSangre}</p>
      <p><strong>Dieta:</strong> ${animal.dieta}</p>
      <p><strong>Reproducción:</strong> ${animal.reproduccion}</p>
      <p><strong>Hábitat:</strong> ${animal.habitat}</p> `
    }