import { Router } from 'express';
import { SubjectController } from './Controller/SubjectController';

const routes = Router();

routes.post('/subject', new SubjectController().create);

export default routes;
