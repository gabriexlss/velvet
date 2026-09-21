import { ElectronAPI } from '@electron-toolkit/preload'
import { caminhoArquivo, EngineDetectada, Resposta } from '../shared/types'

interface rotasAPI{
  pegarCaminhoArquivo: () => Promise<Resposta<caminhoArquivo>>,
  detectarEngine: (dados: caminhoArquivo) => Promise<Resposta<EngineDetectada>>
}
declare global {
  interface Window {
    electron: ElectronAPI
    api: rotasAPI
  }
}
