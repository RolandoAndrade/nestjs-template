import { ObjectType } from "typeorm/common/ObjectType";
import { Connection } from "typeorm";
import { Provider } from "@nestjs/common/interfaces/modules/provider.interface";

export function createRepositoryProvider(repository: ObjectType<any>): Provider{
  return {
    provide: repository,
    useFactory: (connection: Connection) =>
      connection.getCustomRepository(repository),
    inject: [Connection]
  }
}