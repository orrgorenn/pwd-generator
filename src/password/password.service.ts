import { Injectable } from '@nestjs/common';
import { Options, Password } from '../interfaces/password';

export function generateKey(options: Options): string {
  let key = '';
  if (options.lowerCase) {
    key += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (options.upperCase) {
    key += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (options.numbers) {
    key += '0123456789';
  }
  if (options.symbols) {
    key += '!@#$%^&*()_+=,./';
  }
  return key;
}

export function generatePassword(key: string, length: number): Password {
  let randPassword = '';
  for (let i = 0; i < length; i++) {
    const randPos = Math.floor(Math.random() * key.length);
    randPassword += key.substring(randPos, randPos + 1);
  }
  return { password: randPassword };
}

@Injectable()
export class PasswordService {
  getPassword(options: Options, length: number): Password {
    const key = generateKey(options);
    return generatePassword(key, length);
  }
}
