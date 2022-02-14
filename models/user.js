'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    role: DataTypes.ENUM,
    id_outlet: DataTypes.INTEGER,
    nomor: DataTypes.STRING,
    status: DataTypes.ENUM,
    tanggal_registrasi: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};