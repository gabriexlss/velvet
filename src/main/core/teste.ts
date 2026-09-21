import { opendir } from 'node:fs/promises'

async function teste(arquivo: string): Promise<void> {
    const extensoesRenpy = ['rpy', 'rpyc', 'rpa', 'rpym', 'rpymc']
    const extensoesRpgMakerModerno = ['rpgproject', 'rmmzproject', 'rpgsave', 'rmmzsave', 'rpgmvp', 'rpgmvm', 'rpgmvo', 'png_', 'ogg_', 'm4a_'];

    const caminho = arquivo

    let pontosRenpy = 0
    let pontosRpgMaker = 0

    let vencedor: string|null = null
    let contagem = 0

    try {
        const pastas = await opendir(caminho, {
            recursive: true
        })
        for await (const pasta of pastas) {
            const extensao = pasta.name.split('.').pop()?.toLowerCase()
            if (pontosRenpy >= 50 || pontosRpgMaker >= 50 || contagem >= 10000) {

                if (pontosRenpy >= 50) {
                    vencedor = 'renpy'
                    console.log("Vencedor: ", vencedor, "Nesses Tentativas", contagem, "Pontos RPG: ", pontosRpgMaker, "Pontos Renpy: ", pontosRenpy, "No Caminho: ", caminho)
                    return
                } else if (pontosRpgMaker >= 50) {
                    vencedor = 'rpgmaker'
                    console.log("Vencedor: ", vencedor, "Nesses Tentativas", contagem, "Pontos RPG: ", pontosRpgMaker, "Pontos Renpy: ", pontosRenpy, "No Caminho: ", caminho)
                    return
                } else {
                    vencedor = 'generico'
                    console.log("Vencedor: ", vencedor, "Nesses Tentativas", contagem, "Pontos RPG: ", pontosRpgMaker, "Pontos Renpy: ", pontosRenpy, "No Caminho: ", caminho)
                    return
                }
            } else {
                try {
                    if (extensao) {
                        if (extensoesRenpy.includes(extensao)) pontosRenpy++
                        if (extensoesRpgMakerModerno.includes(extensao)) pontosRpgMaker++
                    }
                } finally {
                    contagem++
                }

            }
        }
        if(!vencedor){
            vencedor = 'generico'
            console.log("Vencedor: ", vencedor, "Nesses Tentativas", contagem, "Pontos RPG: ", pontosRpgMaker, "Pontos Renpy: ", pontosRenpy, "No Caminho: ", caminho)
            return
        }
    } catch (erro) {
        if (erro && typeof erro === 'object' && 'code' in erro) {
            switch (erro.code) {
                case 'ENOENT':
                    console.log("Dirétorio Inexistente")
                    break
                case 'ENOTDIR':
                    console.log("Não é uma pasta.")
            }
        }
    }
}
teste('D:/Jogos/BeingADIK-0.8.0-pc/game.exe')
teste('D:/Jogos/Corporate_Slave_Succubus_Trad_RobbieFemboy')
teste('D:/Jogos/DokiDokiMassage')
