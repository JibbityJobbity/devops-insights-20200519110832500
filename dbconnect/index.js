const mysql = require('mysql'); 

const con = mysql.createConnection({
	"db": "BLUDB",
	"dsn": "DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-08.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=dxp46051;PWD=whd1gv-trng4sspb;",
	"host": "dashdb-txn-sbox-yp-dal09-08.services.dal.bluemix.net",
	"hostname": "dashdb-txn-sbox-yp-dal09-08.services.dal.bluemix.net",
	"https_url": "https://dashdb-txn-sbox-yp-dal09-08.services.dal.bluemix.net",
	"jdbcurl": "jdbc:db2://dashdb-txn-sbox-yp-dal09-08.services.dal.bluemix.net:50000/BLUDB",
	"parameters": {},
	"password": "whd1gv-trng4sspb",
	"port": 50000,
	"ssldsn": "DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-08.services.dal.bluemix.net;PORT=50001;PROTOCOL=TCPIP;UID=dxp46051;PWD=whd1gv-trng4sspb;Security=SSL;",
	"ssljdbcurl": "jdbc:db2://dashdb-txn-sbox-yp-dal09-08.services.dal.bluemix.net:50001/BLUDB:sslConnection=true;",
	"uri": "db2://dxp46051:whd1gv-trng4sspb@dashdb-txn-sbox-yp-dal09-08.services.dal.bluemix.net:50000/BLUDB",
	"username": "dxp46051"
})

con.connect(function(err) {
	if (err) throw err;
	console.log("[DB has connected]");
})