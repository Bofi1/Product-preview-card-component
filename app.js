let imagen = document.getElementById("miImagen");

function cargar() {
  if (window.innerWidth <= 767) {
    console.log("fondo para mobile");
    imagen.src = "images/image-product-mobile.jpg";
  } else {
    console.log("fondo para desktop");
    imagen.src = "images/image-product-desktop.jpg";
  }
}

function resize() {
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 767) {
      console.log("fondo para mobile");
      imagen.src = "images/image-product-mobile.jpg";
    } else {
      console.log("fondo para desktop");
      imagen.src = "images/image-product-desktop.jpg";
    }
  });
}

cargar();
resize();
