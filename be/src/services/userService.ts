import { create, get, getById, getByEmail, update, deleteUsers } from '../repositories/userRepository';

export const getAllUser = () => {
  return get();
};

export const createUser = (args: any) => {
  console.log(args);
  return create(args);
};

export const getUserById = (id: number) => {
  return getById(id);
};

export const getUserByEmail = (email: string) => {
  return getByEmail(email);
};

export const updateUsers = (id: number, args: any) => {
  return update(id, args);
};

export const deleteUser = (id: number) => {
  return deleteUsers(id);
};

//
