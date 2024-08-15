import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config/config';
interface ProdutoCreationAttributes extends Optional<ProdutoAttributes, 'id'> {}

export class Produto extends Model<ProdutoAttributes, ProdutoCreationAttributes> implements ProdutoAttributes {
  public id!: number;
  public nome!: string;
  public preco!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Produto.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Produto',
});
