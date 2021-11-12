require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rice noise era hunt inhale forget genuine'; 
let testAccounts = [
"0x65a5695980c88de88648ad63d8488786bb195a49c3fdef9f9162f717b704a8cb",
"0xe2b0dcd74895a95628660d43b61eff88d791396ef44825de147d5438387980f7",
"0xff3e64cf3f33e78f6f836925b8ca13906970620192fc6e88b3efaf05915065a6",
"0x7110b5d517958d77263356fea1ac8bf0f054080ee58892f5378e910b3d6cb76a",
"0xa6d42000f5bc2e3e175b3f1d59506a5341ee3fd8204721ea827640eb9c8a05eb",
"0x7f18c3bfe4a1ff55be9d6ed11732323bf31050a7919477b3734005ac1a0ca772",
"0x73871ebc6a70d18984350ac545a8c5d89bf11efa72b782d54c9c0f6dfd6b5c02",
"0x5096145035b3b10daf83077f57ef1f4b89fbe6fba62db98cf3ad010d9618e1c0",
"0xc0bec8b931d63a6b991745fda9159cbd9033c869d083041870a75ddac409bf97",
"0xf79934af0a528ea29e01682f11bf183556241a493f10ffd33b9e549bef2bba7d"
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
            version: '^0.8.0'
        }
    }
};

