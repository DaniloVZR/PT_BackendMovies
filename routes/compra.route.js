import express from "express";
const router = express.Router();
import {
  CrearCompras,
  ObtenerCompras,
  ObtenerCompra,
} from "../controllers/compra.controller.js";

router.get('/compras', ObtenerCompras);
router.get('/compras/:id', ObtenerCompra);

router.post('/compras', CrearCompras);

export default router;