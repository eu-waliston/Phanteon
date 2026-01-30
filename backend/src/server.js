const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/database");

const championRoutes = require("./routes/champion.routes");
const skinRoutes = require("./routes/skin.routes");
const abilityRoutes = require("./routes/ability.routes");

const app = express();

// Conectar ao MongoDB
connectDB();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// Log de requisições
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Rotas
app.use("/api/champions", championRoutes);
app.use("/api/skins", skinRoutes);
app.use("/api/abilities", abilityRoutes);

// Rota de saúde da API
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Rota inicial
app.get("/", (req, res) => {
  res.json({
    message: "🏆 API do Pantheon - League of Legends",
    version: "1.0.0",
    endpoints: {
      champions: "/api/champions",
      skins: "/api/skins",
      abilities: "/api/abilities",
    },
  });
});

// Middleware para rotas não encontradas
app.use((req, res, next) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Erro interno do servidor";

  res.status(statusCode).json({
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`🚀 Servidor rodando em http://${HOST}:${PORT}`);
  console.log(`📚 Documentação da API: http://${HOST}:${PORT}`);
});
