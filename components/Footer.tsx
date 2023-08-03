import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="light-bg flex justify-space" style={{alignItems:'center'}}>
            <span className="white">Copyright © {year} <Link href="/">Brainon Queiroz</Link> - All rights reserved.</span>
            <ul className="flex">
                <li>
                    <a href="https://www.linkedin.com/in/brainon-queiroz/" target="_blank" rel="noreferrer">
                        <Image src="/icons/linkedin.svg" width={36} height={36} alt="linkedin-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/QZBrainon" target="_blank" rel="noreferrer">
                        <Image src="/icons/github.svg" width={36} height={36} alt="github-icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}