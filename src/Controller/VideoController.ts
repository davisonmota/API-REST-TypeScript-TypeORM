import { Request, Response } from 'express';
import { roomRepository } from '../repositories/romRepository';
import { videoRepository } from '../repositories/videoRepository';

export class VideoController {
  async create(req: Request, res: Response): Promise<Response> {
    const { title, url } = req.body;
    const { id } = req.params;
    if (!title) return res.status(400).json({ message: 'Title is require' });
    if (!url) return res.status(400).json({ message: 'URL is require' });
    try {
      const room = await roomRepository.findOneBy({ id: parseInt(id) });
      if (!room)
        return res.status(404).json({ message: 'Room does not exist' });
      const newVideo = videoRepository.create({ title, url, room });
      await videoRepository.save(newVideo);
      return res.status(201).json(newVideo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
