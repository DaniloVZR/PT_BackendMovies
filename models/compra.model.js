import mongoose from "mongoose";

const CompraSchema = mongoose.Schema({
  id_pedido: {
    type: String,
    required: true,
    unique: true
  },
  fecha_compra: {
    type: Date,
    default: Date.now
  },
  documento_cliente: {
    type: String,
    required: true
  },
  id_productos: [{
    type: String,
    required: true
  }],
  cantidad_productos: {
    type: Number,
    required: true,
    min: 1
  },
  precio_total: {
    type: Number,
    required: true,
    min: 0
  }
}, { timestamps: true });

const Compra = mongoose.model('Compra', CompraSchema);

export default Compra;