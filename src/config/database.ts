import { ConnectionOptions } from 'typeorm'
import { User } from '../models'

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.PG_HOST || "localhost",
  port: Number(process.env.PG_PORT) || 5432,
  username: process.env.PG_USER || "postgres",
  password: process.env.PG_PASSWORD || "web@1234",
  database: process.env.PG_DB || "postgres",
  entities: [User],
  synchronize: true
}

export default config;