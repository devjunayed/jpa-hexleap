import { Sports, Spotlight } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-2 md:mx-10">
      <Sports />
      <Spotlight />
    </main>
  );
}
