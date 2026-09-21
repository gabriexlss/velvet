import { caminhoArquivo, EngineDetectada, Resposta } from '@shared/types';
import { ENGINES } from '@shared/vars';
import { ipcMain } from 'electron'
import { opendir } from 'node:fs/promises'


export function gameManipulation(): void {
    // IPC para detectar o jogo por meio do caminho do executável.
    ipcMain.handle('detectar-engine', async (_event, dados: caminhoArquivo) => {

        const arquivo = dados.caminho
        const caminho = arquivo.replace(arquivo.slice(arquivo.lastIndexOf("/") + 1), "").trim()

        // registrando os pontos que cada engine vai ganhar
        let pontosRenpy = 0
        let pontosRpgMakerNew = 0

        // engine escolhida e por quantos arquivos já varreu
        let engine: number = ENGINES.generico.id
        let contagem = 0

        // inicia uma pasta na pasta com o caminho informado para tentar deduzir a engine.
        try {
            const pastas = await opendir(caminho, {
                recursive: true
            })
            for await (const pasta of pastas) {
                const extensao = pasta.name.split('.').pop()?.toLowerCase()
                if (pontosRenpy >= 50 || pontosRpgMakerNew >= 50 || contagem >= 10000) {

                    if (pontosRenpy >= 50) {
                        engine = ENGINES.renpy.id
                        break
                    } else if (pontosRpgMakerNew >= 50) {
                        engine = ENGINES.rpgmakernew.id
                        break
                    } else {
                        engine = ENGINES.generico.id
                        break
                    }
                } else {
                    try {
                        if (extensao) {
                            if (ENGINES.renpy.extensoes.includes(extensao)) pontosRenpy++
                            if (ENGINES.rpgmakernew.extensoes.includes(extensao)) pontosRpgMakerNew++
                        }
                    } finally {
                        contagem++
                    }
                }
            }
            const resposta: Resposta<EngineDetectada> = {
                msg: engine === ENGINES.generico.id ? "Engine não detectada." : "Engine detectada com sucesso!",
                dados: {
                    engine: engine
                },
                ok: true,
                erros: null
            }
            console.log("Vencedor: ", engine, "Nesses Tentativas", contagem, "Pontos RPG: ", pontosRpgMakerNew, "Pontos Renpy: ", pontosRenpy, "No Caminho: ", caminho)
            return resposta
        } catch (erro) {
            const resposta: Resposta = {
                msg: '',
                dados: null,
                ok: false,
                erros: null
            }
            if (erro && typeof erro === 'object' && 'code' in erro) {
                switch (erro.code) {
                    case 'ENOENT':
                        resposta.msg = 'Impossivel Detectar Engine, Dirétorio Inexistente.'
                        return resposta
                        break
                    case 'ENOTDIR':
                        resposta.msg = 'Impossivel Detectar Engine, Caminho não é um Dirétorio.'
                        return resposta
                        break
                    default:
                        resposta.msg = 'Erro Desconhecido ao Procurar Engine.'
                        return resposta
                        break
                }
            }
            resposta.msg = 'Erro Desconhecido ao Procurar Engine.'
            return resposta
        }
    })
}