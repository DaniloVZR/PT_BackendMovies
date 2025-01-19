require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const compraRoute = require("./routes/compra.route")

const port = process.env.PORT || 3000
const mongodbConnection = process.env.MONGODB_URI

// Middleware
app.use(cors());
app.use(express.json());

// rutas
app.use('/api', compraRoute);

// Conexión
mongoose.connect(mongodbConnection)
  .then(() => {
    console.log('Conectado a la base de datos');
    app.listen(port, () => (
      console.log(`Server is running on port ${port}`)
    ));
  })
  .catch(() => {
    console.log('Error al conectar a la base de datos')
  })
