import { ElectronAPI } from '@electron-toolkit/preload'
interface rotasAPI{
  teste: void
}
declare global {
  interface Window {
    electron: ElectronAPI
    api: rotasAPI
  }
}
