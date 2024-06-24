import Image from "next/image";
import Parent from "./components/parent/Parent";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Parent/>
    </main>
  );
}
