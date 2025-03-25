import Navbar from "@/components/Navbar";

export default function TeamsLayout({children}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}