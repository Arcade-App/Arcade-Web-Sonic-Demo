import Image from "next/image";
import Logo from "../../public/Logo.svg";
import Link from "next/link";
import { InfiniteMovingCards } from "./infinite-cards";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-satoshi)] flex flex-col w-full items-center justify-items-center justify-between h-screen gap-16 sm:p-10 overflow-hidden">
      <header className="flex flex-col w-full pt-6 sm:pt-0">
        <div className="flex w-full justify-center">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row w-full max-w-6xl items-center justify-between">
            <div className="flex lg:flex-1 items-center space-x-3">
              <Link href="/">
                <Image
                  aria-hidden
                  src={Logo}
                  alt="Arcade Logo"
                  width={200}
                  height={200}
                />
              </Link>
            </div>
            <div className="flex gap-x-12">
              <Link
                className="flex items-center gap-2 hover:text-arcade-400"
                href="https://github.com/Arcade-App"
                target="_blank"
                rel="noopener noreferrer"
              >

                <i className="bx bxl-github" style={{ fontSize: '20px' }} ></i>
                Github
              </Link>
              <Link
                className="flex items-center gap-2 hover:text-arcade-400"
                href="https://x.com/harshbadhai28"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class='bx bxl-twitter' style={{ fontSize: '20px' }}></i>
                Twitter
              </Link>
              <Link
                className="flex items-center gap-2 hover:text-arcade-400"
                href="https://dorahacks.io/buidl/16671"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class='bx bx-code-alt' style={{ fontSize: '20px' }} ></i>
                Dorahacks
              </Link>
            </div>

            {   /*   <div className="flex gap-x-12 ring-1 ring-inset rounded-full ring-green-500 ">
              <Link
                className=" flex items-center place-items-start gap-2 px-5 text-green-500 font-medium py-1"
                href="https://explorer.aptoslabs.com/?network=devnet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Live on Aptos Devnet
              </Link>

            </div>   */}
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <div>
          <div className="flex items-center justify-center">
            <div className=" gap-x-12 ring-1 ring-inset rounded-full ring-green-500">
              <Link
                className="flex items-center place-items-start gap-2 px-5 text-green-500 font-medium py-1"
                href="https://explorer.aptoslabs.com/?network=devnet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Live on Aptos Devnet
              </Link>
            </div>
          </div>
          <h2 className=" font-black bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-7xl lg:text-8xl py-3 md:py-5 relative z-20  tracking-tight">
            CREATE.PLAY.WIN
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-2xl text-neutral-700 dark:text-neutral-400 text-center px-2">
            Gaming Superapp with the power to create custom games and host on-chain tournaments in under a minute!
          </p>
          <div className="flex gap-4 justify-center items-center flex-row py-6 px-5 ">
            <Link
              className="w-1/2 sm:w-1/4 font-bold rounded-md border border-solid border-transparent transition-colors flex items-center justify-center bg-arcade-400 text-background gap-2 hover:bg-arcade-500 text-md  h-12"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enter App
            </Link>
            <Link
              className=" w-1/2 sm:w-1/4 font-bold rounded-md border border-solid border-white transition-colors flex items-center justify-center bg-transparent text-white gap-2  hover:bg-white hover:text-background text-md h-12"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class='bx bxl-android' style={{ fontSize: '20px' }}></i>
              Download APK
            </Link>
          </div>
        </div>

      </main>
      <footer className="flex flex-col w-full sm:pb-0 px-2 sm:px-0">
        <div className="rounded-md flex flex-col antialiased items-center justify-center">
          <InfiniteMovingCards
            items={games}
            direction="right"
            speed="fast"
          />
        </div>
      </footer>
    </div>
  );
}


const games = [
  {
    image: '/Game1.png'
  },
  {
    image: '/Game2.png'
  },
  {
    image: '/Game3.png'
  },

];


