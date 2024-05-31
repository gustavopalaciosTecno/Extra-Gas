/// MENU RESPONSIVE

var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar");
    enlaces = document.getElementById("enlaces");

    btnMenuOpen.addEventListener("click", function(){
        menuResponsive.classList.add("active");
    });

    btnMenuClose.addEventListener("click", function(){
        menuResponsive.classList.remove("active");
    });

    enlaces.addEventListener("click", function(){
        menuResponsive.style.transitionDelay = "0.5s";
        menuResponsive.classList.remove("active");    
    })

    /* slider de productos*/

    var contenedor = document.querySelector('.slider'),
        btnIzquierda = document.getElementById('btn-izquierda'),
        btnDerecha = document.getElementById('btn-derecha');
      
            btnDerecha.addEventListener("click",function() {
            contenedor.scrollLeft += contenedor.offsetWidth;
        });
            btnIzquierda.addEventListener("click",function() {
            contenedor.scrollLeft -= contenedor.offsetWidth;

        });

        /*validación de formulario*/

        var formulario = document.getElementById("formulario");

          function validar(e){
              var inputNombre = document.getElementById("nombre"),
                  inputEmail = document.getElementById("email"),
                  inputComents = document.getElementById("comentarios");
                  
                  if (inputNombre.value == 0 || inputEmail.value == 0 || inputComents.value == 0){
                      e.preventDefault();
                      alert("Datos vacíos");
                  }else{
                    e.preventDefault();
                    alert("Datos enviados con éxito");
                    inputNombre.value = "";
                    inputEmail.value = "";
                    inputComents.value = "";
                  }    

                  
          }  




        formulario.addEventListener("submit", validar);

       
