import { Request, Response } from 'express';
import { ItemDoPedido } from '../models/ItemDoPedido';
import { Pedido } from '../models/Pedido'; 
import { Produto } from '../models/Produto';

export const getItemDoPedidoById = async (req: Request, res: Response) => {
  try {
    const itemId = parseInt(req.params.id, 10);

    if (isNaN(itemId)) {
      return res.status(400).json({ message: 'ID deve ser um número' });
    }

    const itemDoPedido = await ItemDoPedido.findByPk(itemId, {
      include: [
        {
          model: Pedido,
          include: [Cliente]
        },
        Produto
      ]
    });

    if (itemDoPedido) {
      res.json(itemDoPedido);
    } else {
      res.status(404).json({ message: 'Item do Pedido não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar item do pedido:', error);
    res.status(500).json({ message: 'Erro ao buscar item do pedido' });
  }
};
