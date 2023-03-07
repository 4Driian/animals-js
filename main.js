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