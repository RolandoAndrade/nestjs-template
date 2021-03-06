import { Logger, Module } from "@nestjs/common";
import { ConfigModule } from "./config/infrastructure/config.module";
import { LoggerService } from "./logger/logger.service";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [ConfigModule, DatabaseModule],
  providers: [
    ConfigModule,
    {
      provide: LoggerService,
      useValue: new Logger()
    }
  ],
  exports: [ConfigModule, LoggerService],
})
export class SharedModule {}