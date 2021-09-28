export abstract class ConfigRepository {
  abstract getConfig(): { [key: string]: any }
}