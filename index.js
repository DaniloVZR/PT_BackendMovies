import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import conectarDB from "./config/db.js"
import compraRoute from "./routes/compra.route.js";

const app = express();

const port = process.env.PORT || 4000

dotenv.config();
conectarDB();

// Middleware
app.use(cors());
app.use(express.json());

// Conexión
// rutas
app.use('/api', compraRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
