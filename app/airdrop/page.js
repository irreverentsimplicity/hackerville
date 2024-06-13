import Link from "next/link"
//import Counter from '../components/Counter'

export default function Airdrop() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-lg lg:flex">
        <p className="fixed mb-4 left-0 top-0 right-0 flex w-full justify-center 
        border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-4 
        backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
        lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Airdrop
        </p>
      </div>
      <br/><br/>
      <div className="flex-col z-10 w-full max-w-5xl items-center justify-center font-mono text-lg lg:flex">
           
            <h2><b>Disclaimer</b></h2>
        
            This is an ephemereal airdrop, on a testnet. There is no value expected from, or attached to the airdropped NFTs. The main goal of this experiment
            is to stress-test the Flippando app and the chain. The state may be wiped at any time, so the NFTs may disappear from 
            your wallet.
        
            You&apos;ve been warned.
          <br/><br/>
        
            <h2><b>When?</b></h2>
           The airdrop will start on June 19th, 2024. The claim window will be open for 1 week.
           <br/><br/>
           <h2><b>How?</b></h2>
           General conditions:
            <ul>
              <li> Any Gno wallet can participate</li>
              <li> There are 10,000 basic NFTs airdropped</li>
              <li> There is a max cap of 20 basic NFTs per wallet.</li>
              <li> The total number of &quot;hackers&quot; PFPs in the Hackerville collection is 156.</li>
              <li> 156 &quot;hackers&quot;, each made of 64 basic NFTS = 9984  basic NFTs. The remaining 16 basic NFTs are not part of a PFP, but will feature some very rare features.</li>
            </ul>
            <br/><br/>
        
            <h2><b>Why?</b></h2>
            The goal is to combine the airdropped basic NFTs into composite hackerville NFTs.
            <br/>
            A composite hackerville NFT is made of 64 basic NFTs. Since there is a max cap of 20 basic NFTs per wallet,
            that means you should interact with other players, try and find the necessary basic NFTs needed to complete the big image.
            <br/>
            A new mode (creatively called &quot;Airdrop mode&quot;) has been added to the Playground section of Flippando.
            <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '450px'
        }}>
          <img src="/assets/airdrop_mode_1.png" alt="airdrop" style={{
            width: '800px',
            height: '350px'
          }}/>
        </div>
        When switched on, this mode let you browse the Hackerville PFP images.

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '450px'
        }}>
          <img src="/assets/airdrop_mode_2.png" alt="airdrop" style={{
            width: '800px',
            height: '350px'
          }}/>
        </div>
        Once you find the image you want to assemble from your airdropped basic NFTs, click on it, and it will show up
        under the canvas, to help you in the assembly process.

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '450px'
        }}>
          <img src="/assets/airdrop_mode_3.png" alt="airdrop" style={{
            width: '800px',
            height: '350px'
          }}/>
        </div>
          
        
          <h2><b>Tokenomics?</b></h2>
           In a normal Flippando game, each basic NFT has 1 fungible FLIP token locked inside. Once someone else uses that
           basic NFT in a composite NFT, the fungible token is released and sent to the initial creator.
           In the airdrop, the fungible FLIP token, once released, will be sent to a special airdrop account. This account
           will then add the tokens to a liquidity pool in GnoSwap, helping bootstrap the fungible token ecosystem.
           Since the basic NFT airdropped will be made of 8x8 squares, the number of FLIP tokens inside each is 4. So each
           PFP assembled will release 4 FLIP x 64 basic NFTs = 256 FLIP tokens. The total number of fungible FLIP tokens 
           generated in this airdrop will be 156 hackers * 256 FLIP tokens = 39936.
            <br/><br/>
           <h2><b>When again?</b></h2>
           The airdrop will start on June 19th, 2024. The claim window will be open for 1 week. We already told you that.
        
    
      </div>
      <br/><br/>
      <p className="fixed mb-4 left-0 top-0 right-0 flex w-full justify-center 
        border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-4 
        backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
        lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Link href="/">
          Back
          </Link>
        </p>
    </main>
  )
}
