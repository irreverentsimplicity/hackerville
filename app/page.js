'use client'

import Link from 'next/link'
import Counter from './components/Counter'
import Header from './components/Header'
import Footer from './components/Footer'
import AirdropForm from './components/AirdropForm'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {setUserBalances, setUserGnotBalances} from './slices/hackervilleSlice';
import { getGNOTBalances } from "./util/tokenActions";
import Actions from "./util/actions";
import './styles/globals.css'
import styles from './styles/Home.module.css'
import testNFT from './util/testNFT';
import testNFTyellow from './util/testNFTyellow';

const Home = () => {

  const rpcEndpoint = useSelector(state => state.hackerville.rpcEndpoint);
  const userGnotBalances = useSelector(state => state.hackerville.userGnotBalances);
  const [isLoadingMinted, setIsLoadingMinted] = useState(true)
  const [allMintedNFTs, setAllMintedNFTs] = useState([]);
  const [userAirdropMintedNFTs, setUserAirdropMintedNFTs] = useState([]);
  // tokenIDs from 1 to 100000
  const airdropTokenIDs = Array.from({ length: 10000 }, (_, i) => (i + 1).toString());
  const maxTokenId = 20; // in prod is 20
  const [randomMint, setRandomMint] = useState(null);
  const [message, setMessage] = useState('');


  const [address, setAddress] = useState('');
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

  useEffect( () => {
    fetchUserNFTs(address)
  }, [address])

  const fetchRandomMint = async () => {
    const response = await fetch('/api/random-mint');
    const data = await response.json();
    console.log("fetchRandomMint response, ", JSON.stringify(data))
    if (data.message) {
        setMessage(data.message);
    } else {
        setRandomMint(data);
    }
};

  const getMintedNFTs = async () => {
    const actions = await Actions.getInstance();
    if (isLoadingMinted) {
      try {
        actions.GetAllMintedAirdropNFTs().then((response) => {
          //console.log("getUserGamesByStatus response in Flip", response);
          if (response !== undefined){
            let parsedResponse = JSON.parse(response);
            if (parsedResponse.length != 0) {
              const tokenIds = parsedResponse.tokenIDs.map(item => item.split(':')[0]);
              setAllMintedNFTs(tokenIds)
              console.log("allMintedNFTs ", JSON.stringify(tokenIds))
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
  const mintAirdropNFTTest = async () => {
    const playerRecipient = "g1jvsnur7haahze6n6z3gzfdzu5yelr9rj3dajs7" // Brave account
    const firstObject = testNFT[15]
    const airdropName = firstObject.airdropName;
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

  const getRandomTokenID = (array) => array[Math.floor(Math.random() * array.length)];

  const mintAirdropNFT = async () => {
    //const playerRecipient = "g1jvsnur7haahze6n6z3gzfdzu5yelr9rj3dajs7" // Brave account
    // g12q46p4k5cjh5fewazxzs8an4xrhx3w0dcel7sd // Chrome account
    const playerRecipient = address
    const firstObject = testNFTyellow[0]
    const airdropName = firstObject.airdropName;
    const airdropParentID = firstObject.airdropParentID;
    const airdropXPos = firstObject.airdropXPos;
    const airdropYPos = firstObject.airdropYPos;
    const gameType = firstObject.gameType;
    const gameLevel = firstObject.gameLevel;
    const svgData = firstObject.svgData;

    // airdrop selection logic
    // check for maxToken
    if (userAirdropMintedNFTs.length >= maxTokenId){
      alert("Total number of allowed NFTs reached for this address.")
      return
    }
    /*
    const remainingTokenIDs = airdropTokenIDs.filter(id => !allMintedNFTs.includes(id));

    const nextTokenID = getRandomTokenID(remainingTokenIDs)
    console.log("nextTokenID, ", nextTokenID)
    */

    await fetchRandomMint()
    console.log("randomMint, ", randomMint)

    const actions = await Actions.getInstance();
    console.log("address before fetchUserNFTs, ", address)
    await fetchUserNFTs(address)
    console.log("firstObject ", JSON.stringify(firstObject))
    
    /*
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
    }*/
  }

  const fetchUserNFTs = async (address) => {
    let userNFTs = [];
    console.log("fetchUserNFTs");
    const actions = await Actions.getInstance();
    console.log("actions, ", actions)
    try {
      actions.getUserNFTs(address, "yes").then((response) => {
        console.log("getUserNFTS response in Page", response);
          if (response !== undefined){
          let parsedUsedResponse = JSON.parse(response);
          
          if(parsedUsedResponse.userNFTs !== undefined){
            if(parsedUsedResponse.userNFTs.length !== 0){  
              //setNfts(parsedResponse.userNFTs)
              console.log("parseResponse", JSON.stringify(response, null, 2))
              //dispatch(setUserBasicNFTs(parsedResponse.userNFTs))
              let allBasicNFTs = parsedUsedResponse.userNFTs;
              let userListings = [];
              // get listings and filter
              try {
                console.log("getBasicListings")
                actions.getBasicListings().then((response) => {
                // console.log("getListings response in art.js", response);
                  let parsedResponse = JSON.parse(response);
                  console.log("getBasicListings parseResponse in page.js", parsedResponse)
                  if(parsedResponse.error === undefined){
                    userListings = parsedResponse.marketplaceListings;
                    
                    if (userListings.length != 0) {
                      const filteredBasicNFTs = allBasicNFTs.filter(nft =>
                        nft.gameType === "airdrop" &&
                        !userListings.some(listing => listing.tokenID === nft.tokenID)
                      );
                      console.log("filteredBasicNFTs: ", JSON.stringify(filteredBasicNFTs));
                      setUserAirdropMintedNFTs(filteredBasicNFTs)
                    } else {
                      const filteredBasicNFTs = allBasicNFTs.filter(nft => nft.gameType === "airdrop");
                      setUserAirdropMintedNFTs(filteredBasicNFTs)
                      console.log("filteredBasicNFTs: ", JSON.stringify(filteredBasicNFTs));
                    }
                  }
                });
              } catch (error) {
                console.error('Error retrieving BasicNFTs:', error);
                return null
              }
            }
            else {
              // valid answer, zero length array
              setUserAirdropMintedNFTs(parsedUsedResponse.userNFTs)
            } 
          }
        }
      });
    } catch (err) {
      console.log("error in calling getUserNFTs", err);
    }
  };

  const getCanvasSize = (mintedAirdrops) => {
    if(mintedAirdrops <= 50){
      return "2x2";
    }
    else if(mintedAirdrops > 50 && mintedAirdrops <= 100){
      return "3x3";
    }
    else if(mintedAirdrops > 100 && mintedAirdrops <= 400){
      return "4x4";
    }
    else if(mintedAirdrops > 400 && mintedAirdrops <= 600){
      return "5x5";
    }
    else if(mintedAirdrops > 600 && mintedAirdrops <= 800){
      return "6x6";
    }
    else if(mintedAirdrops > 800 && mintedAirdrops <= 1000){
      return "7x7";
    }
    else if(mintedAirdrops > 1000){
      return "8x8";
    }
  }

  return (
    
    <div className={styles.container}>
    <Header userGnotBalances={userGnotBalances}/>  
    <div style={{height: '60vh', alignItems: "space-between"}}>
      <AirdropForm address={address} setAddress={setAddress} mintAirdropNFT={mintAirdropNFT} />
      <div>
        Airdropped NFTs: 10,000, total minted: {allMintedNFTs.length} (expected canvas size: {getCanvasSize(allMintedNFTs.length)})<br/>
        total minted for the address provided: {userAirdropMintedNFTs.length}<br/>
        
      </div>


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
