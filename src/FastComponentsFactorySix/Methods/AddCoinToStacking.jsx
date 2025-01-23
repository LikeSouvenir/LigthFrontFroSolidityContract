import { useState } from "react"
import Service from "../ServiceAndAbi/Service";

export default function AddCoinToStacking({ wallet }) {
    const [amount, setAmount] = useState(0)

    async function putOnStack() {
        await Service.putOnStack(wallet, amount);
    }
    return (
        <>
            <label> <br />Стейк LP токенов: <br />
                <label>
                    Сумма:
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </label>
                <button onClick={putOnStack}>Отправить</button>
            </label>
        </>
    )//     async putOnStack(wallet, _value) {
};
