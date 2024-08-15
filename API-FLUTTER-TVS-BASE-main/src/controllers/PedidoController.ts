import { Request, Response } from 'express';
import { Pedido } from '../models/Pedido'; 
import { Cliente } from '../models/Cliente';

export const getPedidoById = async (req: Request, res: Response) => {
  try {
    const pedidoId = parseInt(req.params.id, 10);

    if (isNaN(pedidoId)) {
      return res.status(400).json({ message: 'ID deve ser um número' });
    }

    const pedido = await Pedido.findByPk(pedidoId, {
      include: [Cliente],
    });

    if (pedido) {
      res.json(pedido);
    } else {
      res.status(404).json({ message: 'Pedido não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar pedido:', error);
    res.status(500).json({ message: 'Erro ao buscar pedido' });
  }
};