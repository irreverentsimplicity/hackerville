import { createSlice } from '@reduxjs/toolkit';

const hackervilleSlice = createSlice({
  name: 'hackerville',
  initialState: {
    blockchainName: undefined,
    testnet: true,
    mainnet: false,
    rpcEndpoint: "http://localhost:26657",
    adr: {
      flippandoAddress: undefined,
    },
    artPayload: [],
    userBalances: {},
    userGnotBalances: undefined,
    userBasicNFTs: [],
    userArtNFTs: [],
    basicMarketplaceListings: [],
    artMarketplaceListings: [],
    networkSplit: [{near: 24}, 
      {evmos: 8}, 
      {mumbai: 12}, 
      {polygonZkevm: 12}, 
      {goerli: 5}, 
      {gnosis: 19}, 
      {arbitrum: 7}, 
      {optimism: 4},
      {kroma: 9},
    ],
  },
  reducers: {
    setBlockchain(state, action) {
      state.blockchainName = action.payload;
    },
    setArtPayload(state, action) {
      console.log("slice ", JSON.stringify(action.payload))
      state.artPayload = action.payload;
    },
    setUserBalances(state, action) {
      console.log("slice userBalances ", JSON.stringify(action.payload))
      state.userBalances = action.payload;
    },
    setUserGnotBalances(state, action) {
      console.log("slice userGnotBalances ", JSON.stringify(action.payload))
      state.userGnotBalances = action.payload;
    },
    setRpcEndpoint(state, action) {
      console.log("slice setRpcEndpoint ", JSON.stringify(action.payload))
      state.rpcEndpoint = action.payload;
    },
    setUserBasicNFTs(state, action) {
      console.log("slice userBasicNFTs ", JSON.stringify(action.payload))
      state.userBasicNFTs = action.payload;
    },
    setUserArtNFTs(state, action) {
      console.log("slice userArtNFTs ", JSON.stringify(action.payload))
      state.userArtNFTs = action.payload;
    },
    setBasicMarketplaceListings(state, action) {
      console.log("slice basic marketplace listings ", JSON.stringify(action.payload))
      state.basicMarketplaceListings = action.payload;
    },
    setArtMarketplaceListings(state, action) {
      console.log("slice art marketplace listings ", JSON.stringify(action.payload))
      state.artMarketplaceListings = action.payload;
    },
    setNetwork(state, action) {
      if (action.payload === 'testnet'){
        state.testnet = true;
        state.mainnet = false;
      }
      else if (action.payload === 'mainnet'){
        state.testnet = false;
        state.mainnet = true;
      }
    },
  },
});

export const { 
  setBlockchain, 
  setNetwork, 
  setArtPayload, 
  setUserBalances, 
  setUserGnotBalances, 
  setUserBasicNFTs, 
  setUserArtNFTs,
  setBasicMarketplaceListings,
  setArtMarketplaceListings,
  setRpcEndpoint } = hackervilleSlice.actions;

export default hackervilleSlice.reducer;

