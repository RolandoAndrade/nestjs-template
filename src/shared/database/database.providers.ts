import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigKeys } from "../config/domain/config.keys";
import { ConfigService } from "../config/application/config.service";
import { ConfigModule } from "../config/infrastructure/config.module";

function productionConfig() {
  if (process.env.NODE_ENV === 'production') {
    return {
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    };
  }
  return {};
}

export const dataBaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        type: 'postgres' as any,
        host: config.get(ConfigKeys.DATABASE_HOST),
        username: config.get(ConfigKeys.DB_USERNAME),
        password: config.get(ConfigKeys.DB_PASSWORD),
        database: config.get(ConfigKeys.DATABASE),
        entities: ['dist/**/*.entity{.ts,.js}'],
        port: config.get(ConfigKeys.DATABASE_PORT),
        migrations: [__dirname + './migrations/*{.ts,.js}'],
        synchronize: true,
        ...productionConfig(),
      } as any;
    },
  }),
];