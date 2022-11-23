import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Cities, CitiesRelations} from '../models';

export class CitiesRepository extends DefaultCrudRepository<
  Cities,
  typeof Cities.prototype.zip_code,
  CitiesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Cities, dataSource);
  }
}
