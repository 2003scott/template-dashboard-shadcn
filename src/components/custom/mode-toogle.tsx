"use client"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

export const ModeToggle = () => {

    const { theme, setTheme } = useTheme()

    return (
        <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    <Button className="rounded-full size-8 bg-background"
                        variant={"outline"}
                        size={"icon"}
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <SunIcon className="w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" />
                        <MoonIcon className="absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0" />
                        <span className="sr-only">Cambiar Tema</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Cambiar Tema</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
