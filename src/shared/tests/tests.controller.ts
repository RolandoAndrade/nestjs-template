import { Controller, Get } from "@nestjs/common";
import { TestsEntity } from "./tests.entity";
import { TestsRepository } from "./tests.repository";
import { LoggerService } from "../logger/logger.service";

@Controller("tests")
export class TestsController{
  constructor(private readonly repo: TestsRepository, private readonly logger: LoggerService) {

  }

  @Get()
  async getAll(): Promise<TestsEntity[]> {
    this.logger.log("getAll", "TestsController")
    return this.repo.find({id: 1})
  }

}