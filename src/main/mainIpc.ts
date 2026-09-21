import { genericCore } from "./core/generic";
import { files_folders } from "./ipc/files-folders";

// arquivo para registrar todas as rotas do programa.
export function mainIPC (): void {
    // Rotas referente a tudo relacionado a arquivos e pastas.
    files_folders()

    // rotas referente ao core padrão pra deteccão de jogos ou jogos sem engine suportada definida.
    genericCore()
}