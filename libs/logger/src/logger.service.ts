import { Injectable } from '@nestjs/common';
import { LOGGER_CONTEXT } from './types/logger-context.enum';

@Injectable()
export class LoggerService {
  private context: LOGGER_CONTEXT;

  public setContext(context: LOGGER_CONTEXT): void {
    this.context = context;
  }

  public log(message: string): void {
    console.log(`[${this.context}] ${this.getDate()} message: ${message}`);
  }

  public logError(message: string, error: any): void {
    console.log(
      `[${this.context}] ${this.getDate()} message: ${message} error: ${error}`,
    );
  }

  private getDate() {
    return new Date().toISOString().replace('T', ' ').substring(0, 19);
  }
}
