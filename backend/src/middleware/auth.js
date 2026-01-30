const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware para verificar token JWT (para rotas administrativas futuras)
const auth = (req, res, next) => {
  try {
    // Obter token do header
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({
        message: 'Acesso negado. Token não fornecido.'
      });
    }

    // Verificar token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'pantheon-secret-key');

    // Adicionar dados do usuário à requisição
    req.user = decoded;

    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Token inválido.' });
    }

    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expirado.' });
    }

    res.status(500).json({ message: 'Erro na autenticação.' });
  }
};

// Middleware para verificar se é admin (opcional para futuras features)
const isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({
      message: 'Acesso negado. Permissão de administrador necessária.'
    });
  }
  next();
};

module.exports = { auth, isAdmin };