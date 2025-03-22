import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_numr0A4Sylpk@ep-polished-sun-a15e9qzl-pooler.ap-southeast-1.aws.neon.tech/ai-room-designer?sslmode=require',
  },
});
