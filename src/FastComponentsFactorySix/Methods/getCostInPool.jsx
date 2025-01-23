// import { useState } from "react";
// import Service from "../ServiceAndAbi/Service";

// export default function GetCostInPool({ pools, coins }) {
//     const [chosePool, setChosePool] = useState('')
//     const [amount, setAmount] = useState(0)
//     const [choseToken, setChoseToken] = useState('')
//     const [cost, setCost] = useState(0);

//     async function getCost() {
//         await Service.getCost(chosePool, choseToken, amount).then(answer => setCost(answer));
//     }
//     return (
//         <>
//             <label><br />Посмотреть цену обмена<br />
//                 <label>Пулы:
//                     <select onChange={e => setChosePool(e.target.value)}>
//                         <option>...</option>
//                         {pools.map(e => <option value={e.address} key={e.address}>{e.firstCoinSymbol}-{e.secondCoinSymbol}</option>)}
//                     </select>
//                 </label>
//                 <label>
//                     Токены:
//                     <select onChange={e => setChoseToken(e.target.value)}>
//                         <option>...</option>
//                         {coins.map(e => <option value={e.address} key={e.address}>{e.symbol}</option>)}
//                     </select>
//                 </label>
//                 <label>
//                     Сумма:
//                     <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
//                 </label>
//                 <button onClick={getCost}>Показать цену</button>
//                 <p>Стоимость обмена в wei: {cost.toString()}</p>
//             </label>
//         </>
//     )
// };

// // async getCost(pool, _coin, _value) {
