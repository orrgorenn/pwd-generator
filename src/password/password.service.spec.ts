import { PasswordService } from './password.service';
import { Options } from '../interfaces/password';

describe('PasswordService', () => {
  let service: PasswordService;
  let pass;

  const options: Options = {
    lowerCase: true,
    upperCase: true,
    numbers: false,
    symbols: false,
  };

  beforeEach(async () => {
    service = new PasswordService();
    pass = service.getPassword(options, 10);
  });

  it('should have property password', () => {
    expect(pass).toHaveProperty('password');
  });

  it('should have correct length', () => {
    expect(pass.password).toHaveLength(10);
  });
});
