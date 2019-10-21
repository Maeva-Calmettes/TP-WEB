// https://github.com/dsaadesignv/TP-web/tree/master/Intro-2018/else


$('#formulaire').on('submit', function(){ /* quand je submit mon formulaire */
	let date = $('#form-date').val(); /* on assigne la date du formulaire à une valeur que l'on vient de créer 'date'  */

		$.getJSON('https://api.nasa.gov/planetary/apod?api_key=Jl24cAYc0Rk6bdgSUfcvvgvH4fHBcz6w6YvFdgl1&date=' +date) 
		/* le "&date=" demande la date, + la valeur 'date' du formulaire */
		/* le + date est la valeur ci dessus, qui change avec le Formulaire */

		.done(function(data){ /* ICI ON RECUPERE LES DONNEES */
				console.log(data.date);
				$('#date_nom').text(data.date); /* on affiche la date dans le champs de texte 'date */
				$('#titre_img').text(data.title);
				$('#auteur').text(data.copyright);
				$('#description').text(data.explanation);
				if(data.media_type=='image'){
					$('#video-nasa').css("display", "none");
					$('#image_apod').attr('src',data.url)
					  .css("display", "block");
				}else{
					$('#image_apod').css("display", "none");
					$('#video-nasa')
					  .attr('src',data.url)
					  .css("display", "block");
				}
				  });
			return false; /* pour pas que la page se recharge quand on envoie le formulaire*/

});
 