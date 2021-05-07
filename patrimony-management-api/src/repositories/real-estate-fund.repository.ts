import {inject} from '@loopback/core';
import {DataObject, DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {RealEstateFund, RealEstateFundRelations} from '../models';

export class RealEstateFundRepository extends DefaultCrudRepository<
  RealEstateFund,
  typeof RealEstateFund.prototype.ticker,
  RealEstateFundRelations
> {
  constructor(@inject('datasources.mongodb') dataSource: MongodbDataSource) {
    super(RealEstateFund, dataSource);
  }

  async import(
    entities: DataObject<RealEstateFund>[],
  ): Promise<RealEstateFund[]> {
    await this.deleteAll();
    return this.createAll(entities);
  }
}
