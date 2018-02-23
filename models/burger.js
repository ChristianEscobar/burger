const orm = require("../config/orm");

const burger = {
	selectAll: () => {
		return new Promise((resolve, reject) => {
			orm.selectAll()
				.then((data) => {
					resolve(data);
				}).catch((error) => {
					reject(error);
				});
			});
	},

	insertOne:  (burgerName, devoured) => {
		return new Promise((resolve, reject) => {
			orm.insertOne(burgerName, devoured)
				.then((data) => {
					resolve(data);
				}).catch((error) => {
					reject(error);
				});
			});
	},

	updateOne: (burgerId) => {
		return new Promise((resolve, reject) => {
			orm.updateOne(burgerId)
				.then((data) => {
					resolve(data);
				}).catch((error) => {
					reject(error);
				});
			});
	}
}

module.exports = burger;