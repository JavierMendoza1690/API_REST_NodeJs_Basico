const { respoonse, request } = require("express");

const usuariosGET = (req = request, res = response) => {

  const {q, nombre = 'No name', apikey} = req.query

  res.json({
    msj: "get API - controlador",
    q,
    nombre,
    apikey
  });
};

const usuariosPUT = (req, res) => {

  const { id } = req.params;

  res.json({
    msj: "put API - controlador",
    id
  });
};

const usuariosPOST = (req, res) => {

  const {nombre, edad} = req.body;

  res.json({
    msj: "post API - controlador",
    nombre,
    edad
  });
};

const usuariosDELETE = (req, res) => {
  res.json({
    msj: "delete API - controlador",
  });
};

const usuariosPATCH = (req, res) => {
  res.json({
    msj: "patch API - controlador",
  });
};

module.exports = {
  usuariosGET,
  usuariosPUT,
  usuariosPOST,
  usuariosDELETE,
  usuariosPATCH,
};
