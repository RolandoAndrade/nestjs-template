import { Module } from '@nestjs/common';
import { ConfigService } from '../application/config.service';
import { configProviders } from "./config.providers";

@Module({
  providers: [...configProviders],
  exports: [ConfigService],
})
export class ConfigModule {}