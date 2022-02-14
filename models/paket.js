'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class paket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  paket.init({
    jenis: DataTypes.ENUM,
    harga: DataTypes.INTEGER,
    id_outlet: DataTypes.INTEGER,
    nama_paket: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'paket',
  });
  return paket;
};