import React, { useState, useEffect } from "react";
import '../components/App.css';
import { useGlobalState } from "./State";
import { connectWallet } from './Blockchain.connect';
import {getContract} from './Blockchain.connect';
import { walletConnected } from "./Blockchain.connect";
import {setGlobalState, getGlobalState } from './State';



  const Home = () => {

    const [connectedAccount]  = useGlobalState("connectedAccount")
    const [keyword, setKeyword] = useState('');

    
    
    useEffect( ()=> {
      walletConnected()
      getContract()
      
 
   },[])

    const handleSubmit = async (event) => {
      event.preventDefault();
  
  
      const contract = await getContract()
      console.log("contract", contract)
      const account = getGlobalState('connectedAccount')
     const upload =  await contract.methods.storeKeyword(keyword).send({from: account})
     console.log("upload..", upload)
     alert("keyword created")
      
  
     
      
      setKeyword('');
    }





    return (
//the frontend code
    <>
    <div className="App">
    <button id="home" onClick={connectWallet}>
    Connect wallet
    </button>
      
    <div id='topper'>
    {connectedAccount ? (<div >
        {connectedAccount}</div>
    ) : (<div  >
       
   </div>)}
    </div>
      <h1>Welcome to the Bookstay manager registration page</h1>
      <p>Fill in the form with a unique key which can be any word of your choice and your hotel name</p>
      <p>Please keep the key safe as you will be using it to access the main bookstay app and upload your hotel rooms. Thank you</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="hotel_name">Hotel Name:</label><br />
        <input type="text" id="hotel_name"  required /><br />

        <label htmlFor="keyword">Keyword:</label><br />
        <input type="text" id="keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} required /><br />

        <button type="submit">Submit</button>
      </form>
  
      
      </div>
    </>
  );
}

export default Home
