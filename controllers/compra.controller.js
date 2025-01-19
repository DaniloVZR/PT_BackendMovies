import Compra from "../models/compra.model.js";

const CrearCompras = async (req, res) => {
  try {
    const compra = new Compra(req.body);
    await compra.save();
    res.status(200).json(compra);
  } catch (error) {
    res.status(400).json(error);
  }
};

const ObtenerCompras = async (req, res) => {
  try {
    const compras = await Compra.find();
    res.json(compras);
  } catch (error) {
    res.status(400).json(error);
  }
}

const ObtenerCompra = async (req, res) => {
  try {
    const compra = await Compra.findOne({ id_pedido: req.params.id })
    if (!compra) {
      return res.status(404).json({ message: "Compra no encontrada" });
    }
    res.json(compra);
  } catch (error) {
    res.status(400).json(error);
  }
}

export {
  CrearCompras,
  ObtenerCompras,
  ObtenerCompra
}