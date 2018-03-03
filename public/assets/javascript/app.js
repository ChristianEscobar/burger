$("#burger-form").on("submit", (event) => {
	console.log();

	if($("#burger-description").val().trim().length === 0) {
		createNotifyMessage("No Burger For You?", "glyphicon glyphicon-warning-sign", "danger", "You have to provide a burger name.", "top");

		event.preventDefault();

		return false;
	}

	return true;
});

// Notify messages
function createNotifyMessage(title, glyphicon, type, message, from) {
	$.notify({
		title: "<strong>" + title + "</strong> - ",
		icon: glyphicon,
		message: message,
	},{
		type: type,
		animate: {
  	enter: "animated fadeInDown",
  	exit: "animated fadeOutRight"
	},
		placement: {
  		from: from,
  		align: "left"
	},
		offset: 20,
		spacing: 10,
		z_index: 1031,
	});
}