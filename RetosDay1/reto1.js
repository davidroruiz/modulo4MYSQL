let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        database: "codenotch"
    }
);

connection.connect(function (error) {


    if (error) {
        console.log(error);
    } else {
        console.log('Conexion correcta.');
    }
});


let SQL = "ALTER TABLE profesores ADD COLUMN edadProfesor INT NOT NULL;"
connection.query(SQL, function (err, result) {

    if (err)
        console.log(err);

    else {
        console.log("Tabla Modificada");
        console.log(result);
    }

});

let SQLDROPCOLUMN = "ALTER TABLE profesores DROP COLUMN edad;"
connection.query(SQLDROPCOLUMN, function (err, result) {

    if (err)
        console.log(err);

    else {
        console.log("Columna Borrada");
        console.log(result);
    }

});

let DROPSQL = "DROP TABLE profesores;"
connection.query(DROPSQL, function (err, result) {
    if (err) throw err;
    console.log("Tabla Eliminada");
});


connection.end();
