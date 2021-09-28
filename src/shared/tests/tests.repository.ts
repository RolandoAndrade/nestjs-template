import { EntityRepository, FindManyOptions, Repository } from "typeorm";
import { TestsEntity } from "./tests.entity";

@EntityRepository(TestsEntity)
export class TestsRepository extends Repository<TestsEntity> {
  async find(options: any): Promise<TestsEntity[]> {
    return super.find(options);
  }
}