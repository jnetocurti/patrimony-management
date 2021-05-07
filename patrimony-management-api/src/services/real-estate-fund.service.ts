import {BindingScope, injectable} from '@loopback/core';
import {DataObject, repository} from '@loopback/repository';
import {Request} from '@loopback/rest';
import {RealEstateFund} from '../models';
import {RealEstateFundRepository} from '../repositories';
import {MulterRequest} from '../types';

const csv = require('csvtojson');

@injectable({scope: BindingScope.TRANSIENT})
export class RealEstateFundService {
  constructor(
    @repository(RealEstateFundRepository)
    public realEstateFundRepository: RealEstateFundRepository,
  ) {}

  async import(request: Request): Promise<RealEstateFund[]> {
    const records = await this.getRealEstateFundRecords(request);
    return this.realEstateFundRepository.import(records);
  }

  private async getRealEstateFundRecords(
    request: Request,
  ): Promise<DataObject<RealEstateFund>[]> {
    let realEstateFunds: DataObject<RealEstateFund>[] = [];

    for (const f of (request as MulterRequest).files) {
      const records = await this.getParser().fromString(f.buffer.toString());
      realEstateFunds = realEstateFunds.concat(records);
    }

    return realEstateFunds;
  }

  private getParser() {
    return csv({
      colParser: {
        code: this.formatString,
        sector: this.formatString,
        currentPrice: this.formatFloat,
        dailyLiquidity: this.formatInteger,
        dividend: this.formatFloat,
        dividendYield: this.formatPercentage,
        dividendYieldThreeMonthsAccumulated: this.formatPercentage,
        dividendYieldSixMonthsAccumulated: this.formatPercentage,
        dividendYieldTwelveMonthsAccumulated: this.formatPercentage,
        dividendYieldThreeMonthsAverage: this.formatPercentage,
        dividendYieldSixMonthsAverage: this.formatPercentage,
        dividendYieldTwelveMonthsAverage: this.formatPercentage,
        liquidPatrimony: this.formatFloat,
        patrimonyValue: this.formatFloat,
        patrimonyValueByPrice: this.formatFloat,
        dividendYieldPatrimonyValue: this.formatFloat,
        physicalVacancy: this.formatPercentage,
        financialVacancy: this.formatFloat,
        activeQuantity: this.formatFloat,
      },
      checkType: true,
    });
  }

  private formatString(item: string) {
    return item.toUpperCase();
  }

  private formatFloat(item: string) {
    const number: number = parseFloat(
      item.replace(/[.]/g, '').replace(',', '.'),
    );
    return isNaN(number) ? null : number;
  }

  private formatInteger(item: string) {
    const number: number = parseInt(item);
    return isNaN(number) ? null : number;
  }

  private formatPercentage(item: string) {
    const number: number = parseFloat(
      item.replace(/[%.]/g, '').replace(',', '.'),
    );
    return isNaN(number) ? null : (number / 100).toFixed(4);
  }
}
