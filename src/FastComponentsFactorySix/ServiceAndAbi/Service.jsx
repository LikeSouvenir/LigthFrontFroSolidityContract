import Web3 from "web3"
import abi from "./Ab.json"

class Service {

    web3 = new Web3(window.ethereum);
    ContractAddress = "0xc3250b894c0EF8CE06c75a6601F367c76C7a3988";
    ContractAbi = new this.web3.eth.Contract(abi, this.ContractAddress);
    
    async getInfoRouting() {
        try {
            return await this.ContractAbi.methods.getInfoRouting().call();
        } catch (error) { console.log(error) }
        //returns ( _Gerda,  _Krendel,  _Rtk,  _GK,  _KR) 
    }
    async mint(walletFrom, coin, _account, _value) {
        try {
            return await this.ContractAbi.methods.mint(coin, _account, _value).send({ from: walletFrom });
        } catch (error) { console.log(error) }
    }
    async getPrice(coin) {
        try {
            return await this.ContractAbi.methods.getPrice(coin).call();
        } catch (error) { console.log(error) }
    }
    async transfer(coin, wallet, _to, _value) {
        try {
            return await this.ContractAbi.methods.transfer(coin, wallet, _to, _value).send({ from: wallet });
        } catch (error) { console.log(error) }
    }
    async name(coin) {
        try {
            return await this.ContractAbi.methods.name(coin).call();
        } catch (error) { console.log(error) }
    }
    async symbol(coin) {
        try {
            return await this.ContractAbi.methods.symbol(coin).call();
        } catch (error) { console.log(error) }
    }
    async balanceOf(coin, account) {
        try {
            return await this.ContractAbi.methods.balanceOf(coin, account).call();
        } catch (error) { console.log(error) }
    }
    // Pool
    async buyToken(pool, wallet, _coin, _value, cost) {
        try {
            return await this.ContractAbi.methods.buyToken(pool, wallet, _coin, _value).send({ from: wallet, value: cost});
        } catch (error) { console.log(error) }
    }
    async getCost(pool, _coin, _value) {
        try {
            return await this.ContractAbi.methods.getCost(pool, _coin, _value).call();
        } catch (error) { console.log(error) }
    }

    async createPool(wallet, firstCoin, secondCoinb, poolOwner) {
        try {
            return await this.ContractAbi.methods.createPool(firstCoin, secondCoinb, poolOwner).send({ from: wallet });
        } catch (error) { console.log(error) }
    }
    async addLiquidity(pool, wallet, _coin, _value) {
        try {
            return await this.ContractAbi.methods.addLiquidity(pool, wallet, _coin, _value).send({ from: wallet });
        } catch (error) { console.log(error) }
    }
    async swap(pool, wallet, _coin, _value) {
        try {
            return await this.ContractAbi.methods.swap(pool, wallet, _coin, _value).send({ from: wallet });
        } catch (error) { console.log(error) }
    }
    async getInfoAboutPool(_pool) {
        try {
            return await this.ContractAbi.methods.getInfo(_pool).call();
        } catch (error) { console.log(error) }
    }
    // Rout
    async deepSwap(wallet, _fromCoin, _toCoin, _value) {
        try {
            return await this.ContractAbi.methods.deepSwap(wallet, _fromCoin, _toCoin, _value).send({ from: wallet });
        } catch (error) { console.log(error) }
    }
    async putOnStack(wallet, _value) {
        try {
            return await this.ContractAbi.methods.putOnStack(wallet, _value).send({ from: wallet });
        } catch (error) { console.log(error) }
    }
    async getInfoAboutMyBonus(wallet) {
        try {
            return await this.ContractAbi.methods.getInfoAboutMyBonus(wallet).call();
        } catch (error) { console.log(error) }
    }
    async getMyBalance(wallet) {
        try {
            return await this.ContractAbi.methods.getMyBalance(wallet).call();
        } catch (error) { console.log(error) }
    }
    async getBonus(wallet) {
        try {
            return await this.ContractAbi.methods.getBonus().send({ from: wallet });
        } catch (error) { console.log(error) }
    }
    // some Informations
    async getCoinInfo() {
        try {
            return await this.ContractAbi.methods.getCoinInfo().call();
        } catch (error) { console.log(error) }
    }
    async getPoolInfo() {
        try {
            return await this.ContractAbi.methods.getPoolInfo().call();
        } catch (error) { console.log(error) }
    }
    async getStackingInfo() {
        try {
            return await this.ContractAbi.methods.getStackingInfo().call();
        } catch (error) { console.log(error) }
    }
    async getRoutingInfo() {
        try {
            return await this.ContractAbi.methods.getRoutingInfo().call();
        } catch (error) { console.log(error) }
    }
};
export default new Service()