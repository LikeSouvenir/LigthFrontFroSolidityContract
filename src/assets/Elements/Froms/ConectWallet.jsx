// import { useEffect } from "react";

export default function ConectWallet({
    allWallets, setAllWallets,
    haveConnect, setHaveConnect
}) {
    // useEffect(() => {
    //     window.ethereum.on('accountsChanged', connect);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [haveConnect]);

    async function connect() {
        // if (!haveConnect)
            // await window.ethereum.request({ method: "eth_accounts" })
            await window.ethereum.request({ method: 'eth_requestAccounts' })
                .then((answer) => setAllWallets(answer));
                console.log(allWallets)
        // else
            // setAllWallets([]);
        setHaveConnect(!haveConnect);
    };

    return (
        <>
            <p>Wallets:</p>
            {allWallets.map(account => <h5 key={allWallets.indexOf(account)}>address: {account}</h5>)}
            <button onClick={connect}>Connect</button>
        </>
    )
};