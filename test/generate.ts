import faker from 'faker'

export function generateUserData(overide = {}) {
  return {
    id: faker.random.number(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    created: new Date(),
    deleted: false,
    ...overide
  };
};

export function generateUsersData(n: number = 1) {
  return Array.from({
    length: n
  }, (_, i) => {
    return generateUserData()
  });
};

export function generateUserPayload() {
  return {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
  };
};
