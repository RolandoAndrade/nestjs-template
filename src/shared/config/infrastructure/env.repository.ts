import { ConfigRepository } from "../domain/config.repository";
import * as fs from "fs";
import { parse } from 'dotenv';

export class EnvRepository implements ConfigRepository{
  getConfig(): { [p: string]: any } {
    process.env.NODE_ENV = process.env.NODE_ENV || 'development';
    if (process.env.NODE_ENV === 'development') {
      const isExistingFile = fs.existsSync(".env.development");
      if (isExistingFile) {
        return parse(fs.readFileSync(".env.development"));
      }
      process.exit(0);
    } else if (process.env.NODE_ENV === 'test') {
      const isExistingFile = fs.existsSync(".env.test");
      if (isExistingFile) {
        return parse(fs.readFileSync(".env.test"));
      }
      process.exit(0);
    } else if (process.env.NODE_ENV === 'production') {
      return process.env
    }
    throw new Error('ENV variables are not defined');
  }
}