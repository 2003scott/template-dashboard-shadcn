"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { signIn, signOut,  useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"

export const Navbar = () => {

    const { data: session } = useSession()
    const router = useRouter()
    console.log(session)

    return (
        <div className="bg-white shadow-md">
            <nav className="py-2 flex items-center justify-between container">
                <Image src="/images/logo.svg" alt="logo" width={80} height={80} />
                <div className="space-x-1">
                    <Link href={"/dashboard"}>
                        <Button>
                            Panel
                        </Button>
                    </Link>
                    {session?.user ? (
                        <>
                            <Button onClick={() => signIn()}>
                                Iniciar sesión
                            </Button>
                            <p>{session.user.email}</p>
                            <p>{session.user.name}</p>
                            <img src={session?.user?.image || ""} alt="" width={50} height={50}/>
                            <Button onClick={async () => {await signOut() ;router.push("/")}}>
                                Cerrar sesión
                            </Button>
                        </>
                    ) : (
                        <Button onClick={() => signIn()}>
                            Login
                        </Button>
                    )}
                </div>
            </nav>
        </div>
    )
}
