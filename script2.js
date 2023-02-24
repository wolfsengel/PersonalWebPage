  function buscar() {
    // Obtener el término de búsqueda del input
    const searchTerm = document.getElementById("input-busqueda").value.toLowerCase();
  
    // Obtener todas las imágenes del DOM
    const images = document.getElementsByTagName("img");
  
    // Iterar sobre cada imagen y comprobar si contiene el término de búsqueda en sus data-tags
    for (let i = 0; i < images.length; i++) {
      const imageTags = images[i].getAttribute("data-tags").toLowerCase();
      const description = images[i].nextElementSibling;
  
      if (imageTags.includes(searchTerm)) {
        // Si la imagen contiene el término de búsqueda, hacerla visible
        images[i].style.display = "block";
        if (description && description.tagName === "P") {
          description.style.display = "block";
        }
      } else {
        // Si la imagen no contiene el término de búsqueda, ocultarla
        images[i].style.display = "none";
        if (description && description.tagName === "P") {
          description.style.display = "none";
        }
      }
    }
  }
  
  