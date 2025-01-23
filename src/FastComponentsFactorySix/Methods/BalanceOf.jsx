import { useState } from "react";
import Service from "../ServiceAndAbi/Service";

export default function BalanceOf({ coins }) {
    const [account, setAccount] = useState('')
    const [choseToken, setChoseToken] = useState('')
    const [answer, setAnswer] = useState('')

    async function getBalance() {
        setAnswer(await Service.balanceOf(choseToken, account));
    }
    return (
        <>
            <label> <br />Запросить баланс: <br />
                <label>
                    Токен:
                    <select onChange={e => setChoseToken(e.target.value)}>
                        <option>...</option>
                        {coins.map(e => <option value={e.address} key={e.address}>{e.symbol}</option>)}
                    </select>
                </label>
                <label>
                    Получатель:
                    <input value={account} onChange={(e) => setAccount(e.target.value)} />
                </label>
                <button onClick={getBalance}>Получить</button>
            </label>
            <p>Баланс: {answer?.toString()}</p>
        </>
    )
};
