import { ReactNode } from "react";
import { TooltipProvider } from "./ui/tooltip";
import { SidebarProvider } from "./ui/sidebar";
import SideBarFull from "./SideBarFull"

interface JanelaProps {
    children: ReactNode
}
const Janela = ({ children }: JanelaProps): ReactNode => {
    return (
        <TooltipProvider>
            <SidebarProvider
                style={
                    {
                        "--sidebar-width": "20rem",
                        "--sidebar-width-icon": "4rem",
                    } as React.CSSProperties
                }>
                <SideBarFull />
                <main className="w-full min-h-screen flex flex-col items-center gap-4 overflow-x-hidden">
                    {children}
                </main>
            </SidebarProvider>
        </TooltipProvider>
    )
}

export default Janela
