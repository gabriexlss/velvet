import { ReactNode } from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger, useSidebar,} from './ui/sidebar'

import { HomeIcon, SettingsIcon } from 'lucide-react'

const SideBarFull = (): ReactNode => {
    const { open } = useSidebar()

    return (
        <Sidebar side="left" collapsible="icon" className="overflow-hidden">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem
                        className={
                            open
                                ? 'ml-auto mr-2 flex flex-row items-center gap-1 scale-130'
                                : 'flex flex-col items-center scale-130'
                        }
                    >
                        <span className={`text-xs ${open ? '' : 'hidden'}`}>
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
                        <span className="text-base">Aplicação</span>
                    </SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu className={open ? '' : 'gap-2'}>
                            <SidebarMenuItem
                                className={
                                    open ? '' : 'flex flex-col items-center justify-center'
                                }
                            >
                                <SidebarMenuButton
                                    className={open ? 'py-6' : 'scale-130'}
                                >
                                    <HomeIcon className={open ? 'size-5.5!' : ''} />
                                    <span className={open ? 'text-lg' : ''}>
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
                                    className={open ? 'py-6' : 'scale-130'}
                                >
                                    <SettingsIcon className={open ? 'size-5.5!' : ''} />
                                    <span className={open ? 'text-lg' : ''}>
                                        Configurações
                                    </span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem
                                className={
                                    open ? '' : 'flex flex-col items-center justify-center'
                                }
                            >
                                <SidebarMenuButton
                                    className={open ? 'py-6' : 'scale-130'}
                                >
                                    <SettingsIcon className={open ? 'size-5.5!' : ''} />
                                    <span className={open ? 'text-lg' : ''}>
                                        Configurações
                                    </span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

export default SideBarFull