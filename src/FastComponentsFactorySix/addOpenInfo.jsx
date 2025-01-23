import { useEffect } from "react";
import Service from "./ServiceAndAbi/Service"

export default function AddOpenInfo({ pools, setPools, coins, setCoins }) {
    useEffect(() => {
        getCoins();
        getPools();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getCoins() {
        const arr = [];
        await Service.getCoinInfo().then(async coins => {
            for (let i = 0; i < coins.__length__; i++) {
                let nameCoin = await Service.name(coins[i]);
                let symbolCoin = await Service.symbol(coins[i]);
                arr.push({
                    address: coins[i],
                    name: nameCoin,
                    symbol: symbolCoin,
                })
            }
            setCoins(arr);
        })
    }

    async function getPools() {
        const arr = [];
        await Service.getPoolInfo().then(async pools => {
            for (let i = 0; i < pools.__length__; i++) {
                let nameCoin = await Service.getInfoAboutPool(pools[i])
                const address = pools[i];
                const firstCoin = nameCoin['firstCoin'];
                const firstCoinSymbol = await Service.symbol(firstCoin);
                const secondCoin = nameCoin['secondCoin'];
                const secondCoinSymbol = await Service.symbol(secondCoin);
                const poolOwner = nameCoin['poolOwner'];
                arr.push({
                    address: address,
                    firstCoin: firstCoin,
                    firstCoinSymbol: firstCoinSymbol,
                    secondCoin: secondCoin,
                    secondCoinSymbol: secondCoinSymbol,
                    poolOwner: poolOwner,
                })
            }
            setPools(arr);
        })
    }
    return (
        <>
            <article style={{ columns: 2}}>
                <span style={{ display: "inline-block"}}>
                    <label >Токены:
                        <ol>
                            {coins.map(e => <li key={e.address}>Название: {e.name}, Символ: {e.symbol} <br /> Адрес: {e.address}</li>)}
                        </ol>
                    </label>
                </span>
                <span style={{ display: "inline-block"}}>
                    <label >Пулы:
                        <ol>
                            {pools.map(e => <li key={e.address}>
                                Владелец: {e.name} <br />
                                Название: {e.firstCoinSymbol}-{e.secondCoinSymbol} Адрес: {e.address}
                            </li>)}
                        </ol>
                    </label>
                </span>
            </article >
        </>
    )
};
