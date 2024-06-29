import { UsersModel } from '../models/UserModels';

//Get All Cars
export const get = () => {
  return UsersModel.query();
};

//Get By ID
export const getById = (id: number) => {
  return UsersModel.query().findById(id);
};

//Get By Email
export const getByEmail = (email: string) => {
  return UsersModel.query().findOne({ email: email });
};

//Create User
export const create = (args: any) => {
  const user = UsersModel.query().insert(args);
  console.log(user);
  return user;
};

//Update
export const update = (id: number, args: any) => {
  return UsersModel.query().findById(id).patch(args);
};

//Delete
export const deleteUsers = (id: number) => {
  return UsersModel.query().deleteById(id);
};

//

//
