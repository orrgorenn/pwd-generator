import { PasswordController } from './password.controller';
import { Options } from '../interfaces/password';

describe('PasswordController', () => {
  let controller: PasswordController;
  let passwordService: any;

  const options: Options = {
    lowerCase: true,
    upperCase: true,
    numbers: false,
    symbols: false,
  };

  beforeEach(async () => {
    passwordService = {
      getPassword: jest.fn(),
    };
    controller = new PasswordController(passwordService);
  });

  it('Service should be called with correct params', () => {
    const pass = controller.getPassword(options, 10);
    expect(passwordService.getPassword).toBeCalledWith(options, 10);
  });
});
