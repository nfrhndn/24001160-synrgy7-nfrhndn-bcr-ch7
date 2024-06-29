import { Router, Request, Response } from 'express';

import UploadImage from '../../middlewares/multer';

import { getCars, getCarsbyId, createCars, updateCars, deleteCars, getavailcars } from '../controllers/carsController';
import { authorizeRole, authorized } from '../../middlewares/authPassword';

import { getAllCarsReady } from '../services/carService';

const router = Router();

//GET Available Cars
router.get('/available', getavailcars);

// GET cars;
router.get('/all', authorized, authorizeRole('superadmin'), getCars);
router.get('/all', authorized, authorizeRole('admin'), getCars);

// GET specific car by ID.
router.get('/:id', authorized, authorizeRole('superadmin'), getCarsbyId);
router.get('/:id', authorized, authorizeRole('admin'), getCarsbyId);

// CREATE
router.post('/create', authorized, authorizeRole('superadmin'), UploadImage.single('image'), createCars);
router.post('/create', authorized, authorizeRole('admin'), UploadImage.single('image'), createCars);

// UPDATE / EDIT.
router.put('/:id', authorized, UploadImage.single('image'), updateCars);

//  DELETE
router.delete('/:id', authorized, deleteCars);

export default router;
