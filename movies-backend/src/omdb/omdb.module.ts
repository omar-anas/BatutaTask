import { Module, HttpModule } from '@nestjs/common';
import { OmdbService } from './omdb.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  providers: [OmdbService],
  exports: [OmdbService],
})
export class OmdbModule {}
