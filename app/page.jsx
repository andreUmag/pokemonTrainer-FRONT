import { redirect } from "next/navigation";
import Link from "next/link";

export default function Homepage() {
  redirect("/home");

  return (
    <div>
      <h2>WELCOME TO POKEMON TRAINER</h2>
      <p>Gestiona tus equipos y mira tus batallas pokemon</p>
      <Link href="/home">GO TO HOME</Link>
    </div>
  );
}
