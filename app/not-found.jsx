import Link from "next/link";
import GlitchText from "@/components/GlitchText";
import "./not-found.css";

export default function notFound() {
  return (
    <div className="justify-center items-center flex flex-col p-60">
      <GlitchText
        speed={1}
        enableShadows={true}
        enableOnHover={true}
        className="custom-class"
      >
        404
      </GlitchText>
      <p className="">Sorry, this page doesn't exist</p>
    
      <Link href="/login"><button className="gradient-button">Volver al Inicio</button></Link>
    </div>
  );
}
