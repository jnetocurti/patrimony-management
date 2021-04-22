import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {RealEstateFund} from '../models';
import {RealEstateFundRepository} from '../repositories';

export class RealEstateFundController {
  constructor(
    @repository(RealEstateFundRepository)
    public realEstateFundRepository : RealEstateFundRepository,
  ) {}

  @post('/real-estate-funds')
  @response(200, {
    description: 'RealEstateFund model instance',
    content: {'application/json': {schema: getModelSchemaRef(RealEstateFund)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RealEstateFund, {
            title: 'NewRealEstateFund',
            
          }),
        },
      },
    })
    realEstateFund: RealEstateFund,
  ): Promise<RealEstateFund> {
    return this.realEstateFundRepository.create(realEstateFund);
  }

  @get('/real-estate-funds/count')
  @response(200, {
    description: 'RealEstateFund model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RealEstateFund) where?: Where<RealEstateFund>,
  ): Promise<Count> {
    return this.realEstateFundRepository.count(where);
  }

  @get('/real-estate-funds')
  @response(200, {
    description: 'Array of RealEstateFund model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RealEstateFund, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RealEstateFund) filter?: Filter<RealEstateFund>,
  ): Promise<RealEstateFund[]> {
    return this.realEstateFundRepository.find(filter);
  }

  @patch('/real-estate-funds')
  @response(200, {
    description: 'RealEstateFund PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RealEstateFund, {partial: true}),
        },
      },
    })
    realEstateFund: RealEstateFund,
    @param.where(RealEstateFund) where?: Where<RealEstateFund>,
  ): Promise<Count> {
    return this.realEstateFundRepository.updateAll(realEstateFund, where);
  }

  @get('/real-estate-funds/{id}')
  @response(200, {
    description: 'RealEstateFund model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RealEstateFund, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(RealEstateFund, {exclude: 'where'}) filter?: FilterExcludingWhere<RealEstateFund>
  ): Promise<RealEstateFund> {
    return this.realEstateFundRepository.findById(id, filter);
  }

  @patch('/real-estate-funds/{id}')
  @response(204, {
    description: 'RealEstateFund PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RealEstateFund, {partial: true}),
        },
      },
    })
    realEstateFund: RealEstateFund,
  ): Promise<void> {
    await this.realEstateFundRepository.updateById(id, realEstateFund);
  }

  @put('/real-estate-funds/{id}')
  @response(204, {
    description: 'RealEstateFund PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() realEstateFund: RealEstateFund,
  ): Promise<void> {
    await this.realEstateFundRepository.replaceById(id, realEstateFund);
  }

  @del('/real-estate-funds/{id}')
  @response(204, {
    description: 'RealEstateFund DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.realEstateFundRepository.deleteById(id);
  }
}
