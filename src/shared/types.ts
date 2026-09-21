export interface Resposta<T = null>{
    msg: string,
    dados: T,
    ok: boolean,
    erros: string[] | null
}
export interface caminhoArquivo{
    caminho: string
}
export interface EngineDetectada{
    engine: number,
}