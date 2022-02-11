import { Module } from '@nestjs/common';
import { GradesModule } from './grades/grades.module';

@Module({
  imports: [GradesModule],
})
export class AppModule {}
