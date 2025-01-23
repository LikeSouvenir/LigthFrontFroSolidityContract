import { useEffect } from "react";
import Service from "../ServiceETC/Service";

export default function GetOpenInfo({
    coins, setCoins,
    pools, setPools,
}) {
    useEffect(() => {
        getCoinsFromContract();
        getPoolsFromContract();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getCoinsFromContract() {

        const arr = [];
        await Service.getCoinInfo()
            .then(async coinsAddr => {
                for (let i = 0; i < coinsAddr.__length__; i++) {
                    const nameCoin = await Service.name(coinsAddr[i]);
                    const symbolCoin = await Service.symbol(coinsAddr[i]);
                    arr.push({
                        name: nameCoin,
                        symbol: symbolCoin,
                        address: coinsAddr[i],
                    })
                }
            });
        setCoins(arr);
    };

    async function getPoolsFromContract() {
        const arr = [];
        await Service.getPoolInfo()
            .then(async poolsAddr => {
                for (let i = 0; i < poolsAddr.__length__; i++) {
                    await Service.getPoolInsideInfo(poolsAddr[i]).then(async (info) => {
                        const first = info['firstCoin'];
                        const second = info['secondCoin'];
                        const owner = info['poolOwner'];
                        const firstBal = await Service.balanceOf(first, poolsAddr[i]);
                        const secondBal = await Service.balanceOf(second, poolsAddr[i]);
                        arr.push({
                            address: poolsAddr[i],
                            firstCoin: first,
                            secondCoin: second,
                            poolOwner: owner,
                            firstBalance: firstBal,
                            secondBalance: secondBal,
                        })
                    })
                }
            });
        setPools(arr);
    };
    return (
        <>
            <p>Coins:</p>
            <ol>
                {coins.map(e => <li key={e.address}>name: {e.name} <br />symbol: {e.symbol} <br />address: {e.address}</li>)}
            </ol>
            <p>Pools:</p>
            <ol>
                {pools.map(e => <li key={e.address}>
                    owner: {e.owner}<br />
                    pool address: {e.address}<br />
                    first coin: {e.firstCoin} balance: {e.firstBalance.toString()}<br />
                    second coin: {e.secondCoin} balance: {e.secondBalance.toString()}</li>)}
            </ol>
        </>
    )
};
