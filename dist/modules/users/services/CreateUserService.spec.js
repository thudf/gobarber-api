"use strict";

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _FakeCacheProvider = _interopRequireDefault(require("../../../shared/container/providers/CacheProvider/fakes/FakeCacheProvider"));

var _FakeUsersRepository = _interopRequireDefault(require("../repositories/fakes/FakeUsersRepository"));

var _FakeHashSProvider = _interopRequireDefault(require("../providers/HashProvider/fakes/FakeHashSProvider"));

var _CreateUserService = _interopRequireDefault(require("./CreateUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeCacheProvider;
let fakeUsersRepository;
let fakeHashProvider;
let createUser;
describe('CreateUser', () => {
  beforeEach(() => {
    fakeCacheProvider = new _FakeCacheProvider.default();
    fakeUsersRepository = new _FakeUsersRepository.default();
    fakeHashProvider = new _FakeHashSProvider.default();
    createUser = new _CreateUserService.default(fakeUsersRepository, fakeHashProvider, fakeCacheProvider);
  });
  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: '123456'
    });
    expect(user).toHaveProperty('id');
  });
  it('should not be able to create two users with same email', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: '123456'
    });
    await expect(createUser.execute({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: '123456'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});