const mongoose = require('mongoose');

const championSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O nome do campeão é obrigatório'],
    unique: true,
    trim: true,
    minlength: [2, 'O nome deve ter pelo menos 2 caracteres'],
    maxlength: [50, 'O nome deve ter no máximo 50 caracteres']
  },
  title: {
    type: String,
    required: [true, 'O título do campeão é obrigatório'],
    trim: true,
    maxlength: [100, 'O título deve ter no máximo 100 caracteres']
  },
  description: {
    type: String,
    required: [true, 'A descrição do campeão é obrigatória'],
    trim: true,
    maxlength: [500, 'A descrição deve ter no máximo 500 caracteres']
  },
  lore: {
    type: String,
    required: [true, 'A lore do campeão é obrigatória'],
    trim: true
  },
  role: {
    type: String,
    required: [true, 'O papel do campeão é obrigatório'],
    enum: {
      values: ['Fighter', 'Assassin', 'Mage', 'Marksman', 'Support', 'Tank'],
      message: 'Papel inválido. Valores permitidos: Fighter, Assassin, Mage, Marksman, Support, Tank'
    }
  },
  difficulty: {
    type: Number,
    required: [true, 'A dificuldade do campeão é obrigatória'],
    min: [1, 'A dificuldade mínima é 1'],
    max: [10, 'A dificuldade máxima é 10']
  },
  // Estatísticas base (nível 1)
  stats: {
    health: {
      type: Number,
      required: [true, 'A saúde do campeão é obrigatória'],
      min: [0, 'A saúde não pode ser negativa']
    },
    healthRegen: {
      type: Number,
      required: [true, 'A regeneração de saúde é obrigatória'],
      min: [0, 'A regeneração de saúde não pode ser negativa']
    },
    mana: {
      type: Number,
      min: [0, 'A mana não pode ser negativa']
    },
    manaRegen: {
      type: Number,
      min: [0, 'A regeneração de mana não pode ser negativa']
    },
    attackDamage: {
      type: Number,
      required: [true, 'O dano de ataque é obrigatório'],
      min: [0, 'O dano de ataque não pode ser negativo']
    },
    attackSpeed: {
      type: Number,
      required: [true, 'A velocidade de ataque é obrigatória'],
      min: [0, 'A velocidade de ataque não pode ser negativa']
    },
    armor: {
      type: Number,
      required: [true, 'A armadura é obrigatória'],
      min: [0, 'A armadura não pode ser negativa']
    },
    magicResist: {
      type: Number,
      required: [true, 'A resistência mágica é obrigatória'],
      min: [0, 'A resistência mágica não pode ser negativa']
    },
    movementSpeed: {
      type: Number,
      required: [true, 'A velocidade de movimento é obrigatória'],
      min: [0, 'A velocidade de movimento não pode ser negativa']
    }
  },
  // Imagens
  splashArt: {
    type: String,
    default: '/uploads/default-champion.jpg'
  },
  icon: {
    type: String,
    default: '/uploads/default-icon.jpg'
  },
  loadingScreen: {
    type: String
  },
  // Status
  active: {
    type: Boolean,
    default: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  // Metadados
  tags: [{
    type: String,
    enum: ['Top', 'Jungle', 'Mid', 'ADC', 'Support', 'Melee', 'Ranged', 'CC', 'Burst', 'DPS']
  }],
  releaseDate: {
    type: Date,
    default: Date.now
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

// Virtual para relacionar com skins
championSchema.virtual('skins', {
  ref: 'Skin',
  localField: '_id',
  foreignField: 'champion',
  justOne: false
});

// Virtual para relacionar com habilidades
championSchema.virtual('abilities', {
  ref: 'Ability',
  localField: '_id',
  foreignField: 'champion',
  justOne: false
});

// Middleware para atualizar updatedAt antes de salvar
championSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Middleware para atualizar updatedAt antes de atualizar
championSchema.pre('findOneAndUpdate', function(next) {
  this.set({ updatedAt: Date.now() });
  next();
});

// Índices para melhor performance
championSchema.index({ name: 1 });
championSchema.index({ role: 1 });
championSchema.index({ difficulty: 1 });
championSchema.index({ featured: 1 });
championSchema.index({ active: 1 });

const Champion = mongoose.model('Champion', championSchema);

module.exports = Champion;