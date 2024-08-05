import { Button, Input, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { useState } from "react";

const AirdropForm = ({ address, setAddress, mintAirdropNFT }) => {
  const [isError, setIsError] = useState(false);

  const validateAddress = (address) => {
    const gnoAddressRegex = /^g1[a-z0-9]{38}$/;
    return gnoAddressRegex.test(address);
  };

  const handleMint = () => {
    if (validateAddress(address)) {
      console.log("address ", address);
      mintAirdropNFT(address);
    } else {
      setIsError(true);
    }
  };

  return (
    <FormControl isInvalid={isError}>
      <Input
        type="text"
        placeholder="Enter Gno chain address"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
          setIsError(!validateAddress(e.target.value));
        }}
        maxLength={42}
      />
      {isError && <FormErrorMessage>Invalid Gno chain address.</FormErrorMessage>}
      <Button onClick={handleMint} mt={4}>
        Mint
      </Button>
    </FormControl>
  );
};

export default AirdropForm;
