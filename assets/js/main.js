var suscribir = document.getElementById("suscribete");

suscribir.addEventListener("click", function(){
	var nombre = document.getElementById("nombre").value;
	var correo = document.getElementById("email").value;
	var direccion = document.getElementById("direccion").value;
	var seleccion = document.getElementById("seleccion").selectedIndex;

	if(nombre == "" || nombre.length == 0){
		return alert("Ingresa tu nombre");
	}
	if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(correo))){ 
		return alert("Ingresa tu corre electronico");
	}
	if(direccion == "" || direccion.length == 0){
		return alert("Ingresa tu dirección");
	}
	if(seleccion == 0 || seleccion == null){
		return alert("Escoge tu té favorito");
	} else {
		alert("Muchas gracias por suscribirte");
	}
})