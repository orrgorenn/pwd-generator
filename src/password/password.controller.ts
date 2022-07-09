import { Body, Controller, Get } from '@nestjs/common';
import { PasswordService } from './password.service';
import { Options, Password } from '../interfaces/password';

@Controller('password')
export class PasswordController {
  constructor(private readonly passwordService: PasswordService) {}

  @Get()
  getPassword(
    @Body('options') options: Options,
    @Body('length') length: number,
  ): Password {
    return this.passwordService.getPassword(options, length);
  }
}
