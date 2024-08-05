'use client';


import { saveToLocalStorage } from './localstorage';
import {
  defaultFaucetTokenKey,
  defaultMnemonicKey,
} from '../types/types';
import { defaultTxFee, GnoJSONRPCProvider, GnoWallet, GnoWSProvider } from '@gnolang/gno-js-client';
import {
  BroadcastTxCommitResult,
  TM2Error,
  TransactionEndpoint
} from '@gnolang/tm2-js-client';
import { generateMnemonic } from './crypto';
import Long from 'long';
import Config from './config';

import {
  ErrorTransform
} from './errors';
import { UserFundedError } from '../types/errors';

// ENV values //
const defaultGasWanted: Long = new Long(800_000_0);
const customTXFee = '100000ugnot'

const cleanUpRealmReturn = (ret: string, callType: string) => {
  // maketx adds and extra quote at the end of the string
  // so we need to have 2 slice values, one from 9 chars, for eval transaction
  // and one from 11 chars, for maketx
  console.log("ret in cleanupRealmReturn", ret)
  if (ret.trim() == "(undefined)"){
    return ""
  }
  if (callType == "maketx"){
    return ret.slice(2, -9).replace(/\\"/g, '"');
  }
  else if (callType == "eval"){
    return ret.slice(2, -9).replace(/\\"/g, '"');
  }
};

const decodeRealmResponse = (resp: string, callType: string) => {
  console.log("resp in decodeResponse ", resp)
  return cleanUpRealmReturn(atob(resp), callType);
};
const parsedJSONOrRaw = (data: string, nob64 = false, callType: string) => {
  const decoded = nob64 ? cleanUpRealmReturn(data, callType) : decodeRealmResponse(data, callType);
  try {
    return JSON.parse(decoded);
  } finally {
    return decoded;
  }
};

/**
 * Actions is a singleton logic bundler
 * that is shared throughout the game.
 *
 * Always use as Actions.getInstance()
 */
class Actions {
  private static instance: Actions;

  private static initPromise: Actions | PromiseLike<Actions>;
  private wallet: GnoWallet | null = null;
  private provider: GnoWSProvider | null = null;
  private providerJSON: GnoJSONRPCProvider | null = null;
  private faucetToken: string | null = null;
  private rpcURL: string = Config.GNO_JSONRPC_URL;  
  private flippandoRealm: string = Config.GNO_FLIPPANDO_REALM;
  private faucetURL: string = Config.FAUCET_URL;
  private chainId: string = "dev"
  private signingKey: string = "test"
  
  private constructor() {}

  public setRpcUrl(newRpcUrl: string): void {
    this.rpcURL = newRpcUrl;
    this.reinitializeProvider();
  }

  public setFaucetUrl(newFaucetUrl: string): void {
    this.faucetURL = newFaucetUrl;
  }

  public setFlippandoRealm(newFlippandoRealm: string): void {
    this.flippandoRealm = newFlippandoRealm;
  }

  public setChainId(newChainId: string): void {
    this.chainId = newChainId;
  }

  public setSigningKey(newSigningKey: string): void {
    this.signingKey = newSigningKey;
  }

  private async reinitializeProvider(): Promise<void> {
    try {
        // Reinitialize the JSON RPC provider with the new URL
        this.providerJSON = new GnoJSONRPCProvider(this.rpcURL);
        if (this.wallet) {
            this.wallet.connect(this.providerJSON);
        }
        console.log("Provider reinitialized with new URL:", this.rpcURL);
    } catch (e) {
        console.error("Failed to reinitialize provider:", e);
    }
  }


  /**
   * Fetches the Actions instance. If no instance is
   * initialized, it initializes it
   */
  public static async getInstance(): Promise<Actions> {
    if (!Actions.instance) {
      Actions.instance = new Actions();
      Actions.initPromise = new Promise(async (resolve) => {
        await Actions.instance.initialize();
        resolve(Actions.instance);
      });
      return Actions.initPromise;
    } else {
      return Actions.initPromise;
    }
  }

  /**
   * Prepares the Actions instance
   * @private
   */
  private async initialize() {
    // Wallet initialization //

    // Try to load the mnemonic from local storage
    let mnemonic: string | null = localStorage.getItem(defaultMnemonicKey);
    if (!mnemonic || mnemonic === '') {
      // Generate a fresh mnemonic
      mnemonic = generateMnemonic();

      // Save the mnemonic to local storage
      saveToLocalStorage(defaultMnemonicKey, mnemonic);
    }
    try {
      // Initialize the wallet using the saved mnemonic
      // test, to modify in prod
      mnemonic = "leopard lend cost jaguar devote kick slow glass virus estate cigar ginger furnace coyote donor occur verb glue powder trade pet around erosion abandon"
      this.wallet = await GnoWallet.fromMnemonic(mnemonic);
      //console.log('saved mnemonic ', JSON.stringify(mnemonic))
      console.log(this.wallet);
      // Initialize the provider
      //this.provider = new GnoWSProvider(wsURL);
      this.providerJSON = new GnoJSONRPCProvider(this.rpcURL)
      console.log(this.providerJSON);
      // Connect the wallet to the provider
      this.wallet.connect(this.providerJSON);
    } catch (e) {
      //Should not happen
      console.error('Could not create wallet from mnemonic');
    }

    
    // Faucet token initialization //
    let faucetToken: string | null = localStorage.getItem(
      defaultFaucetTokenKey
    );
    if (faucetToken && faucetToken !== '') {
      // Faucet token initialized
      this.faucetToken = faucetToken;
      try {
        // Attempt to fund the account
        await this.fundAccount(this.faucetToken);
      } catch (e) {
        if (e instanceof UserFundedError) {
          console.log('User already funded.');
        } else {
          console.log('Could not fund user.');
        }
      }
    }
  }

  /**
   * Destroys the Actions instance, and closes any running services
   */
  public destroy() {
    if (!this.provider) {
      // Nothing to close
      return;
    }

    // Close out the WS connection
    //this.provider.closeConnection();
  }

  /**
   * Saves the faucet token to local storage
   * @param token the faucet token
   */
  public async setFaucetToken(token: string) {
    // Attempt to fund the account

    await this.fundAccount(token);
    this.faucetToken = token;
    localStorage.setItem(defaultFaucetTokenKey, token);
  }

  /**
   * Fetches the saved faucet token, if any
   */
  public getFaucetToken(): string | null {
    return this.faucetToken || localStorage.getItem(defaultFaucetTokenKey);
  }

  private gkLog(): Boolean {
    //const wnd = window as { gnokeyLog?: Boolean };
    //return typeof wnd.gnokeyLog !== 'undefined' && wnd.gnokeyLog;
    return true;
  }

  /**
   * Return user Addres
   */
  public getWalletAddress() {
    return this.wallet?.getAddress();
  }

  public hasWallet() {
    return !!this.wallet;
  }

  /**
   * Return user Balance
   */
  public async getBalance() {
    return await this.wallet?.getBalance('ugnot');
  }

  /**
   * Pings the faucet to fund the account before playing
   * @private
   */
  private async fundAccount(token: string): Promise<string> {
    console.log("Token:", token);
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Uncomment or add other headers as needed
            //'faucet-token': token, // Assuming 'token' should be sent in the request headers
        },
        body: JSON.stringify({
            to: await this.wallet?.getAddress()
        })
    };

    // Ensure faucetURL is defined and correct
    if (!this.faucetURL) {
        console.error("Faucet URL is undefined.");
        return;
    }

    try {
        const response = await fetch(this.faucetURL, requestOptions);
        const data = await response.json(); // Assuming the server responds with JSON
        console.log("Faucet URL:", this.faucetURL);
        console.log("Fund Response:", JSON.stringify(data, null, 2));
        
        if (!response.ok) {
            // Log more detailed error information
            console.error("Fund error:", data.error || "Unknown error");
        }
        //if(!data.error){
          return data;
        //}
    } catch (error) {
        // Catch network errors, parsing errors, etc.
        console.error("Error during fetch:", error);
    }
}

  /**
   * Performs a transaction, handling common error cases and transforming them
   * into known error types.
   */
  public async callMethod(
    method: string,
    args?: string[] | null,
    gasWanted: Long = defaultGasWanted,
    chainId?: string | null,
    signingKey?: string | null,
  ): Promise<BroadcastTxCommitResult> {
    if (args === null) {
      args = [];
  }
  if (gasWanted === null) {
      gasWanted = defaultGasWanted;
  }
    if (chainId === null || chainId === undefined) {
      chainId = "dev"
    }
    if (signingKey === null || signingKey === undefined) {
      signingKey = "flippandoairdrop"
    }
    const gkLog = this.gkLog();
    try {
      if (gkLog) {
        const gkArgs = args?.map((arg) => '-args ' + arg).join(' ') ?? '';
        console.log(
          `$ gnokey maketx call -broadcast ` +
            `-pkgpath ${this.flippandoRealm} -gas-wanted ${gasWanted} -gas-fee ${defaultTxFee} ` +
            `-func ${method} ${gkArgs} -chainid ${chainId} ${signingKey}`
        );
      }
            
      const resp = (await this.wallet?.callMethod(
        this.flippandoRealm,
        method,
        args,
        TransactionEndpoint.BROADCAST_TX_COMMIT,
        undefined,
        {
          gasFee: defaultTxFee,
          gasWanted: gasWanted
        }
      )) as BroadcastTxCommitResult;
      if (gkLog) {
        //console.info('response in call:', JSON.stringify(resp));
        const respData = resp.deliver_tx.ResponseBase.Data;
        if (respData !== null) {
          console.info('response (parsed):', parsedJSONOrRaw(respData, false, "maketx"));
          return parsedJSONOrRaw(respData, false, "maketx");
        }
      }
      return resp;
    } 
    catch (err) {
      if(err !== undefined){
        if (gkLog) {
          console.log('err:', err);
        }
        let error: TM2Error;
      const ex = err as { log?: string; message?: string } | undefined;
      if (
        typeof ex?.log !== 'undefined' &&
        typeof ex?.message !== 'undefined' &&
        ex.message.includes('abci.StringError')
      ) {
        error = ErrorTransform(err as TM2Error);
      }
      if (gkLog) {
        console.log('error in maketx:', error);
      }
      throw error;
    }
    }
  }

  public async evaluateExpression(expr: string): Promise<string> {
    const gkLog = this.gkLog();
    if (gkLog) {
      const quotesEscaped = expr.replace(/'/g, `'\\''`);
      console.info(
        `$ gnokey query vm/qeval --data '${this.flippandoRealm}.${quotesEscaped}'`
      );
    }

    const resp = (await this.providerJSON?.evaluateExpression(
      this.flippandoRealm,
      expr
    )) as string;

    if (gkLog) {
      console.info('evaluateExpression response:', parsedJSONOrRaw(resp, true, "eval"));
    }

    // Parse the response
    return parsedJSONOrRaw(resp, true, "eval");
  }

  /**
   * Fetches the current user's wallet address
   */
  public async getUserAddress(): Promise<string> {
    return (await this.wallet?.getAddress()) as string;
  }

  

  /****************
   * Hackerville engine
   ****************/
  /**
   * Mint an airdropped NFT
   *
   * @param contextId string - context id
   * @param contextName string - context name
   */
  
  async MintAirdroppedNFT(
    playerRecipient: string,
    airdropName: string, 
    airdropParentID: string,
    airdropXPos: string,
    airdropYPos: string,
    gameType: string, 
    gameLevel: string,
    svgData: string,
  ): Promise<any> {
    const response = await this.callMethod('AirdropBasicFlipNFT', [
      playerRecipient,
      airdropName,
      airdropParentID,
      airdropXPos,
      airdropYPos,
      gameType, 
      gameLevel,
      svgData,
    ]);
    console.log("actions AirdropBasicFlipNFT response ", JSON.stringify(response))
    return response;
  }

  /**
   * Get all minted airdrop NFTs
   */
  

  async GetAllMintedAirdropNFTs(): Promise<any> {
    const response = await this.evaluateExpression("GetAllMintedAirdropNFTs()")
    console.log("actions GetAllMintedAirdropNFTs response ", JSON.stringify(response))
    return response;
  }

  /**
   * Call the GetUserNFTs function and return an array of basic NFTs
   * @param playerAddr string
   */
  async getUserNFTs(
    playerAddr: string,
    readyToUse: string,
  ): Promise<any> {
    const response = await this.evaluateExpression("GetUserBasicFlipNFTs(\"" + playerAddr + "\", \"" + readyToUse +"\")")
    console.log("actions GetUserBasicNFTs response ", JSON.stringify(response))
    return response;
  }

  /**
   * Call the GetBasicListings function and return a JSON object
   */
  async getBasicListings(): Promise<any> {
    const response = await this.evaluateExpression("GetBasicListings()")
    console.log("actions GetBasicListings response ", JSON.stringify(response))
    return response;
  }
  


}

export default Actions;