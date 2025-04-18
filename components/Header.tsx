import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
  return (
    <header>
      <NavBar />
      <div className="header flex light-bg">
        <div>
          <button></button>
          <h1 className="white">Hi! I'm Brainon Queiroz</h1>
          <h2 className="white">Fullstack web developer</h2>
          <p className="gray" style={{ fontSize: "20px" }}>
            I create solutions for people and businesses around the world
            through technology, and I love what I do.
          </p>
          <div style={{ display: "flex", gap: "3rem" }}>
            <a className="green" href="mailto:qzbrainon.dev@gmail.com">
              Contact me
            </a>
            <a
              className="gray"
              href="/static/Desenvolvedor-Backend-Brainon-Queiroz.pdf"
              download={"Desenvolvedor Backend Brainon Queiroz"} 
            >
              Download CV
            </a>
          </div>
        </div>
        <Image
          src="/images/profile_picture.jpeg"
          style={{ borderRadius: "50%" }}
          width={400}
          height={400}
          alt="profile picture"
        />
      </div>
    </header>
  );
}
