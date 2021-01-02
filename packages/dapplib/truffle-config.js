require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stool dash script coil inside light army giant'; 
let testAccounts = [
"0x51e9cda895c58fb03544298b76aa784e2b7011dfaae182e5d9a557243c8234e4",
"0x40eab1bc38e789d5075e444d93a034e223edaf61ba1faee0fa3fb91d5616409a",
"0x5ec82fb027d53255b4f7c919197918a831213ad4915a2a362d6196cf59bf75aa",
"0x0d0974196a7ff8a476d9977d0c5d17c1fd3c8812a8eb30eef9a715394c54b357",
"0x244110e5ac1a0921eebf3d8fc1d8c27bed47f61a41ce508dacd82c599ef89755",
"0x735bb8033379da68d32bd04ca2aa6da5c74760d76db4ee927d9fde0e2570833b",
"0xcfe3eb866f421a8f8928d2a1a99e0a5b4d72512c93d0c1d58d1419843e848813",
"0x187a75226c56729dc698b66c7d9b2a71fa226fa37f28c7d46a07a71597928d3d",
"0x549757ed4a7be2269dc88fa908bf795e6d917bdeafd24515ad0123cfce790a09",
"0x3d318134feb65d1e1c273dfd2cff74872cf9f26b0993f91f34382391aa3ed939"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
