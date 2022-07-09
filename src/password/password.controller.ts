import { BadRequestException, Body, Controller, Get } from '@nestjs/common';
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
    if (!options) {
      throw new BadRequestException('Please provide correct options.');
    }
    if (!length) {
      throw new BadRequestException('Please provide password length.');
    }
    return this.passwordService.getPassword(options, length);
  }
}
