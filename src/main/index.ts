import { app } from 'electron'
import { createWindow } from './mainWindow';
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { mainIPC } from './mainIpc';

// esse metodo só é disparado qnd o processo principal do node é criado, algumas apis só funcionam após isso.
app.whenReady().then(() => {
  // se for mac, encerra.
  if(process.platform === 'darwin'){
    app.quit()
    return
  }
  // função para iniciar todos os IPCs
  mainIPC()

  // função que cria a janela principal do programa.
  createWindow()

  // Set app user model id for windows
  electronApp.setAppUserModelId('com.gabriexlss.velvet')

  // Abre e fecha o DevTools com F12 e ignora CTRL + R pra dar refresh na pagina em produção
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // desativei já que não possuo um macOS para testar, por isso o programa não será compátivel com tal.
  /*
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  */
})
// Encerra o programa se todas as janelas forem fechadas, exceto no macOS, aparentemente isso não acontece se encerrar usando CTRL + Q
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})