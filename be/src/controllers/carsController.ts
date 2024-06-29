import { Router, Request, Response } from 'express';
import knex from 'knex';
import { CarsModel } from '../models/CarsModel';
import UploadImage from '../../middlewares/multer';
import cloudinary from '../../config/cloudinary';
import { getAllCars, getCarById, updateCar, deleteCar, createCar, getAllCarsReady } from '../services/carService';
import { getready } from '../repositories/carRepository';

export const getavailcars = async (req: Request, res: Response) => {
  const carsAvailable = await getAllCarsReady();

  res.status(200).json({
    message: 'This is list All Available Cars',
    cars: carsAvailable,
  });
};

// GET cars;
export const getCars = async (_req: Request, res: Response) => {
  const cars = await getAllCars();

  res.status(200).json({
    message: 'OK',
    cars: cars,
  });
};

// GET specific car by ID.
export const getCarsbyId = async (req: Request, res: Response) => {
  try {
    const getId: number = Number(req.params.id);
    const car = await getCarById(getId);

    res.status(200).json({
      car,
    });
  } catch (error) {
    res.status(404).json({
      message: 'Data Not Found',
    });
  }
};

// CREATE
export const createCars = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No Image Uploaded' });
    }

    const { buffer } = req.file;
    const fileBase64 = buffer.toString('base64');
    const fileData = `data:${req.file.mimetype};base64,${fileBase64}`;

    const upload = await cloudinary.uploader.upload(fileData || req.file.path, {
      folder: 'challenge-5-bcr', // Adjust the folder name as needed
      use_filename: true,
    });

    const idCar = Math.floor(Math.random() * 100);
    const { name, price, category, image, start_date, end_date, availability } = req.body || {};

    const createCars = await createCar({
      id: idCar,
      name,
      price,
      category,
      image: upload.secure_url,
      start_date,
      end_date,
      availability,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: req.user!.id,
      createdBy: req.user!.name,
      updatedBy: null,
    } as any);

    res.status(201).json({
      status: 'OK',
      message: 'Data successfully created!',
      data: createCars,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error });
  }
};

// UPDATE / EDIT.
export const updateCars = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No Image Uploaded' });
    }

    const { buffer } = req.file;
    const fileBase64 = buffer.toString('base64');
    const fileData = `data:${req.file.mimetype};base64,${fileBase64}`;

    const upload = await cloudinary.uploader.upload(fileData || req.file.path, {
      folder: 'challenge-5-bcr', // Adjust the folder name as needed
      use_filename: true,
    });

    const { name, price, category, start_date, end_date, availability } = req.body || {};

    const id: number = Number(req.params.id);
    const updateCars = await updateCar(id, {
      name,
      price,
      category,
      image: upload.secure_url,
      start_date,
      end_date,
      availability,
      updatedAt: new Date(),
      user_id: req.user!.id,
      updatedBy: req.user!.name,
    } as any);

    res.status(201).json({
      message: 'Data berhasil di update!',
    });
  } catch (error) {
    res.status(404).json({
      message: 'Data Tidak ditemukan',
    });
  }
};

//  DELETE
export const deleteCars = async (req: Request, res: Response) => {
  const getId = Number(req.params.id);
  const deleteCars = await deleteCar(getId);
  // const filterById = await CarsModel.query().findById(Number(getId));

  res.status(200).json({
    status: 'OK',
    message: 'Item successfully deleted',
    // cars: filterById,
  });
};
