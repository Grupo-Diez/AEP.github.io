document.addEventListener("DOMContentLoaded", function() {
  function iniciarContadorConRetraso(contadorElemento, limite, intervalo) {
    var contador = 0;
    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          setTimeout(function() {
            function contar() {
              if (contador <= limite) {
                contadorElemento.textContent = contador;
                contador++;
                setTimeout(contar, intervalo); 
              }
            }
            contar();
          }, 300); // Retraso de un segundo
          observer.unobserve(contadorElemento);
        }
      });
    }, { threshold: 0.5 }); // Si al menos la mitad del elemento está visible, inicia el contador

    observer.observe(contadorElemento);
  }
  iniciarContadorConRetraso(document.querySelector(".contador"), 100, 40);
  iniciarContadorConRetraso(document.querySelector(".contador2"), 80, 51);
  iniciarContadorConRetraso(document.querySelector(".contador3"), 85, 52);
});
