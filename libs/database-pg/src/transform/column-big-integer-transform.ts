import { ValueTransformer } from 'typeorm';

export class ColumnBigIntegerTransformer implements ValueTransformer {
  to(data: number): number {
    return data;
  }

  from(data: any): number {
    return parseInt(data);
  }
}
