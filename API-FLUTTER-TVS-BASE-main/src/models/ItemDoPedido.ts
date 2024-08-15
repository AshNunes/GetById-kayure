import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config/config';
import { Pedido } from './Pedido'; 
import { Produto } from './Produto';

interface ItemDoPedidoAttributes {
  id: number;
  pedidoId: number;
  produtoId: number;
  quantidade: number;
}

interface ItemDoPedidoCreationAttributes extends Optional<ItemDoPedidoAttributes, 'id'> {}

export class ItemDoPedido extends Model<ItemDoPedidoAttributes, ItemDoPedidoCreationAttributes> implements ItemDoPedidoAttributes {
  public id!: number;
  public pedidoId!: number;
  public produtoId!: number;
  public quantidade!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ItemDoPedido.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  pedidoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Pedido,
      key: 'id',
    },
  },
  produtoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Produto,
      key: 'id',
    },
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'ItemDoPedido',
});