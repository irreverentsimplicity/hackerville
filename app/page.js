'use client'

import Image from 'next/image'
import Link from 'next/link'
import Counter from './components/Counter'
import Header from './components/Header'
import Footer from './components/Footer'
import { useSelector, useDispatch } from "react-redux";

const Home = () => {

  const rpcEndpoint = useSelector(state => state.hackerville.rpcEndpoint);
  const userGnotBalances = useSelector(state => state.hackerville.userGnotBalances);

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
    <Header userGnotBalances={userGnotBalances}/>  
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-lg lg:flex">
        <p className="fixed mb-4 left-0 top-0 right-0 flex w-full justify-center 
        border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-4 
        backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
        lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Happening in:
        </p>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-lg lg:flex">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-lg lg:flex">
        <p className="fixed mb-4 left-0 top-0 right-0 flex w-full justify-center 
        border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-4 
        backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
        lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <Counter font={"Monospace"}/>
        </p>
        </div>
      </div>

      

      <div className="flex-col z-10 w-full max-w-5xl items-center justify-center font-mono text-lg lg:flex">
        <p className="fixed mt-4 text-sm left-0 top-0 right-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30">
        <Link href="/airdrop">
            Read the full thing.
            </Link>
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute ">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/assets/hacker_pixelated_64.jpeg"
          alt="Hackerville"
          width={240}
          height={240}
          priority
        />
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/assets/venice_hacker_green_pixelated.png"
          alt="Hackerville"
          width={240}
          height={240}
          priority
        />
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/assets/hacker_green_pixelated_64.jpeg"
          alt="Hackerville"
          width={240}
          height={240}
          priority
        />
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/assets/venice_hacker_purple_pixelated.png"
          alt="Hackerville"
          width={240}
          height={240}
          priority
        />
      </div>
      <Footer />
    </main>
  )
}

export default Home;
