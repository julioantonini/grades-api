import * as database from '../entity';

const entities = (Object.keys(database) as Array<keyof typeof database>).map(
  (entity: keyof typeof database) => database[entity],
);

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5444,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '123456',
  database: 'postgres',
  synchronize: false,
  migrationsRun: true,
  logging: process.env.NODE_ENV === 'local',
  entities,
  migrations: [__dirname + '/../migration/**{.ts,.js}'],
  cli: {
    entitiesDir: 'libs/database-pg/src/entity',
    migrationsDir: 'libs/database-pg/src/migration',
  },
};
