const connection = require("./connection");
const mysql = require("mysql2/promise");

exports.selectAll = () => {
	return new Promise((resolve, reject) => {
		mysql.createConnection(connection())
			.then((conn) => {
				const sqlQuery = "SELECT * FROM burgers";

				conn.query(sqlQuery)
					.then((results) => {

						conn.end();

						resolve(results);
				}).catch((error) => {
					reject(error);
				});
		}).catch((error) => {
			reject(error);
		});
	});
}

exports.insertOne = (burgerName, devoured) => {
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
					reject(error)
				});
		}).catch((error) => {
			reject(error)
		});
	});
}

exports.updateOne = (burgerName, devoured) => {
	return new Promise((resolve, reject) => {
		mysql.createConnection(connection())
			.then((conn) => {
				const sqlQuery = `UPDATE burgers
														SET devoured = ?
														WHERE LOWER(burger_name) = LOWER(?)`;

				conn.query(sqlQuery, [devoured, burgerName])
					.then((results) => {
						conn.end();

						resolve(results);
					}).catch((error) => {
						reject(error);
					});
			}).catch((error) => {
				reject(error);
			});
	});
}