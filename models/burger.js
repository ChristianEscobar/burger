const orm = require("../config/orm");

exports.selectAll = () => {
	orm.selectAll()
		.then((data) => {
			console.log(data);
		}).catch((error) => {
			console.error(error);
		});
}

exports.insertOne = (burgerName, devoured) => {
	orm.insertOne(burgerName, devoured)
		.then((data) => {
			console.log(data);
		}).catch((error) => {
			console.error(error);
		});
}

exports.updateOne = (burgerName, devoured) => {
	orm.updateOne(burgerName, devoured)
		.then((data) => {
			console.log(data);
		}).catch((error) => {
			console.error(error);
		});
}