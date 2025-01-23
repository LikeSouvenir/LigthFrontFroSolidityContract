// import { Web3 } from 'Web3';
// import abi from './abi.json';
// class Service {
//     web3 = new Web3(window.ethereum);
//     ContractAddress = "0x345E0ee7f807961eEFbcACf9c9D742A36A08047f";
//     ContractFactory = new this.web3.eth.Contract(abi, this.ContractAddress);

//     async mint(wallet, coin, account, value) {
//         try {
//             return await this.ContractFactory.methods.mint(coin, account, value)
//                 .send({ from: wallet });
//         } catch (error) { console.log(error); }
//     }
//     async getPrice(coin) {
//         try {
//             return await this.ContractFactory.methods.getPrice(coin).call();
//         } catch (error) { console.log(error); }
//     }
//     async transfer(wallet, coin, to, value) {
//         try {
//             return await this.ContractFactory.methods.transfer(coin, wallet, to, value)
//                 .send({ from: wallet });
//         } catch (error) { console.log(error); }
//     }
//     async name(coin) {
//         try {
//             return await this.ContractFactory.methods.name(coin).call();
//         } catch (error) { console.log(error); }
//     }
//     async symbol(coin) {
//         try {
//             return await this.ContractFactory.methods.symbol(coin).call();
//         } catch (error) { console.log(error); }
//     }
//     async balanceOf(coin, account) {
//         try {
//             return await this.ContractFactory.methods.balanceOf(coin, account).call();
//         } catch (error) { console.log(error); }
//     }
//     async createPool(wallet, coinA, coinB, poolOwner) {
//         try {
//             return await this.ContractFactory.methods.createPool(coinA, coinB, poolOwner)
//                 .send({ from: wallet });
//         } catch (error) { console.log(error); }
//     }
//     async addLiquidity(wallet, pool, coin, value) {
//         try {
//             return await this.ContractFactory.methods.addLiquidity(pool, wallet, coin, value)
//                 .send({ from: wallet });
//         } catch (error) { console.log(error); }
//     }
//     async swap(pool, wallet, coin, value) {
//         try {
//             return await this.ContractFactory.methods.createPswapool(pool, wallet, coin, value)
//                 .send({ from: wallet });
//         } catch (error) { console.log(error); }
//     }
//     async deepSwap(wallet, fromCoin, toCoin, value) {
//         try {
//             return await this.ContractFactory.methods.deepSwap(wallet, fromCoin, toCoin, value)
//                 .send({ from: wallet });
//         } catch (error) { console.log(error); }
//     }
//     async getInfo() {
//         try {
//             return await this.ContractFactory.methods.getInfo().call();
//         } catch (error) { console.log(error); }
//     }
//     async getPoolInsideInfo(pool) {
//         try {
//             return await this.ContractFactory.methods.getInfo(pool).call();
//         } catch (error) { console.log(error); }
//     }
//     async putOnStack(wallet, value) {
//         try {
//             return await this.ContractFactory.methods.putOnStack(wallet, value)
//                 .send({ from: wallet });
//         } catch (error) { console.log(error); }
//     }
//     async getBonus(wallet) {
//         try {
//             return await this.ContractFactory.methods.getBonus()
//                 .send({ from: wallet });
//         } catch (error) { console.log(error); }
//     }
//     async getCoinInfo() {
//         try {
//             return await this.ContractFactory.methods.getCoinInfo().call();
//         } catch (error) { console.log(error); }
//     }
//     async getPoolInfo() {
//         try {
//             return await this.ContractFactory.methods.getPoolInfo().call();
//         } catch (error) { console.log(error); }
//     }
//     async getStackingInfo() {
//         try {
//             return await this.ContractFactory.methods.getStackingInfo().call();
//         } catch (error) { console.log(error); }
//     }
//     async getRoutingInfo() {
//         try {
//             return await this.ContractFactory.methods.getRoutingInfo().call();
//         } catch (error) { console.log(error); }
//     }
// }
// export default new Service(); 