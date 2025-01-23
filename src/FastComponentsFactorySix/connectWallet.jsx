export default function ConnectWallet({wallet, setWallet, connected, setConnect}) {
    async function connect() {
        await window.ethereum.request({ method: "eth_requestAccounts" }).then(wallets => setWallet(wallets[0]));
        window.ethereum.on('accountsChanged', async () => await window.ethereum.request({ method: 'eth_accounts' }).then(newWallets => setWallet(newWallets[0])));
        setConnect(!connected);
    }

    return (
        <>
            <h3>Подключенный кошелек: {wallet}</h3>
            <button onClick={connect}>Подключиться</button><br/>
        </>
    )
};
