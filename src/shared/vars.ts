
// Todas as Engines Suportadas.
export const ENGINES = {
    renpy: {
        id: 1,
        nome: 'Renpy',
        extensoes: ['rpy', 'rpyc', 'rpa', 'rpym', 'rpymc']
    },
    rpgmakernew: {
        id: 2,
        nome: 'RPG Maker (MV & MZ)',
        extensoes: ['rpgproject', 'rmmzproject', 'rpgsave', 'rmmzsave', 'rpgmvp', 'rpgmvm', 'rpgmvo', 'png_', 'ogg_', 'm4a_']
    },
    generico: {
        id: 0,
        nome: 'Outros/Desconhecido',
    }
} 
export type TipoEngine = keyof typeof ENGINES