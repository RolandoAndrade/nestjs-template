import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { TestsEntity } from "./tests.entity";
import { SharedModule } from "../shared.module";
import { TestsController } from "./tests.controller";
import { TestsRepository } from "./tests.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([TestsRepository]),
    SharedModule,
  ],
  controllers: [TestsController],
  providers: [TestsRepository],
  exports: []
})
export class TestsModule {}