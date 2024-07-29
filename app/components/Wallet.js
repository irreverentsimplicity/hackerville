'use client'

import React from "react";
import { FaWallet} from 'react-icons/fa';
import { Icon, Select } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { setRpcEndpoint } from "../slices/hackervilleSlice";
import Actions from "../util/actions";
import Config from '../util/config';


const Wallet = ({ userGnotBalances }) => {

    const dispatch = useDispatch();
    const rpcEndpoint = useSelector(state => state.hackerville.rpcEndpoint);
    
    const handleNetworkChange = async (event) => {
      const newNetwork = event.target.value;
      console.log("newNetwork, ", newNetwork)
      dispatch(setRpcEndpoint(newNetwork))
      const actionsInstance = await Actions.getInstance();
      let faucetUrl = "";
      let flippandoRealm = "";
      if (newNetwork === "http://localhost:26657"){
        faucetUrl = "http://127.0.0.1:5050";
        flippandoRealm = "gno.land/r/demo/flippando"
      } else if (newNetwork === "https://rpc.flippando.xyz") {
        faucetUrl = "https://faucet.flippando.xyz";
        flippandoRealm = "gno.land/r/demo/flippando"
      } else if (newNetwork === "https://portal-loop.gnoteam.com"){
        faucetUrl = "https://faucet.flippando.xyz";
        flippandoRealm = "gno.land/r/demo/flippando/v1"
      }
      actionsInstance.setFaucetUrl(faucetUrl);
      actionsInstance.setFlippandoRealm(flippandoRealm);
      actionsInstance.setRpcUrl(newNetwork);
    };

    const showLocalOption = process.env.NEXT_PUBLIC_SHOW_LOCAL_OPTION === 'true';
    //console.log('NEXT_PUBLIC_SHOW_LOCAL_OPTION:', process.env.NEXT_PUBLIC_SHOW_LOCAL_OPTION);
    //console.log("Config.GNO_JSONRPC_URL: ", Config.GNO_JSONRPC_URL);

    return (
      <div>
      {/*<AdenaWallet/>*/}
      <div className="grid grid-cols-5 pb-10 justify-end">
        <div className="col-span-5 flex justify-end pr-10">
          <div className="rounded-md flex flex-row justify-center items-center mt-3 p-2 bg-black-400border border-blue-400" style={{ borderWidth: '0.5px' }}>
          <Icon as={FaWallet} w={6} h={6} alignSelf="left" color={'blue.200'} pr={1}/>
            <button className="text-sm font-small gap-6 text-white border-transparent focus:outline-none">
              {userGnotBalances} GNOT
            </button>
          </div>
        </div>
        <div className="col-span-5 flex justify-end pr-10 pt-2">
          <Select onChange={handleNetworkChange} value={rpcEndpoint}
          size="sm"
          fontSize="sm"
          backgroundColor="blue.700"
          color="white"
          borderColor="blue.500"
          _hover={{ bg: 'blue.600' }}
          _focus={{ boxShadow: 'outline' }}>
          {showLocalOption && <option value="http://localhost:26657">Local node</option>}
          <option value="https://rpc.flippando.xyz" >Flippando RPC</option>
          <option value="https://portal-loop.gnoteam.com">Portal Loop RPC</option>
        </Select>
        </div>
      </div>
      </div>
      )
}

export default Wallet
