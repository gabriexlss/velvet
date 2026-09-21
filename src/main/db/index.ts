import path from "node:path";
import { app } from "electron";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import * as schema from "./schema";

let sqlite: Database.Database;
let db: ReturnType<typeof drizzle<typeof schema>>;

export function initializeDatabase(): ReturnType<typeof drizzle<typeof schema>> {
    const databasePath = path.join(app.getPath("userData"),"velvet.db",);

    sqlite = new Database(databasePath);

    db = drizzle(sqlite, {
        schema,
    });

    const migrationsPath = app.isPackaged
        ? path.join(process.resourcesPath, "drizzle")
        : path.join(app.getAppPath(), "drizzle");

    migrate(db, {
        migrationsFolder: migrationsPath,
    });

    return db;
}

export function getDatabase():ReturnType<typeof drizzle<typeof schema>> {
    if (!db) {
        throw new Error("Database has not been initialized");
    }

    return db;
}