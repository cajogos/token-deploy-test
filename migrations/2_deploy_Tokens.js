const MyToken = artifacts.require('MyToken');
const FarmToken = artifacts.require('FarmToken');

module.exports = async function(deployer, network, accounts)
{
    // Deploy MyToken
    await deployer.deploy(MyToken);
    const myToken = await MyToken.deployed();

    // Deploy FarmToken
    await deployer.deploy(FarmToken, myToken.address);
    const farmToken = await FarmToken.deployed();
}

/*
To migrate:

> truffle migrate

After deployment:

> truffle console

1. Get the smart contract:
> myToken = await MyToken.deployed()

2. Get the array of accounts from Ganache:
> accounts = await web3.eth.getAccounts()

3. Get the balance for the first account:
> balance = await myToken.balanceOf(accounts[0])

4. Format the balance from 18 decimals:
> web3.utils.fromWei(balance.toString())

*/
