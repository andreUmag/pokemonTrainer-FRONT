'use client';

import Link from "next/link";
import GlitchText from "@/components/GlitchText";
import "./not-found.css";

export default function notFound() {
  return (
    <div className="justify-center items-center mt-15 grid p-20">
      <GlitchText
        speed={1}
        enableShadows={true}
        enableOnHover={true}
        className="fourcerfour"
      >
        404
      </GlitchText>
        <div className="text-center">
      <h3 className="">Sorry, this page doesn't exist</h3>
      </div>    
      <Link href="/home"><button className="gradient-button">Volver al Inicio</button></Link>
    </div>
  );
}
