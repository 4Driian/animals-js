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