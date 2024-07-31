"use client"
import Link from "next/link"
import { Button } from "../ui/button"
import { LayoutGrid, LogOut, User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const UserIcon = () => {
    return (
        <DropdownMenu>
            <TooltipProvider disableHoverableContent>
                <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                className="relative h-8 w-8 rounded-full"
                            >
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="#" alt="Avatar" />
                                    <AvatarFallback className="bg-transparent">DS</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">Perfil</TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">Diego Scott</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            diego@example.com
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem className="hover:cursor-pointer" asChild>
                        <Link href="/dashboard" className="flex items-center">
                            <LayoutGrid className="w-4 h-4 mr-3 text-muted-foreground" />
                            Tablero
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:cursor-pointer" asChild>
                        <Link href="/account" className="flex items-center">
                            <User className="w-4 h-4 mr-3 text-muted-foreground" />
                            Cuenta
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:cursor-pointer" onClick={() => { }}>
                    <LogOut className="w-4 h-4 mr-3 text-muted-foreground" />
                    Cerrar sesión
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
