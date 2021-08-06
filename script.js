
const button = document.querySelector("button");
const span = document.querySelector("span");


function compare(event) {

	var email = document.querySelector("#email").value;
	var confirmation = document.querySelector("#conf-email").value;
	var prenom = document.querySelector("#prenom").value;
	var nom = document.querySelector("#nom").value;


	if (email != confirmation) {
		event.preventDefault();
		document.querySelector("#errormail").innerHTML = "L'email et sa confirmation son différent";
	}
	else if (email == confirmation) {
		console.log('ok');
		event.preventDefault();
		fetch('process.php',
			{
				method: "POST",
				body: new FormData(document.querySelector("form"))
			})
			.then(function (result) {
				return result.json()
			})
			.then(function (data) {
				button.innerHTML = `Merci ${prenom} ${nom}!`;
				span.innerHTML = 'Le mail a bien été envoyé';
				span.classList.add("send");
				setTimeout(function time() {
					span.classList.remove("send");
					span.innerHTML = "";
					button.innerHTML = "ENVOYER"
				}, 5000);

				console.log(data.reponse);
			});
	};
};







