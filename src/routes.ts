import { Router } from 'express';
import { RoomController } from './Controller/RoomController';
import { SubjectController } from './Controller/SubjectController';

const routes = Router();

routes.post('/subject', new SubjectController().create);
routes.post('/room', new RoomController().create);

export default routes;
