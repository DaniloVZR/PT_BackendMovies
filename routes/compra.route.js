const express = require("express");
const router = express.Router();
const {
  CrearCompras,
  ObtenerCompras,
  ObtenerCompra,
} = require("../controllers/compra.controller.js");

router.get('/compras', ObtenerCompras);
router.get('/compras/:id', ObtenerCompra);

router.post('/compras', CrearCompras);

module.exports = router;