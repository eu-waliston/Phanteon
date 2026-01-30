const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/pantheon-db",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`✅ MongoDB Conectado: ${conn.connection.host}`);

    // Event listeners para conexão
    mongoose.connection.on("connected", () => {
      console.log("✅ Mongoose conectado ao DB");
    });

    mongoose.connection.on("error", (err) => {
      console.error(`❌ Erro na conexão do Mongoose: ${err.message}`);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("⚠️  Mongoose desconectado");
    });

    // Fechar conexão ao encerrar o app
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log(
        "🔴 Conexão com MongoDB fechada devido ao término da aplicação"
      );
      process.exit(0);
    });
  } catch (error) {
    console.error(`❌ Erro ao conectar ao MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
