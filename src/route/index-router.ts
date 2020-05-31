import express from 'express';
import IndexController from '../controller';

const router = express.Router();

router.post('/stop-instance', IndexController.stopInstance);

router.post('/start-instance', IndexController.startInstance);

export default (basePath, app) => app.use(basePath, router);