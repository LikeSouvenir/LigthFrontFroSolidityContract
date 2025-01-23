import { useState } from "react"
import Service from "../ServiceAndAbi/Service";

export default function GetStackingBalance({ wallet }) {
    const [stakinBalance, setStakingBalance] = useState(0);

    async function getMyRoutingBalance() {
        await Service.getMyBalance(wallet).then(answer => setStakingBalance(answer));
    }
    return (
        <>
            <label><br/>Баланс на stacking контракте<br/>
            <button onClick={getMyRoutingBalance}>Посмотреть</button>
            <p>Ваш баланс: {stakinBalance.toString()}</p>
            </label>
        </>
    )
};
