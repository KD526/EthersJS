/// import react hooks

import React, { useState, useEffect } from "react";
import { ethers } from "ethers";


const index = () => {

  //declare address
  const address = "0x3e9e2a987f47d6956afe31f4d7fd6937582989ab";

  const ethersFunc = async() => {

    /// declare provider
  const provider = new ethers.providers.EtherscanProvider();
  const balance = await provider.getBalance(address);
  ///format number of eth from bignumber
  const showBalance = ethers.utils.formatEther(balance);

  console.log(showBalance);
  }


  useEffect(() => {

     ethersFunc();


  }, [])

  

  return (
    <div>
      <h1>Let's build with ethers.js</h1>
    </div>
  )
}

export default index