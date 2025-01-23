import ConectWallet from "./assets/Elements/Froms/ConectWallet"
import { useState } from "react";
import GetOpenInfo from "./assets/Elements/Froms/GetOpenInfo";
import Service from "./assets/Elements/ServiceETC/Service";
function App() {
  const [allCoins, setCoins] = useState([]);
  const [allWallet, setAllWallets] = useState([]);
  const [pools, setPools] = useState([]);
  const [haveConnect, setHaveConnect] = useState(false);

  // loaclState
  const [choseToken, setChoseToken] = useState("")
  const [fromAddress, setFromAddress] = useState("")
  const [toAddress, setToAddress] = useState("")
  const [amount, setAmount] = useState(0)
  async function clickHandler() {
    await Service.transfer(fromAddress, choseToken, toAddress, amount)
  }

  const [choseTokenToBalance, setChoseTokenToBalance] = useState("")
  const [fromAddressToBalance, setFromAddressToBalance] = useState("")
  const [returnBalance, setReturnBalance] = useState(null);
  async function getBalance() {
    const currentBalance = await Service.balanceOf(choseTokenToBalance, fromAddressToBalance)
    setReturnBalance(currentBalance);
  }
  return (
    <div>

      <ConectWallet
        allWallets={allWallet} setAllWallets={setAllWallets}
        haveConnect={haveConnect} setHaveConnect={setHaveConnect}
      />
      <GetOpenInfo
        coins={allCoins} setCoins={setCoins}
        pools={pools} setPools={setPools}
      />
      <>
        <label >
          Перевод<br />
          <label >Тоены:</label>
          <select  onChange={e => setChoseToken(e.target.value)}>
            <option>...</option>
            {allCoins.map(coin => <option value={coin.address} key={coin.address}>{coin.symbol}</option>)}
          </select>
          Адрес отправителя:
          <input minLength={42} maxLength={42} value={fromAddress} onChange={e => setFromAddress(e.target.value)} />
          Адрес получателя:
          <input minLength={42} maxLength={42} value={toAddress} onChange={e => setToAddress(e.target.value)} />
          Сумма:
          <input type="number" min={0} value={amount} onChange={e => setAmount(e.target.value)} />
        </label>
        <button onClick={clickHandler}>Transfer</button><br/>
      </>

      <label>Баланс:<br />
        <label >Тоены:</label>
        <select onChange={e => setChoseTokenToBalance(e.target.value)}>
          <option>...</option>
          {allCoins.map(coin => <option value={coin.address} key={coin.address}>{coin.symbol}</option>)}
        </select>
        Адрес:
        <input value={fromAddressToBalance} onChange={e => setFromAddressToBalance(e.target.value)} />
      </label>
      <button onClick={getBalance}>GetBalance</button>
      <p>{returnBalance?.toString()}</p>
    </div>
  )
  // пеердать как обьект, функция передается не как пара k/v
}

export default App
