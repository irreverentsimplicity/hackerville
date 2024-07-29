'use client'

import Image from 'next/image'
import Link from 'next/link'
import Counter from './components/Counter'
import Header from './components/Header'
import Footer from './components/Footer'
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {setUserBalances, setUserGnotBalances} from './slices/hackervilleSlice';
import { getGNOTBalances } from "./util/tokenActions";
import Actions from "./util/actions";
import './styles/globals.css'
import styles from './styles/Home.module.css'
import testNFT from './util/testNFT';

const Home = () => {

  const rpcEndpoint = useSelector(state => state.hackerville.rpcEndpoint);
  const userGnotBalances = useSelector(state => state.hackerville.userGnotBalances);
  const [isLoadingMinted, setIsLoadingMinted] = useState(true)
  const dispatch = useDispatch();

  useEffect( () => {
    console.log("rpcEndpoint in useEffect, flip.js ", rpcEndpoint)
    getGNOTBalances(dispatch, (result) => {
      if (result.success) {
          alert(result.message);
      } else {
          alert(`Error: ${result.message}`);
      }
    });

  }, [rpcEndpoint, dispatch])

  useEffect( () => {
    getMintedNFTs()
  }, [])

  const getMintedNFTs = async () => {
    const actions = await Actions.getInstance();
    if (isLoadingMinted) {
      try {
        actions.GetAllMintedAirdropNFTs().then((response) => {
          //console.log("getUserGamesByStatus response in Flip", response);
          if (response !== undefined){
            let parsedResponse = JSON.parse(response);
            if (parsedResponse.length != 0) {
              console.log(JSON.stringify(parsedResponse))
            }
            setIsLoadingMinted(false);
          }
          setIsLoadingMinted(false);
          
          //console.log("parseResponse", JSON.stringify(parsedResponse, null, 2))
        });
      } catch (err) {
        console.log("error in calling GetAllMintedAirdropNFTs", err);
      }
      
    }
  }

  // hardcoded, to remove / refactor
  const mintAirdropNFT = async () => {
    const playerRecipient = "g1jvsnur7haahze6n6z3gzfdzu5yelr9rj3dajs7" // Brave account
    const airdropName = "hackerville"
    const firstObject = testNFT[1]
    const airdropParentID = firstObject.airdropParentID;
    const airdropXPos = firstObject.airdropXPos;
    const airdropYPos = firstObject.airdropYPos;
    const gameType = firstObject.gameType;
    const gameLevel = firstObject.gameLevel;
    const svgData = firstObject.svgData;

    const actions = await Actions.getInstance();

    try {
      actions.MintAirdroppedNFT(
        playerRecipient, airdropName, airdropParentID, airdropXPos, airdropYPos, gameType, gameLevel, svgData
      ).then((response) => {
        console.log("MintAirdroppedNFT response in page.js", response);
        if (response !== undefined){
          let parsedResponse = JSON.parse(response);
          if (parsedResponse.length != 0) {
            console.log(JSON.stringify(parsedResponse))
          }
          
        }
        //console.log("parseResponse", JSON.stringify(parsedResponse, null, 2))
      });
    } catch (err) {
      console.log("error in calling MintAirdroppedNFT", err);
    }
  }

  return (
    
    <div className={styles.container}>
    <Header userGnotBalances={userGnotBalances}/>  
    <div style={{height: '60vh'}}>
      <Button onClick = {()=> mintAirdropNFT()}>
        Mint
      </Button>


      <div className="z-10 items-center justify-center font-mono text-sm lg:flex pb-2">
          Ending in:
      </div>
      <div className="z-10 w-full items-center justify-center font-mono text-lg lg:flex">
      <div className="z-10 w-full items-center justify-center font-mono text-lg lg:flex">
        <p className="fixed mb-4 left-0 top-0 right-0 flex w-full justify-center 
        border-b border-gray-400 bg-green-800 pb-6 pt-4 
        backdrop-blur-2xl dark:border-neutral-800 dark:bg-green-900 dark:from-inherit 
        lg:static lg:w-auto  lg:rounded-md lg:border lg:bg-green-900 lg:p-4 lg:dark:bg-blue-800">
        <Counter font={"Monospace"}/>
        </p> 
        </div>
      </div>

      

      <div className="flex-col z-10 w-full items-center justify-center font-mono text-md lg:flex">
        <Link href="/airdrop">
            Read the full thing.
        </Link>
      </div>
      </div>
      <Footer />
      </div>
  )
}

export default Home;
