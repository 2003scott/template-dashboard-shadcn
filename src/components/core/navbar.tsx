import { ModeToggle } from "../custom/mode-toogle"
import { UserIcon } from "../custom/user-icon"
import { SheetMenu } from "./sheet-menu"

export const Navbar = ({ title }: { title: string }) => {
    return (
        <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
            <div className="mx-4 sm:mx-8 flex h-14 items-center">
                <div className="flex items-center space-x-4 lg:space-x-0">
                    <SheetMenu />
                    <h2 className="font-bold">{title}</h2>
                </div>
                <div className="flex flex-1 items-center space-x-2 justify-end">
                    <ModeToggle />
                    <UserIcon />
                </div>
            </div>
        </header>
    )
}
