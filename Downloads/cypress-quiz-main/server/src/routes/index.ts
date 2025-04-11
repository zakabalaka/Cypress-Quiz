import type {Request, Response, Router} from 'express';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';


const router: Router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import apiRoutes from './api/index.js';

router.use('/api', apiRoutes);

router.use((_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
});

export default router;
