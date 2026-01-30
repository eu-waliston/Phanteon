const mongoose = require('mongoose');

const skinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O nome da skin é obrigatório'],
    trim: true,
    maxlength: [100, 'O nome deve ter no máximo 100 caracteres']
  },
  champion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Champion',
    required: [true, 'O campeão da skin é obrigatório']
  },
  championName: {
    type: String,
    required: [true, 'O nome do campeão é obrigatório'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'O preço da skin é obrigatório'],
    min: [0, 'O preço não pode ser negativo']
  },
  currency: {
    type: String,
    enum: ['RP', 'Blue Essence', 'Event Tokens'],
    default: 'RP'
  },
  rarity: {
    type: String,
    enum: {
      values: ['Standard', 'Epic', 'Legendary', 'Mythic', 'Ultimate', 'Prestige'],
      message: 'Raridade inválida. Valores permitidos: Standard, Epic, Legendary, Mythic, Ultimate, Prestige'
    },
    default: 'Standard'
  },
  releaseDate: {
    type: Date,
    default: Date.now
  },
  // Imagens
  splashArt: {
    type: String,
    required: [true, 'A splash art da skin é obrigatória']
  },
  loadingScreen: {
    type: String
  },
  inGameImage: {
    type: String
  },
  icon: {
    type: String
  },
  // Chromas
  chromas: [{
    name: {
      type: String,
      required: true
    },
    color: {
      type: String
    },
    image: {
      type: String
    },
    price: {
      type: Number,
      default: 0
    }
  }],
  // Informações adicionais
  description: {
    type: String,
    trim: true,
    maxlength: [1000, 'A descrição deve ter no máximo 1000 caracteres']
  },
  lore: {
    type: String,
    trim: true
  },
  // Status
  featured: {
    type: Boolean,
    default: false
  },
  available: {
    type: Boolean,
    default: true
  },
  limited: {
    type: Boolean,
    default: false
  },
  // Metadados
  tags: [{
    type: String,
    enum: ['New', 'Popular', 'Legacy', 'Event', 'Seasonal']
  }],
  // Ordem de exibição
  displayOrder: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Índices para melhor performance
skinSchema.index({ champion: 1 });
skinSchema.index({ championName: 1 });
skinSchema.index({ rarity: 1 });
skinSchema.index({ price: 1 });
skinSchema.index({ featured: 1 });
skinSchema.index({ available: 1 });
skinSchema.index({ releaseDate: -1 });

// Middleware para atualizar updatedAt antes de salvar
skinSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Middleware para popular o campeão ao buscar
skinSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'champion',
    select: 'name title role'
  });
  next();
});

const Skin = mongoose.model('Skin', skinSchema);

module.exports = Skin;