import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { TestsEntity } from "./tests.entity";
import { SharedModule } from "../shared.module";
import { TestsController } from "./tests.controller";
import { TestsRepository } from "./tests.repository";
import { Connection } from "typeorm";
import { createRepositoryProvider } from "../../../etc/utils/typeorm/create-repository-provider";

@Module({
  imports: [
    TypeOrmModule.forFeature([TestsRepository]),
    SharedModule,
  ],
  controllers: [TestsController],
  providers: [
    createRepositoryProvider(TestsRepository)
  ],
  exports: []
})
export class TestsModule {}