import { Logger, Module } from "@nestjs/common";
import { dataBaseProviders } from "./database.providers";

@Module({
  imports: [...dataBaseProviders] as any,
  exports: [...dataBaseProviders] as any,
})
export class DatabaseModule {}