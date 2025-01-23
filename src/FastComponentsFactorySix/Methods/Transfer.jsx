import { useState } from "react"
import Service from "../ServiceAndAbi/Service"

export default function Transfer({ coins, wallet}) {
    const [addressTo, setAddressTo] = useState('')
    const [amount, setAmount] = useState('')
    const [choseToken, setChoseToken] = useState('')

    async function sendToken() {
        await Service.transfer(choseToken, wallet, addressTo, amount);
    }
    return (
        <>
            <label ><br />Перевод:<br />
                <label>
                    Токен:
                    <select onChange={e => setChoseToken(e.target.value)}>
                        <option>...</option>
                        {coins.map(e => <option value={e.address} key={e.address}>{e.symbol}</option>)}
                    </select>
                </label>
                <label>
                    Получатель:
                    <input value={addressTo} onChange={(e) => setAddressTo(e.target.value)}/>
                </label>
                <label>
                    Сумма:
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </label>
                <button onClick={sendToken}>Отправить</button>
            </label>
        </>
    )
};
// async transfer(coin, wallet, _to, _value) {
//         return await this.ContractAbi.method.transfer(coin, wallet, _to, _value).send({from: wallet});
