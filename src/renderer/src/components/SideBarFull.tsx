import { ReactNode } from 'react'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger, useSidebar,} from './ui/sidebar'

import { HomeIcon, SettingsIcon } from 'lucide-react'

const SideBarFull = (): ReactNode => {
    const { open } = useSidebar()

    return (
        <Sidebar side="left" collapsible="icon" className="p-0!">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem
                        className={
                            open
                                ? 'ml-auto mr-2 flex flex-row items-center gap-1 scale-120'
                                : 'flex flex-col items-center scale-130'
                        }
                    >
                        <span className={`text-sm ${open ? '' : 'hidden'}`}>
                            Colapsar
                        </span>

                        <SidebarTrigger className="p-4" />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <div className="w-auto rounded border" />

            <SidebarContent>
                <SidebarGroup
                    className={
                        open
                            ? ''
                            : 'flex flex-col items-center justify-center px-0'
                    }
                >
                    <SidebarGroupLabel>
                        <span className="text-lg">Aplicação</span>
                    </SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu className="gap-2">
                            <SidebarMenuItem
                                className={
                                    open ? '' : 'flex flex-col items-center justify-center'
                                }
                            >
                                <SidebarMenuButton
                                    className={open ? 'h-11!' : 'scale-130'}
                                >
                                    <HomeIcon className={open ? 'size-5.5!' : ''} />
                                    <span className={open ? 'text-xl' : 'hidden'}>
                                        Home
                                    </span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem
                                className={
                                    open ? '' : 'flex flex-col items-center justify-center'
                                }
                            >
                                <SidebarMenuButton
                                    className={open ? 'h-11!' : 'scale-130'}
                                >
                                    <SettingsIcon className={open ? 'size-5.5!' : ''} />
                                    <span className={open ? 'text-xl' : 'hidden'}>
                                        Configurações
                                    </span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default SideBarFull