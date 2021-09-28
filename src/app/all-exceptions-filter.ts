import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Injectable
} from "@nestjs/common";
import { LoggerService } from "../shared/logger/logger.service";

@Injectable()
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly loggerService: LoggerService) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = HttpStatus.INTERNAL_SERVER_ERROR;

    this.loggerService.error(
      `ERROR: ${status} | PATH: ${request.url} | EXCEPTION: ${exception}`,
      'AllExceptionsFilter',
    );

    const responseStatus = {
      statusCode: status,
      message: exception['message'] || 'unknown',
      timestamp: new Date().toISOString(),
      path: request.url,
    };

    response.status(status).json(responseStatus);
  }
}