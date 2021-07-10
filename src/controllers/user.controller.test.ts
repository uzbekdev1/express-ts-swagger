import UserController from './user.controller'
import * as UserRepository from '../repositories/user.repository'
import { generateUsersData, generateUserPayload, generateUserData } from '../../test/generate'

afterEach(() => {
  jest.resetAllMocks();
});

describe("UserController", () => {

  describe("getUsers", () => {

    test("should return user list", async () => {

      const usersData = generateUsersData(2);
      const spy = jest.spyOn(UserRepository, 'getUsers').mockResolvedValueOnce(usersData);
      const controller = new UserController();

      const users = await controller.getUsers();

      expect(users).toEqual(usersData); 
      expect(spy).toHaveBeenCalledTimes(1);
    });

  });

  describe("getUser", () => {

    test("should return user from the database", async () => {

      const id = 1;
      const userData = generateUserData({ id });
      const spy = jest.spyOn(UserRepository, 'getUser').mockResolvedValueOnce(userData);
      const controller = new UserController();

      const user = await controller.getUser(id.toString());

      expect(user).toEqual(userData);
      expect(user?.id).toBe(id);
      expect(spy).toHaveBeenCalledWith(id);
      expect(spy).toHaveBeenCalledTimes(1);
    });

  });


  describe("addUser", () => {

    test("should add user to the database", async () => {

      const payload = generateUserPayload();
      const userData = generateUserData(payload);
      const spy = jest.spyOn(UserRepository, 'createUser').mockResolvedValueOnce(userData);
      const controller = new UserController();

      const user = await controller.createUser(payload);

      expect(user).toMatchObject(payload);
      expect(user).toEqual(userData);
      expect(spy).toHaveBeenCalledWith(payload);
      expect(spy).toHaveBeenCalledTimes(1);
    });

  });

  describe("editUser", () => {

    test("should edit user to the database", async () => {

      const payload = generateUserPayload();
      const userData = generateUserData(payload);
      const spy = jest.spyOn(UserRepository, 'updateUser').mockResolvedValueOnce(userData);
      const controller = new UserController();
      const id = 1;

      const user = await controller.updateUser(id.toString(), payload);

      expect(spy).toHaveBeenCalledTimes(1);
    });

  });

  describe("removeUser", () => {

    test("should remove user to the database", async () => {

      const payload = generateUserPayload();
      const userData = generateUserData(payload);
      const id = 1;
      const spy = jest.spyOn(UserRepository, 'deleteUser').mockResolvedValueOnce(userData);
      const controller = new UserController();

      const user = await controller.deleteUser(id.toString());

      expect(spy).toHaveBeenCalledTimes(1);
    });

  });

})