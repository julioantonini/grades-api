import { Injectable } from '@nestjs/common';
import { LOGGER_CONTEXT } from './types/logger-context.enum';

@Injectable()
export class LoggerService {
  private context: LOGGER_CONTEXT;

  public setContext(context: LOGGER_CONTEXT): void {
    this.context = context;
  }

  public log(message: string): void {
    console.log(`[${this.context}] ${new Date()} ${message}`);
  }

  public logError(message: string, error: any): void {
    console.log(`[${this.context}] ${new Date()} ${message}: ${error}`);
  }
}
