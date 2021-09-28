import { ConfigRepository } from "../domain/config.repository";

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(private repository: ConfigRepository) {
    this.envConfig = repository.getConfig();
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}