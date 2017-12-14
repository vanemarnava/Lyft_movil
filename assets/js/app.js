
$(document).ready(function(){

	//vista splash, desaparecera despues de 2 seg
	$(".splash").delay(2000).fadeOut("slow");

	//esconder segunda pantalla
	$(".secondScreen").hide(); 

	//al hacer click en el boton sign up, se pasa a la segunda pantalla con el sing up y los datos del pais y telefono
	$("#btn2").click(function(){
	  $(".secondScreen").show();
	  $(".firstScreen").hide();
	});

	// al hacer click en el icono de regreso se devuelve a la pag con los botones se log in y sign up
	$(".iconBack").click(function(){
	  $(".firstScreen").show();
	  $(".secondScreen").hide();
	});

	// el boton next se activara cuando se ingrese un numero telefonico de 10 num,
	//de lo contrario seguira inactivo
	$("#telephone").keyup(function(){ //detecta cuando se deja de presionar la tecla
    if($(this).val().length > 9)
    { 
      $('#btnNext').removeAttr('disabled');
    } 
    else 
    {
      $('#btnNext').attr('disabled','disabled');
    }

  	}).trigger('keyup');

	//funcion que genera tres digitos para validar 
	$(".thirdScreen").hide();
	$(".btn-block").click(function(e) {
  	alert("Tu" + " " + "codigo" + " " + "es" + " " + "LAB-" + (Math.floor(Math.random() * 900) + 100));
  $(".thirdScreen").show();
  $(".secondScreen").hide();
	});

	//al hacer click en el boton de regreso, se muestra la segunda pantalla del sing up y se esconde la tercera 
	//pantalla de verify phone number
	$(".iconBack2").click(function(){
	  $(".secondScreen").show();
	  $(".thirdScreen").hide();
	});


}); //fin ready