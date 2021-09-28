import { Provider } from "@nestjs/common/interfaces/modules/provider.interface";
import { ConfigService } from "../application/config.service";
import { ConfigRepository } from "../domain/config.repository";
import { EnvRepository } from "./env.repository";

export const configProviders: Provider[] = [
  {
    provide: ConfigService,
    useValue: new ConfigService(new EnvRepository())
  }
]