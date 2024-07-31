"use client"
import { Navbar } from "@/components/core/navbar";
import { Sidebar } from "@/components/core/sidebar";
import { cn } from "@/lib/utils";
import { useSidebarToggle } from "@/store/sidebar-store";
import { useStore } from "@/store/use-store";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

    const sidebar = useStore(useSidebarToggle, (state) => state);

    if (!sidebar) return null;

    return (
        <>
            <Sidebar />
            <main
                className={cn(
                    "min-h-[calc(100vh)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
                    sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
                )}
            >
                <div>
                    <Navbar title={"Dasboard"} />
                    <div className="container pt-8 pb-8 px-4 sm:px-8">
                        {children}
                    </div>
                </div>
            </main>
            {/* <footer
                className={cn(
                    "transition-[margin-left] ease-in-out duration-300",
                    sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
                )}
            >
            </footer> */}
        </>
    );
}
