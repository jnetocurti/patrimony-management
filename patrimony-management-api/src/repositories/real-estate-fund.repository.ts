import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {RealEstateFund, RealEstateFundRelations} from '../models';

export class RealEstateFundRepository extends DefaultCrudRepository<
  RealEstateFund,
  typeof RealEstateFund.prototype.ticker,
  RealEstateFundRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(RealEstateFund, dataSource);
  }
}
