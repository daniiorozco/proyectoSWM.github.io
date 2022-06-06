

/**
 *segun el estado de las secciones header o menu. 
 junto con la funcion toggle me alterna entre ocultar 
 y poner a la vista las secciones.
 */
var vista = () =>{
$('.cabecera').toggle();
$('.menu').toggle();
}

/* ---------------- */
/* var tech = document.querySelector('.descripcionArticulos'); */


    $( window ).resize(()=> {
        let width = $( window ).width();
    
        if(width < 735){
    $('.cabecera').show();  
    $('.menu').show();
    //forma en jquery
    $('.descripcionArticulos').css('margin','0 auto')
    //forma en vanilla
    /* tech.style.margin = "0 auto"; */
        }else{
            
            $('.menu').hide();
        
        }
     
       });



