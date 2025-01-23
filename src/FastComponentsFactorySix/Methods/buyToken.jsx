import { useState } from "react";
import Service from "../ServiceAndAbi/Service";

export default function BuyToken({ wallet, pools, coins }) {
    const [chosePool, setChosePool] = useState('')
    const [amount, setAmount] = useState(0)
    const [choseToken, setChoseToken] = useState('')
    const [cost, setCost] = useState(0);

    async function buyToken() {
        if (chosePool != '' && choseToken != ' ')
            await Service.buyToken(chosePool, wallet, choseToken, Number(amount), Number(cost)).then(answer => setCost(answer));
    }//     async buyToken(pool, wallet, _coin, _value, cost) 

    async function getCost() {
        await Service.getPrice(choseToken).then(answer => setCost(Number(answer) * Number(amount)));
        console.log(Number(cost) * Number(amount))
    }
    return (
        <>
            <label><br />Посмотреть цену обмена<br />
                <label>Пулы:
                    <select onChange={e => setChosePool(e.target.value)}>
                        <option>...</option>
                        {pools.map(e => <option value={e.address} key={e.address}>{e.firstCoinSymbol}-{e.secondCoinSymbol}</option>)}
                    </select>
                </label>
                <label>
                    Токены:
                    <select onChange={e => setChoseToken(e.target.value)}>
                        <option>...</option>
                        {coins.map(e => <option value={e.address} key={e.address}>{e.symbol}</option>)}
                    </select>
                </label>
                <label>
                    Кол-во приобретаемых токенов:
                    <input type="number" value={amount} onChange={(e) => {
                        setAmount(e.target.value);
                        if (chosePool != '' && choseToken != ' ')
                            getCost()
                    }} />
                </label>
                <label>
                    Сумма eth:
                    <>{Number(cost)}</>
                </label>
                <button onClick={buyToken}>Купить</button>
            </label>
        </>
    )
};//buyToken(pool, wallet, _coin, _value)
