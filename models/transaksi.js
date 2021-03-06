'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transaksi.init({
    id_outlet: DataTypes.INTEGER,
    kode_invoice: DataTypes.STRING,
    id_member: DataTypes.INTEGER,
    tanggal: DataTypes.DATE,
    batas_waktu: DataTypes.DATE,
    tanggal_bayar: DataTypes.DATE,
    status: DataTypes.ENUM,
    dibayar: DataTypes.ENUM,
    id_user: DataTypes.INTEGER,
    biaya_tambahan: DataTypes.INTEGER,
    diskon: DataTypes.DOUBLE,
    pajak: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transaksi',
  });
  return transaksi;
};