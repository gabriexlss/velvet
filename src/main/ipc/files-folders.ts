import { ipcMain, dialog } from 'electron'
import { caminhoArquivo, Resposta } from '@shared/types'

const isWindows = process.platform === 'win32'

export function files_folders(): void {

    // função para abrir o explorador de arquivos e escolher um caminho.
    ipcMain.handle('pegar-caminho-arquivo', async () => {
        const arquivo = await dialog.showOpenDialog({
            properties: ['openFile'],
            filters: [
                {
                    name: isWindows ? 'Arquivo exe' : 'Arquivo sh',
                    extensions: [isWindows ? 'exe' : 'sh']
                }
            ]
        })
        if (arquivo.canceled) {
            const resposta: Resposta = {
                msg: 'Selecione um Arquivo.',
                ok: false,
                dados: null,
                erros: null
            }
            return resposta
        }
        const arquivoNormalizado = arquivo.filePaths[0].replaceAll('\\', '/')
        const resposta: Resposta<caminhoArquivo> = {
            msg: 'Arquivo selecionado.',
            ok: true,
            dados: {
                caminho: arquivoNormalizado
            },
            erros: null
        }
        return resposta
    })
}