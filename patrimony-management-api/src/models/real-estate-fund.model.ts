import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class RealEstateFund extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  ticker: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  document: string;

  @property({
    type: 'string',
    required: true,
  })
  manager: string;

  @property({
    type: 'string',
    required: true,
  })
  segment: string;

  @property({
    type: 'string',
    required: true,
  })
  mandate: string;

  @property({
    type: 'string',
    required: true,
  })
  administrator: string;

  @property({
    type: 'string',
    required: true,
  })
  administratorDocument: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RealEstateFund>) {
    super(data);
  }
}

export interface RealEstateFundRelations {
  // describe navigational properties here
}

export type RealEstateFundWithRelations = RealEstateFund &
  RealEstateFundRelations;
