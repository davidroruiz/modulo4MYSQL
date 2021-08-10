let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        database: "escuela"
    }
);

connection.connect(function (error) {


    if (error) {
        console.log(error);
    } else {
        console.log('Conexion correcta.');
    }
});



//Insert Campos de Teachers


let SQL = "INSERT INTO teachers (first_name,last_name) VALUES ?"

var values = [
    ['Juanito', 'Soler'],
    ['David', 'Tardix'],
    ['Piter', 'Ruiz'],
    ['Joler', 'Soler'],
    ['Amanda', 'Alonso'],
    ['Jope', 'Muñoz'],
    ['Agustin', 'Rim'],
    ['Akex', 'Salamanca'],


]
connection.query(SQL, [values], function (err, result) {


    if (err)
        console.log(err);

    else {
        console.log("Campos Insertados");
        console.log(result);
    }
});

//Insert Campos de Grupos

let SQL = "INSERT INTO grupos (name) VALUES ?";

var values = [

    ['Ciencias'],
    ['Mates'],
    ['Educacion'],
    ['Fisica'],
    ['Quimica']
]

connection.query(SQL, [values], function (err, result) {


    if (err)
        console.log(err);

    else {
        console.log("Campos Insertados");
        console.log(result);
    }
});

//Insert campos de Teachers

let SQL = "INSERT INTO teachers (first_name,last_name) VALUES ?"

var values = [
    ['Juanito', 'Soler'],
    ['David', 'Tardix'],
    ['Piter', 'Ruiz'],
    ['Joler', 'Soler'],
    ['Amanda', 'Alonso'],
    ['Jope', 'Muñoz'],
    ['Agustin', 'Rim'],
    ['Akex', 'Salamanca'],

]
connection.query(SQL, [values], function (err, result) {


    if (err)
        console.log(err);

    else {
        console.log("Campos Insertados");
        console.log(result);
    }
});

//Insert Campos de Students

let SQL = "INSERT INTO students (first_name,last_name,group_id) VALUES ?"

var values = [
    ['Juanito', 'Soler', 1],
    ['David', 'Tardix', 2],
    ['Piter', 'Ruiz', 3],
    ['Joler', 'Soler', 4],
    ['Amanda', 'Alonso', 5],
    ['Jope', 'Muñoz', 6],
    ['Agustin', 'Rim', 7],
    ['Akex', 'Salamanca', 1]


]
connection.query(SQL, [values], function (err, result) {


    if (err)
        console.log(err);

    else {
        console.log("Campos Insertados");
        console.log(result);
    }
});

//Insert Campos de Marks

let SQL = "INSERT INTO marks (student_id,subject_id,fecha,mark) VALUES ?"

var values = [
    [2, 1, '2010-05-24', 2],
    [17, 1, '2021-06-24', 15],
    [11, 1, '2021-07-24', 17],
    [15, 1, '2021-08-24', 20],
    [17, 1, '2021-09-24', 11],
    [22, 1, '2021-10-24', 12],
    [20, 1, '2021-12-24', 13],
    [23, 1, '2021-05-24', 23]


]
connection.query(SQL, [values], function (err, result) {


    if (err)
        console.log(err);

    else {
        console.log("Campos Insertados");
        console.log(result);
    }
});


//Insert Campos de Subject

let SQL = "INSERT INTO subject (title) VALUES ?"

var values = [
    ["Marcas"],
    ["SQL"],
    ["JAVA"],
    ["JAVASCRIPT"],
    ["Maquetacion"],
    ["HTML"],
    ["UML"],
    ["Servidores"],


]
connection.query(SQL, [values], function (err, result) {


    if (err)
        console.log(err);

    else {
        console.log("Campos Insertados");
        console.log(result);
    }
});

//Setear las notas a 0

let SQL = "UPDATE marks SET mark = 0"

connection.query(SQL, function (err, result) {


    if (err)
        console.log(err);

    else {
        console.log("Tabla Modificada");
        console.log(result);
    }
});

//Select de la tabla students

let SQL = "SELECT first_name, last_name FROM students";
connection.query(SQL, function (err, result) {


    if (err)
        console.log(err);

    else {
        console.log("Tabla Seleccionada");
        console.log(result);
    }
});


//Select de la tabla teachers

let SQL = "SELECT * FROM teachers";
connection.query(SQL, function (err, result) {


    if (err)
        console.log(err);

    else {
        console.log("Tabla Seleccionada");
        console.log(result);
    }
});

//Delete la tabla con la fecha quue tenga mas de 10 años



let SQL = "DELETE FROM marks WHERE fecha < '2011-08-09';"

connection.query(SQL, function (err, result) {


    if (err)
        console.log(err);

    else {
        console.log("Tabla Borrada");
        console.log(result);
    }
});


//Actualizar los datos que la mark tengo menos de 5 y actualizarlo a 5

let SQL = "UPDATE marks SET mark = 5 WHERE mark < 5 "

connection.query(SQL, function (err, result) {


    if (err)
        console.log(err);

    else {
        console.log("Tabla Actualizada");
        console.log(result);
    }
});

connection.end();
