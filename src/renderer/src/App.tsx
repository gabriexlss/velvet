import { Route, Routes } from "react-router-dom";
import Jogos from "./pages/Jogos";

function App(): React.JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  return (
    <Routes>
      <Route path="/" element={<Jogos />}/>
    </Routes>
  )
}

export default App
