import { useEffect } from "react"
import { getContract, walletConnected } from "./components/Blockchain.connect"
import Home from "./components/Home"


const App = () => {
  useEffect( ()=> {
     walletConnected()
     getContract()
     

  },[])
  return (
    <div>
   
    <Home/>

    </div>
  )
}

export default App