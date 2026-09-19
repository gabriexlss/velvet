import { ReactNode } from "react";
import SideBarFull from "./SideBarFull"
import Header from "./Header";
import { SidebarInset } from "./ui/sidebar";

interface JanelaProps {
    children: ReactNode
}
const Janela = ({ children }: JanelaProps): ReactNode => {
    return (
        <div className="flex overflow-hidden w-full">
            <SideBarFull />
            <SidebarInset>
                <Header />
                <main className="w-full min-h-screen flex flex-col items-center gap-4 overflow-x-hidden pt-2">
                    {children}
                </main>
            </SidebarInset>
        </div>
    )
}

export default Janela
