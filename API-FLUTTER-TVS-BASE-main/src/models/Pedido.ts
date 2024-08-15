import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config/config';
import { Cliente } from '../models/Cliente';

interface PedidoAttributes {
  id: number;
  clienteId: number;
}

interface PedidoCreationAttributes extends Optional<PedidoAttributes, 'id'> {}

export class Pedido extends Model<PedidoAttributes, PedidoCreationAttributes> implements PedidoAttributes {
  public id!: number;
  public clienteId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Pedido.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  clienteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cliente,
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Pedido',
});
