import './assets/globals.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { TooltipProvider } from './components/ui/tooltip';
import { SidebarProvider } from './components/ui/sidebar';
import { Toaster } from './components/ui/toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Toaster />
      <TooltipProvider>
        <SidebarProvider defaultOpen={false}>
          <App />
        </SidebarProvider>
      </TooltipProvider>
    </BrowserRouter>
  </StrictMode>
)
