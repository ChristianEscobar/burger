function connection() {
	if(process.env.JAWSDB_URL) {
		return process.env.JAWSDB_URL;
	}

	return  {
		host: 'localhost',
  	user: 'root',
  	database: 'burgers_db'
	}
}

module.exports = connection;