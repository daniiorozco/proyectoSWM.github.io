/*----- cambio de pantalla entre imagen y especificaciones---- */

/**
 *segun el estado de las secciones header o menu. 
 junto con la funcion toggle me alterna entre ocultar 
 y poner a la vista las secciones.
 */
var vista = () => {
    $('.cabecera').toggle();
    $('.menu').toggle();
}


$(window).resize(() => {
    let width = $(window).width();

    if (width < 735) {
        $('.cabecera').show();
        $('.menu').show();
        //forma en jquery
        $('.descripcionArticulos').css('margin', '0 auto')
        //forma en vanilla
        /* tech.style.margin = "0 auto"; */
    } else {
if( $('.cabecera').is(":visible")){
    $('.menu').hide();
}
      

    }

});


/* -------hover en iconos y activa el check---------- */
//oculto el check
 $(".imgCheck").hide()

/* -----------hover--------- */
/* guardo la imagen en mi variable */
var check = document.querySelector('.imgCheck')

/**
 * recibe como parametro el tipo de imagen cuando ejecuta el 
 * evento onmouseover y depende de cual reciba se muestra el check en la
 * posicion correspondiente.
 * @param {*} tipo 
 */
function funcHover (tipo){
   
    $('.imgCheck').show();

  
    switch (tipo) {
        case "helmet":
            $('.imgCheck').css('bottom', '480');
            $('.imgCheck').css('right', '250');
            break;
        case "manual":
            check.style.bottom = '140px';
            check.style.right = '100px';
         /*    $('.imgcheck').css('bottom', '150');
            $('.imgcheck').css('right', '240'); */
            break;
        case "remote":
            check.style.bottom = '180px';
            check.style.right = '380px';
          /*   $('.imgcheck').css('bottom', '180');
            $('.imgcheck').css('right', '380'); */
            break;
        case "bands":
            check.style.bottom = '150px';
            check.style.right = '320px';
           /*  $('.imgcheck').css('bottom', '150');
            $('.imgcheck').css('right', '320'); */
            break;
        case "usb":
            check.style.bottom = '130px';
            check.style.right = '400px';
         /*    $('.imgcheck').css('bottom', '130');
            $('.imgcheck').css('right', '450'); */
            break;

    }
}

/**
 * cuando el mouse salga de la imagen check 
 * la oculta
 */
var backMouse = () => {
    $('.imgCheck').hide()
}
