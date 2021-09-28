import { LoggerService as LS, LogLevel } from "@nestjs/common";

export abstract class LoggerService implements LS{
  abstract debug(message: any, ...optionalParams: any[]): any;

  abstract error(message: any, ...optionalParams: any[]): any;

  abstract log(message: any, ...optionalParams: any[]): any;

  abstract setLogLevels(levels: LogLevel[]): any;

  abstract verbose(message: any, ...optionalParams: any[]): any;

  abstract warn(message: any, ...optionalParams: any[]): any;

}