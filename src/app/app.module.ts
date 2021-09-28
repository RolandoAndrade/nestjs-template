import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from "../shared/shared.module";
import { ConfigService } from "../shared/config/application/config.service";
import { ConfigKeys } from "../shared/config/domain/config.keys";
import { AllExceptionsFilter } from "./all-exceptions-filter";

@Module({
    imports: [SharedModule],
    controllers: [AppController],
    providers: [AppService, AllExceptionsFilter],
})
export class AppModule {
    static port: number | string;
    constructor(private readonly _configService: ConfigService) {
        AppModule.port = this._configService.get(ConfigKeys.APP_PORT);
    }
}
