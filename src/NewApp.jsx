import { useState } from "react"
import ConnectWallet from "./FastComponentsFactorySix/connectWallet";
import AddOpenInfo from "./FastComponentsFactorySix/addOpenInfo";
import Transfer from "./FastComponentsFactorySix/Methods/Transfer";
import BalanceOf from "./FastComponentsFactorySix/Methods/BalanceOf";
import AddLiquidity from "./FastComponentsFactorySix/Methods/AddLiquidity";
import AddCoinToStacking from "./FastComponentsFactorySix/Methods/AddCoinToStacking";
import GetStackingBalance from "./FastComponentsFactorySix/Methods/getStackingBalance";
import GetStakicgBonusInfo from "./FastComponentsFactorySix/Methods/getStakicgBonusInfo";
import SwapToken from "./FastComponentsFactorySix/Methods/SwapToken";
import BuyToken from "./FastComponentsFactorySix/Methods/buyToken";

function App() {
    const [wallet, setWallet] = useState("");
    const [pools, setPools] = useState([]);
    const [coins, setCoins] = useState([]);
    const [connected, setConnect] = useState(false);

    function CloseInfo() {
        if (!connected)
            return null;
        return (
            <>
                <Transfer coins={coins} wallet={wallet} />
                <BalanceOf coins={coins} />
                <AddLiquidity wallet={wallet} pools={pools} coins={coins}/>
                <AddCoinToStacking wallet={wallet}/>
                <GetStackingBalance wallet={wallet}/>
                <GetStakicgBonusInfo wallet={wallet}/>
                {/* getBonus */}
                <SwapToken wallet={wallet} pools={pools} coins={coins}/>
                <BuyToken wallet={wallet} pools={pools} coins={coins}/>
            </>
        )
    }
    return (
        <>
            <ConnectWallet wallet={wallet} setWallet={setWallet} connected={connected} setConnect={setConnect} />
            <AddOpenInfo
                pools={pools} setPools={setPools}
                coins={coins} setCoins={setCoins}
            />
            <CloseInfo />
        </>
    )
}

export default App
