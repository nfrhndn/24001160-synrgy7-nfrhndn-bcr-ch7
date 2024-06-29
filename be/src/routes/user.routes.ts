import { Router, Request, Response } from 'express';
import { loginUser, registerUser, getUser } from '../controllers/userControllers';
import { authorized, authorizeRole, whoAmI } from '../../middlewares/authPassword';
const router = Router();

// GET cars;

router.get('/data', authorized, authorizeRole('superadmin'), getUser);
router.get('/data', authorized, authorizeRole('admin'), getUser);

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/whoami', authorized, whoAmI);

export default router;
