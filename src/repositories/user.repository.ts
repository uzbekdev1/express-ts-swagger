import { getRepository } from "typeorm";
import { User } from '../models'

export interface IUserPayload {
  name: string;
  phone: string;
  email: string
}

export const getUsers = async (): Promise<Array<User>> => {
  const userRepository = getRepository(User);

  return userRepository.find({
    deleted: false
  });
}

export const getUser = async (id: number): Promise<User | null> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ id: id });

  return !user ? null : user;
}

export const createUser = async (payload: IUserPayload): Promise<User> => {
  const userRepository = getRepository(User);
  const user = new User();

  return userRepository.save({
    ...user,
    ...payload
  })
}

export const updateUser = async (id: number, payload: IUserPayload): Promise<User | null> => {
  const userRepository = getRepository(User);
  const user = await getUser(id);

  if (user == null)
    return null;

  return userRepository.save({
    ...user,
    ...payload
  });
}

export const deleteUser = async (id: number): Promise<User | null> => {
  const userRepository = getRepository(User);
  const user = await getUser(id);

  if (user == null)
    return null;

  user.deleted = true;

  return userRepository.save(user);
}
