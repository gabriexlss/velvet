import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const settings = sqliteTable("settings", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    key: text("key").notNull().unique(),
    value: text("value").notNull(),
});

export const jogos = sqliteTable("jogos", {
    id: integer("id").primaryKey({ autoIncrement: true }), // id da tabela para cadastrar os jogos.
    nome: text("nome").notNull(), // nome do jogo
    engine: integer("engine").notNull(), // id da engine do jogo
    versao: text("versao").notNull(), // versão do jogo
    caminhoExecutavel: text("caminhoExecutavel").notNull(), // caminho do executavel
    caminhoSaves: text("caminhoSaves").notNull() //caminho da pasta de saves
})