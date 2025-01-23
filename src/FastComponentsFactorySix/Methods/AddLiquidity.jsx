import { useState } from "react";
import Service from "../ServiceAndAbi/Service";

export default function AddLiquidity({ wallet, pools, coins }) {

    const [chosePool, setChosePool] = useState('')
    const [amount, setAmount] = useState(0)
    const [choseToken, setChoseToken] = useState('')

    async function addLiquidity() {
        await Service.addLiquidity(chosePool, wallet, choseToken, amount);
    }
    return (
        <>
            <label> <br />Добавить ликвидность: <br />
                <label>
                    Токен:
                    <select onChange={e => setChoseToken(e.target.value)}>
                        <option>...</option>
                        {coins.map(e => <option value={e.address} key={e.address}>{e.symbol}</option>)}
                    </select>
                </label>
                <label>
                    Пулы:
                    <select onChange={e => setChosePool(e.target.value)}>
                        <option>...</option>
                        {pools.map(e => <option value={e.address} key={e.address}>{e.firstCoinSymbol}-{e.secondCoinSymbol}</option>)}
                    </select>
                </label>
                <label>
                    Сумма:
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </label>
                <button onClick={addLiquidity}>Отправить</button>
            </label>
        </>
    )
    //(pool, wallet, _coin, _value) {
};
