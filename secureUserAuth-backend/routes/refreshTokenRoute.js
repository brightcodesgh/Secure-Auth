import express from 'express';
const router  = express.Router();
import { handleRefreshToken } from  '../controller/refreshToken.js';


router.post('/refresh-token', handleRefreshToken);

export default router;