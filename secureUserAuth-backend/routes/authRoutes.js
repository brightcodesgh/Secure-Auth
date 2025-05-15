import express from 'express';
const router = express.Router();
import registerController from '../controller/registerController.js';
import { handleAuthentication } from '../controller/authController.js';
import handleLogout from '../controller/logoutController.js';


router.post("/signup", registerController );
router.post("/login", handleAuthentication);
router.post("/logout", handleLogout);


export default router;