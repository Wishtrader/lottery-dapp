import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header/Header";
import {useAddress, useContract, useDisconnect, useMetamask} from "@thirdweb-dev/react";
import Login from "../components/Login/Login";
import Loading from "../components/Loading/Loading";
import {ChangeEvent, useState} from "react";

const Home: NextPage = () => {
  const address = useAddress();
  const [quantity, setQuantity] = useState<number>(0);
  const {contract, isLoading } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS);

  if(isLoading) return <Loading />
  if(!address) return (<Login />)

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Wishmaster Draw</title>
        <link rel="icon" href="" />
      </Head>

      <main>
        <Header />

        <div className="space-y-5 md:space-y-0 md:mx-auto m-5 md:flex md:flex-row items-start justify-center
          md:space-x-5 md:max-w-5xl">
          <div className="stats-container">
            <h1 className="text-5xl text-white text-center font-semibold">The Next Draw</h1>
            <div className="flex justify-between p-2 space-x-2">
              <div className="stats">
                <h2 className="text-sm">Total Pool</h2>
                <p className="text-xl">0.1 MATIC</p>
              </div>
              <div className="stats">
                <h2 className="text-sm">Tickets Remaining</h2>
                <p className="text-xl">100</p>
              </div>
            </div>
          </div>
          <div className="stats-container space-y-2">
            <div className="stats-container border-[#004337] border">
              <div className="flex justify-between items-center text-white p-2">
                <h2 className="text-white">Price per ticket</h2>
                <p>0.01 MATIC</p>
              </div>

              <div className="flex text-white items-center space-x-2 bg-[#091B18] border-[#004337] border p-4">
                <p>TICKETS</p>
                <input className="flex w-full bg-transparent text-right outline-none"
                       type="number"
                       min={1}
                       max={10}
                       value={quantity}
                       onChange={(e:ChangeEvent<HTMLInputElement>) => setQuantity(Number(e.target.value))}
                />
              </div>

              <div className="space-y-2 mt-5">
                <div className="flex items-center justify-between text-emerald-300 text-sm italic font-extrabold">
                  <p>Total cost of tickets</p>
                  <p>0.999</p>
                </div>

                <div className="flex items-center justify-between text-emerald-300 text-xs italic">
                  <p>Service fees</p>
                  <p>0.001 MATIC</p>
                </div>

                <div className="flex items-center justify-between text-emerald-300 text-xs italic">
                  <p>+ Network fees</p>
                  <p>TBC</p>
                </div>
              </div>
              <button className="mt-5 w-full bg-gradient-to-br from-orange-500 to-emerald-600 px-10 py-5 rounded-md
              text-white shadow-xl disabled:text-gray-100 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed">
                Buy tickets
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

//https://youtu.be/oNlhptQmChc?t=7105
