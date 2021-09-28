import { EntityRepository, Repository } from "typeorm";
import { TestsEntity } from "./tests.entity";

@EntityRepository(TestsEntity)
export class TestsRepository extends Repository<TestsEntity> {

}