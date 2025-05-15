import express from 'express';
const router = express.Router();
import handleUser from '../controller/userController.js';
import { protectedRoute } from '../middleware/ProtectedRoute.js';

router.get('/get-user',protectedRoute,handleUser);

export default router;