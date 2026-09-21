import { files_folders } from "./ipc/files-folders";
import { gameManipulation } from "./ipc/game-manipulation";

// arquivo para registrar todas as rotas do programa.
export function mainIPC (): void {
    // Rotas referente a tudo relacionado a arquivos e pastas.
    files_folders()

    // rotas referente a manipulação e deteccao do jogo inicialmente.
    gameManipulation()
}