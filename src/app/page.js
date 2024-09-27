import Image from "next/image";
import Logo from "../../public/Logo.svg";
import Link from "next/link";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-satoshi)] flex flex-col w-full items-center justify-items-center justify-between h-screen gap-16 sm:p-10">
      <header className="flex flex-col w-full">
        <div className="flex w-full justify-center">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row w-full max-w-7xl items-center justify-between">
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
              <a
                className=" flex items-center place-items-start gap-2 hover:underline hover:underline-offset-4"
                href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Live on Aptos Devnet
              </a>

            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <div>
          <h2 className=" font-black bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-7xl lg:text-8xl py-3 md:py-5 relative z-20  tracking-tight">
            CREATE.PLAY.WIN
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-2xl text-neutral-700 dark:text-neutral-400 text-center ">
            Customizable On-Chain Meme Games and Tournaments for your community.
          </p>
          <div className="flex gap-4 justify-center items-center flex-col sm:flex-row py-6 ">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Enter App
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Download APK
            </a>
          </div>
        </div>

      </main>
      <footer className="flex flex-col w-full">
        <div className="flex w-full justify-center">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row w-full max-w-7xl items-center justify-between">
            <div className="flex lg:flex-1 items-center space-x-3">
              <a
                className=" flex items-center place-items-start gap-2 hover:underline hover:underline-offset-4"
                href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                © Built by Kshitij & Harsh for Code Collision Hack
              </a>
            </div>
            <div className="flex gap-x-12">
              <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="https://nextjs.org/icons/file.svg"
                  alt="Github Icon"
                  width={16}
                  height={16}
                />
                Github
              </Link>
              <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="https://nextjs.org/icons/window.svg"
                  alt="Twitter Icon"
                  width={16}
                  height={16}
                />
                Twitter
              </Link>
              <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="https://nextjs.org/icons/window.svg"
                  alt="Twitter Icon"
                  width={16}
                  height={16}
                />
                Dorahacks
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
