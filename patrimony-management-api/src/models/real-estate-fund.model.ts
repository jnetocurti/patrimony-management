import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class RealEstateFund extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  code: string;

  @property({
    type: 'string',
  })
  sector: string;

  @property({
    type: 'number',
  })
  currentPrice?: number;

  @property({
    type: 'number',
  })
  dailyLiquidity?: number;

  @property({
    type: 'number',
  })
  dividend?: number;

  @property({
    type: 'number',
  })
  dividendYield?: number;

  @property({
    type: 'number',
  })
  dividendYieldThreeMonthsAccumulated?: number;

  @property({
    type: 'number',
  })
  dividendYieldSixMonthsAccumulated?: number;

  @property({
    type: 'number',
  })
  dividendYieldTwelveMonthsAccumulated?: number;

  @property({
    type: 'number',
  })
  dividendYieldThreeMonthsAverage?: number;

  @property({
    type: 'number',
  })
  dividendYieldSixMonthsAverage?: number;

  @property({
    type: 'number',
  })
  dividendYieldTwelveMonthsAverage?: number;

  @property({
    type: 'number',
  })
  liquidPatrimony?: number;

  @property({
    type: 'number',
  })
  patrimonyValue?: number;

  @property({
    type: 'number',
  })
  patrimonyValueByPrice?: number;

  @property({
    type: 'number',
  })
  dividendYieldPatrimonyValue?: number;

  @property({
    type: 'number',
  })
  physicalVacancy?: number;

  @property({
    type: 'number',
  })
  financialVacancy?: number;

  @property({
    type: 'number',
  })
  activeQuantity?: number;

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
