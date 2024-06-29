import { create, get, getById, update, deleteCars, getready } from '../repositories/carRepository';

export const getAllCarsReady = () => {
  return getready();
};

export const getAllCars = () => {
  return get();
};

export const createCar = (args: any) => {
  return create(args);
};

export const getCarById = (id: number) => {
  return getById(id);
};

export const updateCar = (id: number, args: any) => {
  return update(id, args);
};

export const deleteCar = (id: number) => {
  return deleteCars(id);
};

//

//
