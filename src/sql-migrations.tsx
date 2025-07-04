import * as SQLite from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useDrizzleStudio } from 'expo-drizzle-studio-plugin';

import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '../drizzle/migrations';

const expo = SQLite.openDatabaseSync('nyamo.db');
const db = drizzle(expo);

const SqlMigrations = () => {
	useDrizzleStudio(db.$client);
	useMigrations(db, migrations);

	return null;
};

export default SqlMigrations;
