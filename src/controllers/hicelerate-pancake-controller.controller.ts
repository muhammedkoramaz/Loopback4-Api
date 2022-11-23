import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param, response
} from '@loopback/rest';
import {Cities} from '../models';
import {CitiesRepository} from '../repositories';

export class HiceleratePancakeController {

  constructor(
    @repository(CitiesRepository)
    public citiesRepository : CitiesRepository,
  ) {}
  @get('/cities/{zip_code}')
  @response(200, {
    description: 'Cities model instance',
    content: {
      'application/json': {
        type : "array",
        schema: getModelSchemaRef(Cities, {includeRelations: true}),
      },
    },
  })
  async findByZipCode(
    @param.path.number('zip_code') zip_code: number
  ): Promise<object> {
    const Response= await this.citiesRepository.find({where : {zip_code}, fields:{city:true,state:true}})
    return  Response
  }
}
