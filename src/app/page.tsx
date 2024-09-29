import Image from "next/image";
import JBLADU from "@/public/images/jbladu.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <Image src={JBLADU} />
    </div>
  );
}
