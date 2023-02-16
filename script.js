// Obtener el elemento del título
const title = document.getElementById('title');

// Escuchar el evento 'mousemove' en el elemento del título
title.addEventListener('mousemove', (e) => {
  // Obtener la posición del puntero del ratón en relación con el elemento del título
  const xPos = e.offsetX;
  const yPos = e.offsetY;
  
  // Establecer el valor de 'background-position' para el elemento del título
  title.style.backgroundPosition = `${xPos}px ${yPos}px`;
});

// Restablecer el valor de 'background-position' cuando el puntero del ratón salga del elemento del título
title.addEventListener('mouseleave', () => {
  title.style.backgroundPosition = 'center';
});
