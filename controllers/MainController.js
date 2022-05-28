const connection = require("../config/db");

const createclient = (req, res) => {
  console.log("Create");
  let consulta =
    "insert into clientes(nombres, apellidos, rut, numero_cliente, direccion) values (?,?,?,?,?) ";
  let values = [...Object.values(req.body)];
  console.log(values);

  connection.query(consulta, values, function (err, results, fields) {
    if (err) {
      response.json({ message: err });
    } else {
      res.json({
        respuesta: "Inserción exitosa !",
      });
    }
  });
};

const readAllUsers = (req, res) => {
  console.log("Read all users");
  let consulta = "Select * from clientes;";
  connection.query(consulta, function (err, results, fields) {
    if (err) {
      response.json({ message: err });
    } else {
      res.json(results);
    }
  });
};

const updateClient = (req, res) => {
  console.log("Update");
  console.log(req.params);
  console.log(req.body);
  let consulta =
    "update clientes set nombres=?, apellidos=?, rut=?, numero_cliente=?, direccion=? where id=? ;";
  let values = [...Object.values(req.body)];
  values.push(Number(req.params.id));
  console.log(values);
  connection.query(consulta, values, function (err, results, fields) {
    if (err) {
      res.json({ message: err });
    } else {
      res.json({ message: "éxito en la actualización" });
    }
  });
};
const deleteClient = (req, res) => {
  console.log("Delete");
  console.log(req.params);
  let consulta = "DELETE FROM clientes WHERE id=?;";
  let values = [Number(req.params.id)];
  console.log(values);
  connection.query(consulta, values, function (err, results, fields) {
    if (err) {
      res.json({ message: err });
    } else {
      res.json({ message: "Cliente eliminado con éxito !" });
    }
  });
};

const readuser = (req, res) => {
  console.log("read on client (from params)");
  let consulta = "SELECT * FROM clientes WHERE id=?;";
  let values = [Number(req.params.id)];
  console.log(values);

  connection.query(consulta, values, function (err, results, fields) {
    if (err) {
      res.json({ message: err });
    } else {
      res.json(results);
    }
  });
};

module.exports = {
  createclient,
  readAllUsers,
  updateClient,
  deleteClient,
  readuser,
};
