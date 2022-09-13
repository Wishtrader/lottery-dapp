import React from 'react';
import {useMetamask} from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";

function Login():JSX.Element {
  const connectWithMetamask = useMetamask();

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center mb-10">
        <img className="w-56 mb-10" src="https://adamlevin.com/wp-content/uploads/2020/06/joomla-logo-png-transparent.png" alt="Logo"/>
        <h1 className="text-6xl text-white font-bold">Wishmaster Draw</h1>
        <h2 className="text-white">Connect with Metamask</h2>
        <button onClick={connectWithMetamask} className="bg-white px-8 py-5 my-10 rounded-lg shadow-lg font-bold">Login With Metamask</button>
        <ConnectWallet accentColor="#f213a4" colorMode="dark" />
      </div>
    </div>
  );
}

export default Login;
