const connection = require("./connection");
const mysql = require("mysql2/promise");

const orm = {
	selectAll: () => {
		return new Promise((resolve, reject) => {
			mysql.createConnection(connection())
				.then((conn) => {
					const sqlQuery = "SELECT * FROM burgers";

					conn.query(sqlQuery)
						.then((results) => {

						conn.end();

						resolve(results);
					}).catch((error) => {
						const errorMsg = "Error encountered while trying to query from database:\n" + error;

						reject(errorMsg);
					});
			}).catch((error) => {
				const errorMsg = "Error encountered while trying to connect to database:\n" + error;

				reject(errorMsg);
			});
		});
	},

	insertOne: (burgerName, devoured) => {
		return new Promise((resolve, reject) => {
			mysql.createConnection(connection())
				.then((conn) => {
					const sqlQuery = `INSERT INTO burgers(burger_name, devoured)
															VALUES(?,?)`;

					conn.query(sqlQuery, [burgerName, devoured])
						.then((results) => {
							conn.end();

							resolve(results);
					}).catch((error) => {
						const errorMsg = "Error encountered while trying to insert into database:\n" + error;

						reject(errorMsg);
					});
			}).catch((error) => {
				const errorMsg = "Error encountered while trying to connect to database:\n" + error;

				reject(errorMsg);
			});
		});
	},

	updateOne: (burgerId) => {
		return new Promise((resolve, reject) => {
			mysql.createConnection(connection())
				.then((conn) => {
					const sqlQuery = `UPDATE burgers
															SET devoured = true
															WHERE id = ?`;

					conn.query(sqlQuery, [burgerId])
						.then((results) => {
							conn.end();

							resolve(results);
					}).catch((error) => {
						const errorMsg = "Error encountered while trying to update data in database:\n" + error;

						reject(errorMsg);
					});
				}).catch((error) => {
					const errorMsg = "Error encountered while trying to connect to database:\n" + error;

					reject(errorMsg);
				});
		});
	}
}

module.exports = orm;