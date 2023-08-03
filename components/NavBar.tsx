import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function NavBar() {

    return (
        <nav className="flex light-bg justify-space" style={{alignItems:'center'}}>
            <div className="" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Link href="/">
                    <a>
                        <Image src="/images/b-logo-nobg.png" style={{borderRadius:'50%'}} width={140} height={140} alt="logo of a B picture"  />
                    </a>
                </Link>
            </div>

            <ul className="flex white">
                <li className="green">
                    <Link href="/">{"< Home />"}</Link>
                </li>
                <li>
                    <Link href="/#projects">About</Link>
                </li>
            </ul>
        </nav>
    )
}
