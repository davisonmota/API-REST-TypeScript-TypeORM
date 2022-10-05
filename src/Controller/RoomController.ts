import { Request, Response } from 'express';
import { roomRepository } from '../repositories/romRepository';

export class RoomController {
  async create(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'Name is required' });
    try {
      const newRoom = roomRepository.create({ name });
      await roomRepository.save(newRoom);
      return res.status(201).json(newRoom);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
