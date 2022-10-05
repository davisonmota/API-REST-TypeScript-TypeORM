import { Router } from 'express';
import { RoomController } from './Controller/RoomController';
import { SubjectController } from './Controller/SubjectController';
import { VideoController } from './Controller/VideoController';

const routes = Router();

routes.post('/subject', new SubjectController().create);
routes.post('/room', new RoomController().create);
routes.post('/room/:id', new VideoController().create);

export default routes;
