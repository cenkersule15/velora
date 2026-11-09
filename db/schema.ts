import {sqliteTable,text} from 'drizzle-orm/sqlite-core';
export const garageRecords=sqliteTable('garage_records',{id:text('id').primaryKey(),owner:text('owner').notNull(),kind:text('kind').notNull(),payload:text('payload').notNull(),createdAt:text('created_at').notNull()});
