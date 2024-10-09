import Image from "next/image";
import Logo from "../../public/Logo.svg";
import Link from "next/link";
import { InfiniteMovingCards } from "../components/infinite-cards";


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
                href="https://youtu.be/fSUmnQs3dd4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='bx bx-play-circle' style={{ fontSize: '20px' }}></i>
                App Demo
              </Link>
              <Link
                className="flex items-center gap-2 hover:text-arcade-400"
                href="https://x.com/arcadedotapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='bx bxl-twitter' style={{ fontSize: '20px' }}></i>
                Twitter
              </Link>
              <Link
                className="flex items-center gap-2 hover:text-arcade-400"
                href="https://arena.colosseum.org/projects/hackathon/arcade-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='bx bx-code-alt' style={{ fontSize: '20px' }} ></i>
                Colosseum
              </Link>
            </div>


          </div>
        </div>
      </header>
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <div>
          <div className="flex items-center justify-center">
            <div className=" gap-x-12 ring-1 ring-inset rounded-full ring-green-500">
              <Link
                className="flex items-center place-items-start gap-2 px-5 text-green-500 font-medium py-1"
                href="https://explorer.sonic.game/address/4HWfzbQBmN95pktv6qgzpGbk9MHQW4DubRQQtWCFXMms?cluster=testnet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Live on Sonic Testnet
              </Link>
            </div>
          </div>
          <h2 className=" font-black bg-clip-text text-transparent text-center bg-gradient-to-b  dark:from-white dark:to-arcade-400 text-4xl md:text-7xl lg:text-8xl py-3 md:py-5 relative z-20  tracking-tight">
            CREATE.PLAY.WIN
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-2xl text-neutral-700 dark:text-neutral-400 text-center px-2">
            Gaming Superapp with the power to create custom games and host on-chain tournaments in under a minute!
          </p>
          <div className="flex gap-4 justify-center items-center flex-row py-6 px-5 ">
            <Link
              className="w-1/2 sm:w-1/4 font-bold rounded-md border border-solid border-transparent transition-colors flex items-center justify-center bg-arcade-400 text-background gap-2 hover:bg-arcade-500 text-md  h-12"
              href="/app"

            >
              Enter App
            </Link>
            <Link
              className=" w-1/2 sm:w-1/4 font-bold rounded-md border border-solid border-white transition-colors flex items-center justify-center bg-transparent text-white gap-2  hover:bg-white hover:text-background text-md h-12"
              href="https://drive.google.com/file/d/1_T-guUxr3EDLTRXfXTz5B0MDX9z-1PN4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className='bx bxl-android' style={{ fontSize: '20px' }}></i>
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
    name: 'game1',
    image: '/Game1.png'
  },
  {
    name: 'game2',
    image: '/Game2.png'
  },
  {
    name: 'game3',
    image: '/Game3.png'
  },
  {
    name: 'game4',
    image: '/Game1.png'
  },
  {
    name: 'game5',
    image: '/Game2.png'
  },
  {
    name: 'game6',
    image: '/Game3.png'
  },

];




