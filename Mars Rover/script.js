
/* Ajouter ou Cacher les cameras des rovers concernés */
$(document).change(function () {
	let rover = $('#rover').val()

		if (rover === 'curiosity') {
			$("#mast").show();
			$("#mahli").show();
			$("#mardi").show();
			$("#chemcam").show(); 
			$("#minites").hide(); 
			$("#pancam").hide(); 
		} else {
			$("#mast").hide(); 
			$("#mahli").hide(); 
			$("#mardi").hide(); 
			$("#chemcam").hide(); 
			$("#minites").show();
			$("#pancam").show();
		}
		return false; 
});	


/* Afficher les images */
$('#formulaire').on('submit', function(){ /* quand je submit mon formulaire */
	
	$("img").remove(); /* enlever toutes les anciennes images */
	$("#bloc_images p").remove(); /* et le message 'il y a pas d'image' */

	/* récupérer les valeurs du jour martien, du rover et la camera dont on veut afficher les images */
	let sol = $('#sol').val();
	let rover = $('#rover').val()
	let camera = $('#camera').val()

	
	$.getJSON("https://api.nasa.gov/mars-photos/api/v1/rovers/" +rover + "/photos?api_key=Jl24cAYc0Rk6bdgSUfcvvgvH4fHBcz6w6YvFdgl1&camera=" +camera +"&sol=" +sol)
	
	.done(function( data ) {
		/* on récupère les photos et on les ajoute au bloc_images */
			$.each(data.photos, function( i, photo ) { 
				$('<img>').attr('src',photo.img_src).appendTo("#bloc_images");
			});

		/* si il n'y a pas de photo on affiche un message d'erreur */	
			let numImage = $("#bloc_images img").length
			if (numImage == 0) {
				$('<p>').text("Oups ! il n'y a pas d'image pour cette camera !").appendTo("#bloc_images");
			}
			return false; /* pour pas que la page se recharge quand on envoie le formulaire*/
	});
	return false; /* pour pas que la page se recharge quand on envoie le formulaire*/
});	