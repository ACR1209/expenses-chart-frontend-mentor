import Image from "next/image";
import { DM_Sans } from "next/font/google";
import Balance from "@/components/Balance";
import Spending from "@/components/Spending";
import Head from "next/head";
const dmSans = DM_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Expenses Chart Component - Frontend Mentor - Andrés Coronel</title>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        className={`${dmSans.className} h-screen bg-cream flex items-center justify-center`}
      >
        <div className="w-[340px] md:w-[540px]">
          <Balance bal={921.48} />
          <Spending />
        </div>
      </main>
    </>
  );
}
