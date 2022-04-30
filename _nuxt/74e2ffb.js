(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        227: function (t, e, n) {
            "use strict";
            n.d(e, "b", (function () {
                return d
            })), n.d(e, "a", (function () {
                return l
            }));
            var r = n(41),
                o = n.n(r),
                c = new o.a(o.a.givenProvider),
                // REFACTOR ( contract ABI )
                d = new c.eth.Contract([
                    {
                        "inputs": [

                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "ref",
                                "type": "address"
                            }
                        ],
                        "name": "buyEggs",
                        "outputs": [

                        ],
                        "stateMutability": "payable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "eth",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "contractBalance",
                                "type": "uint256"
                            }
                        ],
                        "name": "calculateEggBuy",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "eth",
                                "type": "uint256"
                            }
                        ],
                        "name": "calculateEggBuySimple",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "eggs",
                                "type": "uint256"
                            }
                        ],
                        "name": "calculateEggSell",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "getBalance",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "adr",
                                "type": "address"
                            }
                        ],
                        "name": "getEggsSinceLastHatch",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "adr",
                                "type": "address"
                            }
                        ],
                        "name": "getMyEggs",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "adr",
                                "type": "address"
                            }
                        ],
                        "name": "getMyMiners",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "ref",
                                "type": "address"
                            }
                        ],
                        "name": "hatchEggs",
                        "outputs": [

                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "adr",
                                "type": "address"
                            }
                        ],
                        "name": "potatoRewards",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address payable",
                                "name": "_recAdd",
                                "type": "address"
                            }
                        ],
                        "name": "recAddChange",
                        "outputs": [

                        ],
                        "stateMutability": "payable",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "renounceOwnership",
                        "outputs": [

                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "seedMarket",
                        "outputs": [

                        ],
                        "stateMutability": "payable",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "sellEggs",
                        "outputs": [

                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [

                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ], /* REFACTOR (contract ADDRESS) */"0xe1f0B8b40d4f47F540Eea206C8f693a97995b7a2"),
                // THE NEXT IS A COUTRNACT TO NOT TO TOUCH
                // is pancakeswap basically, as I can undestand it provice current BNB price and other stuff on mainnet
                l = l = new c.eth.Contract([{
                    inputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Approval",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount0",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount1",
                        type: "uint256"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "Burn",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount0",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount1",
                        type: "uint256"
                    }],
                    name: "Mint",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount0In",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount1In",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount0Out",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount1Out",
                        type: "uint256"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "Swap",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint112",
                        name: "reserve0",
                        type: "uint112"
                    }, {
                        indexed: !1,
                        internalType: "uint112",
                        name: "reserve1",
                        type: "uint112"
                    }],
                    name: "Sync",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Transfer",
                    type: "event"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "DOMAIN_SEPARATOR",
                    outputs: [{
                        internalType: "bytes32",
                        name: "",
                        type: "bytes32"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "MINIMUM_LIQUIDITY",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "PERMIT_TYPEHASH",
                    outputs: [{
                        internalType: "bytes32",
                        name: "",
                        type: "bytes32"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "allowance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "burn",
                    outputs: [{
                        internalType: "uint256",
                        name: "amount0",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amount1",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        internalType: "uint8",
                        name: "",
                        type: "uint8"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "factory",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "getReserves",
                    outputs: [{
                        internalType: "uint112",
                        name: "_reserve0",
                        type: "uint112"
                    }, {
                        internalType: "uint112",
                        name: "_reserve1",
                        type: "uint112"
                    }, {
                        internalType: "uint32",
                        name: "_blockTimestampLast",
                        type: "uint32"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "_token0",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_token1",
                        type: "address"
                    }],
                    name: "initialize",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "kLast",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "mint",
                    outputs: [{
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "name",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "nonces",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }, {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8"
                    }, {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32"
                    }],
                    name: "permit",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "price0CumulativeLast",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "price1CumulativeLast",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "skim",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "uint256",
                        name: "amount0Out",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amount1Out",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    }],
                    name: "swap",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [],
                    name: "sync",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "token0",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "token1",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }], "0x1B96B92314C44b159149f7E0303511fB2Fc4774f");
            if (false) {
                d = (new c.eth.Contract([{
                    inputs: [],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "previousOwner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "OwnershipTransferred",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "ref",
                        type: "address"
                    }],
                    name: "buyGrinchBucks",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "eth",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "contractBalance",
                        type: "uint256"
                    }],
                    name: "calculateGrinchbuckBuy",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "eth",
                        type: "uint256"
                    }],
                    name: "calculateGrinchbuckBuySimple",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "potatobaker",
                        type: "uint256"
                    }],
                    name: "calculateGrinchbuckSell",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "ref",
                        type: "address"
                    }],
                    name: "generateGrinchBucks",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getBalance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "adr",
                        type: "address"
                    }],
                    name: "getGrinchBucksSinceLastGenerate",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "adr",
                        type: "address"
                    }],
                    name: "getMyGrinchBucks",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "adr",
                        type: "address"
                    }],
                    name: "getMyMiners",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "adr",
                        type: "address"
                    }],
                    name: "grinchRewards",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "seedMarket",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "sellGrinchBucks",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }], "0x70d04f9ddAa2e88f9cAE5E7394E5caB0F8957Da9"),
                    new c.eth.Contract([{
                        inputs: [],
                        stateMutability: "nonpayable",
                        type: "constructor"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "previousOwner",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "newOwner",
                            type: "address"
                        }],
                        name: "OwnershipTransferred",
                        type: "event"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "ref",
                            type: "address"
                        }],
                        name: "buyEggs",
                        outputs: [],
                        stateMutability: "payable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "eth",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "contractBalance",
                            type: "uint256"
                        }],
                        name: "calculateEggBuy",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "eth",
                            type: "uint256"
                        }],
                        name: "calculateEggBuySimple",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "eggs",
                            type: "uint256"
                        }],
                        name: "calculateEggSell",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "getBalance",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "adr",
                            type: "address"
                        }],
                        name: "getEggsSinceLastHatch",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "adr",
                            type: "address"
                        }],
                        name: "getMyEggs",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "adr",
                            type: "address"
                        }],
                        name: "getMyMiners",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "adr",
                            type: "address"
                        }],
                        name: "grinchBuckRewards",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "ref",
                            type: "address"
                        }],
                        name: "hatchEggs",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "owner",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "renounceOwnership",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "seedMarket",
                        outputs: [],
                        stateMutability: "payable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "sellEggs",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "newOwner",
                            type: "address"
                        }],
                        name: "transferOwnership",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }], "0xe1f0B8b40d4f47F540Eea206C8f693a97995b7a2")),
                    l = new c.eth.Contract([{
                        inputs: [],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "constructor"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "value",
                            type: "uint256"
                        }],
                        name: "Approval",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "amount0",
                            type: "uint256"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "amount1",
                            type: "uint256"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }],
                        name: "Burn",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "amount0",
                            type: "uint256"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "amount1",
                            type: "uint256"
                        }],
                        name: "Mint",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "sender",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "amount0In",
                            type: "uint256"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "amount1In",
                            type: "uint256"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "amount0Out",
                            type: "uint256"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "amount1Out",
                            type: "uint256"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }],
                        name: "Swap",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !1,
                            internalType: "uint112",
                            name: "reserve0",
                            type: "uint112"
                        }, {
                            indexed: !1,
                            internalType: "uint112",
                            name: "reserve1",
                            type: "uint112"
                        }],
                        name: "Sync",
                        type: "event"
                    }, {
                        anonymous: !1,
                        inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            indexed: !0,
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            indexed: !1,
                            internalType: "uint256",
                            name: "value",
                            type: "uint256"
                        }],
                        name: "Transfer",
                        type: "event"
                    }, {
                        constant: !0,
                        inputs: [],
                        name: "DOMAIN_SEPARATOR",
                        outputs: [{
                            internalType: "bytes32",
                            name: "",
                            type: "bytes32"
                        }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function"
                    }, {
                        constant: !0,
                        inputs: [],
                        name: "MINIMUM_LIQUIDITY",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function"
                    }, {
                        constant: !0,
                        inputs: [],
                        name: "PERMIT_TYPEHASH",
                        outputs: [{
                            internalType: "bytes32",
                            name: "",
                            type: "bytes32"
                        }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function"
                    }, {
                        constant: !0,
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "allowance",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function"
                    }, {
                        constant: !1,
                        inputs: [{
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "value",
                            type: "uint256"
                        }],
                        name: "approve",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        constant: !0,
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "balanceOf",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function"
                    }, {
                        constant: !1,
                        inputs: [{
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }],
                        name: "burn",
                        outputs: [{
                            internalType: "uint256",
                            name: "amount0",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "amount1",
                            type: "uint256"
                        }],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        constant: !0,
                        inputs: [],
                        name: "decimals",
                        outputs: [{
                            internalType: "uint8",
                            name: "",
                            type: "uint8"
                        }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function"
                    }, {
                        constant: !0,
                        inputs: [],
                        name: "factory",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function"
                    }, {
                        constant: !0,
                        inputs: [],
                        name: "getReserves",
                        outputs: [{
                            internalType: "uint112",
                            name: "_reserve0",
                            type: "uint112"
                        }, {
                            internalType: "uint112",
                            name: "_reserve1",
                            type: "uint112"
                        }, {
                            internalType: "uint32",
                            name: "_blockTimestampLast",
                            type: "uint32"
                        }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function"
                    }, {
                        constant: !1,
                        inputs: [{
                            internalType: "address",
                            name: "_token0",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "_token1",
                            type: "address"
                        }],
                        name: "initialize",
                        outputs: [],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        constant: !0,
                        inputs: [],
                        name: "kLast",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function"
                    }, {
                        constant: !1,
                        inputs: [{
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }],
                        name: "mint",
                        outputs: [{
                            internalType: "uint256",
                            name: "liquidity",
                            type: "uint256"
                        }],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        constant: !0,
                        inputs: [],
                        name: "name",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function"
                    }, {
                        constant: !0,
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "nonces",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function"
                    }, {
                        constant: !1,
                        inputs: [{
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "value",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "deadline",
                            type: "uint256"
                        }, {
                            internalType: "uint8",
                            name: "v",
                            type: "uint8"
                        }, {
                            internalType: "bytes32",
                            name: "r",
                            type: "bytes32"
                        }, {
                            internalType: "bytes32",
                            name: "s",
                            type: "bytes32"
                        }],
                        name: "permit",
                        outputs: [],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        constant: !0,
                        inputs: [],
                        name: "price0CumulativeLast",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function"
                    }, {
                        constant: !0,
                        inputs: [],
                        name: "price1CumulativeLast",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function"
                    }, {
                        constant: !1,
                        inputs: [{
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }],
                        name: "skim",
                        outputs: [],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        constant: !1,
                        inputs: [{
                            internalType: "uint256",
                            name: "amount0Out",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "amount1Out",
                            type: "uint256"
                        }, {
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "bytes",
                            name: "data",
                            type: "bytes"
                        }],
                        name: "swap",
                        outputs: [],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        constant: !0,
                        inputs: [],
                        name: "symbol",
                        outputs: [{
                            internalType: "string",
                            name: "",
                            type: "string"
                        }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function"
                    }, {
                        constant: !1,
                        inputs: [],
                        name: "sync",
                        outputs: [],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        constant: !0,
                        inputs: [],
                        name: "token0",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function"
                    }, {
                        constant: !0,
                        inputs: [],
                        name: "token1",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function"
                    }, {
                        constant: !0,
                        inputs: [],
                        name: "totalSupply",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        payable: !1,
                        stateMutability: "view",
                        type: "function"
                    }, {
                        constant: !1,
                        inputs: [{
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "value",
                            type: "uint256"
                        }],
                        name: "transfer",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        constant: !1,
                        inputs: [{
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "value",
                            type: "uint256"
                        }],
                        name: "transferFrom",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        payable: !1,
                        stateMutability: "nonpayable",
                        type: "function"
                    }], "0x1B96B92314C44b159149f7E0303511fB2Fc4774f")
            }
        },
        228: function (t, e, n) {
            "use strict";
            n.r(e);
            n(726);
            var r = n(33),
                component = Object(r.a)({}, (function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("header", {
                        attrs: {
                            id: "primary-header"
                        }
                    }, [n("div", {
                        staticClass: "constraint"
                    }, [n("nav", {
                        attrs: {
                            id: "social-icons"
                        }
                    }, [t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "),
                    n("nuxt-link", {
                        attrs: {
                            id: "faqLink",
                            to: "/faq"
                        }
                    }, [t._v("FAQ")]),
                    n("a", {
                        attrs: {
                            // REFACTOR
                            href: "https://potatobaker.io/audit.pdf",
                            target: "_blank"
                        }
                    }, [t._v("AUDIT")])], 1), t._v(" "), n("ConnectButton")], 1)])
                }), [function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("a", {
                        attrs: {
                            href: "https://t.me/potatobaker",
                            target: "_blank"
                        }
                    }, [e("img", {
                        attrs: {
                            alt: "Telegram icon",
                            src: "/icons/telegram.png"
                        }
                    })])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("a", {
                        attrs: {
                            href: "https://twitter.com/potatobaker",
                            target: "_blank"
                        }
                    }, [e("img", {
                        attrs: {
                            alt: "Twitter icon",
                            src: "/icons/twitter.png"
                        }
                    })])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("a", {
                        attrs: {
                            href: "https://bscscan.com/address/0xe1f0B8b40d4f47F540Eea206C8f693a97995b7a2",
                            target: "_blank"
                        }
                    }, [e("img", {
                        attrs: {
                            alt: "BSC Scan icon",
                            src: "/icons/bscscan.png"
                        }
                    })])
                }], !1, null, "db055bd8", null);
            e.default = component.exports;
            installComponents(component, {
                ConnectButton: n(736).default,
                Header: n(228).default
            })
        },
        357: function (t, e, n) {
            var content = n(725);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(83).default)("229b4558", content, !0, {
                sourceMap: !1
            })
        },
        358: function (t, e, n) {
            var content = n(727);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(83).default)("dfd1a040", content, !0, {
                sourceMap: !1
            })
        },
        359: function (t, e, n) {
            var content = n(730);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(83).default)("0218d022", content, !0, {
                sourceMap: !1
            })
        },
        360: function (t, e, n) {
            var content = n(732);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(83).default)("05caa0b1", content, !0, {
                sourceMap: !1
            })
        },
        362: function (t, e, n) {
            "use strict";
            n.r(e);
            n(731);
            var r = n(33),
                component = Object(r.a)({}, (function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("footer", {
                        attrs: {
                            id: "primary-footer"
                        }
                    }, [n("div", {
                        staticClass: "constraint"
                    }, [n("nav", [t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), n("nuxt-link", {
                        attrs: {
                            to: "/faq",
                        }
                    }, [t._v("FAQ")]), t._v(" "), n("nuxt-link", {
                        attrs: {
                            to: "/marketing"
                        }
                    }, [t._v("Marketing")])], 1), t._v(" "), n("p", [t._v("Copyright © 2022 Potato Baker. All rights reserved")])])])
                }), [function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("a", {
                        attrs: {
                            href: "https://t.me/potatobaker",
                            target: "_blank"
                        }
                    }, [e("img", {
                        attrs: {
                            alt: "Telegram icon",
                            src: "/icons/telegram.png"
                        }
                    })])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("a", {
                        attrs: {
                            href: "https://twitter.com/potatobaker",
                            target: "_blank"
                        }
                    }, [e("img", {
                        attrs: {
                            alt: "Twitter icon",
                            src: "/icons/twitter.png"
                        }
                    })])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("a", {
                        attrs: {
                            href: "https://bscscan.com/address/0xe1f0B8b40d4f47F540Eea206C8f693a97995b7a2",
                            target: "_blank"
                        }
                    }, [e("img", {
                        attrs: {
                            alt: "BSC Scan icon",
                            src: "/icons/bscscan.png"
                        }
                    })])
                }], !1, null, "f2778814", null);
            e.default = component.exports;
            installComponents(component, {
                Footer: n(362).default
            })
        },
        369: function (t, e, n) {
            "use strict";
            n(60), n(39), n(59), n(21), n(84), n(52), n(85);
            var r = n(15),
                o = n(34),
                c = (n(53), n(108), n(54)),
                d = n(41),
                l = n.n(d),
                y = n(227);

            function m(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }
            var f = {
                computed: function (t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? m(Object(source), !0).forEach((function (e) {
                            Object(o.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(c.b)({
                    account: function (t) {
                        return t.Connection.account
                    }
                })),
                watch: {
                    account: function () {
                        this.setRefer()
                    }
                },
                mounted: function () {
                    var t = this;
                    this.getBnbPrice(), setInterval((function () {
                        t.getBnbPrice()
                    }), 1e3), this.setRefer()
                },
                methods: {
                    getBnbPrice: function () {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            var n;
                            return regeneratorRuntime.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        // REFACTOR
                                        return e.next = 2, y.a.methods.getReserves().call((function (t, e) {
                                            return e
                                        }));
                                    case 2:
                                        // REFACTOR
                                        n = e.sent, t.$store.commit("Connection/SET_BNB_PRICE", n._reserve1 / n._reserve0);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    setRefer: function () {
                        var t = this.$route.query.refer,
                            e = l.a.utils.isAddress(t);
                        void 0 !== t && e && null === localStorage.getItem("refer") && ("" === this.account && localStorage.setItem("refer", t), "" !== this.account && t !== this.account && localStorage.setItem("refer", t)), t === this.account && localStorage.removeItem("refer")
                    }
                }
            },
                h = f,
                v = (n(724), n(33)),
                component = Object(v.a)(h, (function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "site-wrapper"
                        }
                    }, [n("Header"), t._v(" "), n("Nuxt"), t._v(" "), n("Footer")], 1)
                }), [], !1, null, null, null);
            e.a = component.exports;
            installComponents(component, {
                Header: n(228).default,
                Footer: n(362).default
            })
        },
        372: function (t, e, n) {
            n(373), t.exports = n(374)
        },
        446: function (t, e) { },
        449: function (t, e) { },
        452: function (t, e) { },
        456: function (t, e) { },
        480: function (t, e) { },
        482: function (t, e) { },
        491: function (t, e) { },
        493: function (t, e) { },
        503: function (t, e) { },
        505: function (t, e) { },
        613: function (t, e) { },
        615: function (t, e) { },
        622: function (t, e) { },
        623: function (t, e) { },
        724: function (t, e, n) {
            "use strict";
            n(357)
        },
        725: function (t, e, n) {
            var r = n(82)(!1);
            r.push([t.i, '#site-wrapper{-webkit-animation:filter-animation 5s ease infinite;animation:filter-animation 5s ease infinite;display:grid;grid-gap:15px}@-webkit-keyframes filter-animation{0%{-webkit-backdrop-filter:hue-rotate(5deg);backdrop-filter:hue-rotate(5deg)}50%{-webkit-backdrop-filter:hue-rotate(30deg);backdrop-filter:hue-rotate(30deg)}to{-webkit-backdrop-filter:hue-rotate(5deg);backdrop-filter:hue-rotate(5deg)}}@keyframes filter-animation{0%{-webkit-backdrop-filter:hue-rotate(5deg);backdrop-filter:hue-rotate(5deg)}50%{-webkit-backdrop-filter:hue-rotate(30deg);backdrop-filter:hue-rotate(30deg)}to{-webkit-backdrop-filter:hue-rotate(5deg);backdrop-filter:hue-rotate(5deg)}}body{background-color:#2e3440;background-image:url(/background.jpeg);background-attachment:fixed;background-position:top;background-size:cover;box-sizing:border-box;color:#d8dee9;font-family:"Open Sans",sans-serif;margin:0;padding:0;text-align:center}p{line-height:1.6em;margin-top:8px;max-width:600px}p:last-of-type{margin-bottom:0}strong{font-family:"Akshar",sans-serif}fieldset{border:none;margin:0;padding:0;width:100%}button,input{background-color:#3b4252;border:none;border-radius:15px;box-sizing:border-box;color:inherit;font-size:1.1em;padding:15px 18px}select{background-color:#434c5e;border:none;border-radius:10px;color:#d8dee9;font-size:1em;padding:8px 10px}a{color:inherit}button{cursor:pointer}button:disabled{background-color:#2e3440;color:hsla(0,0%,100%,.5);cursor:default}h1,h2,h3,h4,h5,h6{font-family:"Akshar",sans-serif;margin:0}.constraint{margin:0 auto;max-width:1200px}.form-wrapper{margin:0 auto;max-width:420px;width:100%}.form-wrapper header{box-sizing:border-box;display:flex;font-size:.9em;justify-content:space-between;padding:0 15px 12px}.form-wrapper form{background-color:#2e3440;border:1px solid #2a2f3a;border-radius:15px;box-sizing:border-box;display:grid;grid-gap:15px;padding:20px;width:100%}.form-wrapper form>button{background-color:#2b4;color:#07240d;width:100%}.form-wrapper form>button:disabled{background-color:#3b4252;color:#737f9a}.form-wrapper form fieldset{align-items:center;display:grid;grid-gap:15px;grid-template-columns:auto 1fr auto}.form-wrapper form .input-field{align-items:center;background-color:#3b4252;border-radius:15px;box-sizing:border-box;display:flex;padding:0 15px}.form-wrapper form .input-field input{box-sizing:border-box;font-size:1.25em;outline:none;padding:15px 0;width:100%}.form-wrapper form .input-field input[type=number]::-webkit-inner-spin-button,.form-wrapper form .input-field input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.form-wrapper form .input-field button{background-color:#4c566a;border-radius:10px;box-sizing:border-box;font-size:.9em;margin-left:18px;padding:10px 12px}', ""]), t.exports = r
        },
        726: function (t, e, n) {
            "use strict";
            n(358)
        },
        727: function (t, e, n) {
            var r = n(82)(!1);
            r.push([t.i, '#primary-header[data-v-db055bd8]{box-sizing:border-box;color:#000;font-family:"Akshar",sans-serif;font-size:1.15em;padding:15px}#primary-header .constraint[data-v-db055bd8]{justify-content:space-between}#primary-header .constraint[data-v-db055bd8],#social-icons[data-v-db055bd8]{align-items:center;display:flex}#social-icons>a[data-v-db055bd8]{color:inherit;margin:0 20px 0 0}#social-icons img[data-v-db055bd8]{background-color:#fff;border-radius:100%;height:42px;width:42px}', ""]), t.exports = r
        },
        729: function (t, e, n) {
            "use strict";
            n(359)
        },
        730: function (t, e, n) {
            var r = n(82)(!1);
            r.push([t.i, "#connect-buttons[data-v-2cf97046]{margin-left:auto}#connect-buttons button[data-v-2cf97046]{font-size:1em}#connect-buttons span[data-v-2cf97046]{background-color:#d8dee9;border-radius:10px;color:#2e3440;padding:8px 15px}", ""]), t.exports = r
        },
        731: function (t, e, n) {
            "use strict";
            n(360)
        },
        732: function (t, e, n) {
            var r = n(82)(!1);
            r.push([t.i, "#primary-footer[data-v-f2778814]{align-items:center;background-color:#3b4252;box-shadow:inset 0 5px 20px rgba(0,0,0,.25);box-sizing:border-box;color:#d8dee9;justify-content:center;padding:15px}#primary-footer .constraint[data-v-f2778814],#primary-footer nav[data-v-f2778814]{align-items:center;display:flex;flex-wrap:wrap;justify-content:center}#primary-footer nav[data-v-f2778814]{width:100%}#primary-footer nav>*[data-v-f2778814]{display:block;margin:5px 30px 0 0}#primary-footer nav img[data-v-f2778814]{background-color:#d8dee9;border-radius:100%}#primary-footer a[data-v-f2778814]{display:block}#primary-footer a img[data-v-f2778814]{height:auto;width:32px}", ""]), t.exports = r
        },
        733: function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, "state", (function () {
                return r
            })), n.d(e, "mutations", (function () {
                return o
            }));
            var r = function () {
                return {
                    account: "",
                    bnbPrice: 0
                }
            },
                o = {
                    SET_ACCOUNT: function (t, e) {
                        t.account = e
                    },
                    SET_BNB_PRICE: function (t, e) {
                        t.bnbPrice = e
                    }
                }
        },
        736: function (t, e, n) {
            "use strict";
            n.r(e);
            n(60), n(39), n(59), n(21), n(84), n(52), n(85);
            var r = n(15),
                o = n(34),
                c = (n(61), n(53), n(41)),
                d = n.n(c),
                l = (n(728), n(54));

            function y(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }
            var m = {
                data: function () {
                    return {
                        chainId: ""
                    }
                },
                computed: function (t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? y(Object(source), !0).forEach((function (e) {
                            Object(o.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : y(Object(source)).forEach((function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(l.b)({
                    account: function (t) {
                        return t.Connection.account
                    }
                })),
                watch: {
                    chainId: function () {
                        // REFACTOR
                        "0x38" === this.chainId && this.getAccount()
                        //"0x61" === this.chainId && this.getAccount()
                    }
                },
                mounted: function () {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (void 0 === window.ethereum) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 3, ethereum.request({
                                        method: "eth_chainId"
                                    });
                                case 3:
                                    // REFACTOR
                                    n = e.sent, t.chainId = n, /*"0x13881"*/"0x38" !== t.chainId && t.switchToBsc(), ethereum.on("chainChanged", function () {
                                        var e = Object(r.a)(regeneratorRuntime.mark((function e(n) {
                                            return regeneratorRuntime.wrap((function (e) {
                                                for (; ;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, ethereum.request({
                                                            method: "eth_chainId"
                                                        }).then((function () {
                                                            // REFACTOR
                                                            t.$forceUpdate(), "0x38" !== n && t.switchToBsc()
                                                            //t.$forceUpdate(), "0x61" !== n && t.switchToBsc()
                                                        }));
                                                    case 2:
                                                        t.chainId = n;
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function (t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()), ethereum.on("accountsChanged", function () {
                                        var e = Object(r.a)(regeneratorRuntime.mark((function e(n) {
                                            return regeneratorRuntime.wrap((function (e) {
                                                for (; ;) switch (e.prev = e.next) {
                                                    case 0:
                                                        0 === n.length ? t.$store.commit("Connection/SET_ACCOUNT", "") : (t.$forceUpdate(), t.getAccount());
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function (t) {
                                            return e.apply(this, arguments)
                                        }
                                    }());
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                methods: {
                    getAccount: function () {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            var n, r, o;
                            return regeneratorRuntime.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = [], r = new d.a(d.a.givenProvider), e.next = 4, r.eth.getAccounts().then((function (t) {
                                            n = t
                                        }));
                                    case 4:
                                        n.length > 0 && (o = d.a.utils.toChecksumAddress(n[0]), t.$store.commit("Connection/SET_ACCOUNT", o));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    switchToBsc: function () {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            var n, r, o;
                            return regeneratorRuntime.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        try {
                                            n = [{
                                                // REFACTOR
                                                chainId: "0x38",
                                                chainName: "Binance Smart Chain Mainnet",
                                                nativeCurrency: {
                                                    name: "Binance Coin",
                                                    symbol: "BNB",
                                                    decimals: 18
                                                },
                                                rpcUrls: ["https://bsc-dataseed.binance.org", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed1.ninicoin.io"],
                                                blockExplorerUrls: ["https://bscscan.com"]
                                                /*
                                                chainId: "0x61",
                                                chainName: "BSC Testnet",
                                                nativeCurrency: {
                                                    name: "Binance Coin",
                                                    symbol: "tBNB",
                                                    decimals: 18
                                                },
                                                rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
                                                blockExplorerUrls: ["https://testnet.bscscan.com"]
                                                */
                                            }], window.ethereum.request({
                                                method: "wallet_addEthereumChain",
                                                params: n
                                            }).then((function () {
                                                t.$forceUpdate()
                                            }))
                                        } catch (t) { }
                                        return e.next = 3, ethereum.request({
                                            method: "eth_chainId"
                                        });
                                    case 3:
                                        r = e.sent, t.chainId = r, [], (o = ethereum.request({
                                            method: "eth_requestAccounts"
                                        })).length > 0 ? t.$store.commit("Connection/SET_ACCOUNT", d.a.utils.toChecksumAddress(o[0])) : t.$store.commit("Connection/SET_ACCOUNT", "");
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    connectWallet: function () {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            var n;
                            return regeneratorRuntime.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = [], void 0 === window.ethereum) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.prev = 2, e.next = 5, ethereum.request({
                                            method: "eth_requestAccounts"
                                        });
                                    case 5:
                                        n = e.sent, e.next = 10;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(2);
                                    case 10:
                                        n.length > 0 ? t.$store.commit("Connection/SET_ACCOUNT", d.a.utils.toChecksumAddress(n[0])) : t.$store.commit("Connection/SET_ACCOUNT", "");
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 8]
                            ])
                        })))()
                    },
                    shortenedAccount: function (address) {
                        return address.slice(0, 5) + "..." + address.slice(-4)
                    }
                }
            },
                f = m,
                h = (n(729), n(33)),
                component = Object(h.a)(f, (function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: "connect-buttons"
                        }
                        // REFACTOR
                    }, ["" === t.account && "0x38" === t.chainId ? n("button", {
                        //}, ["" === t.account && "0x61" === t.chainId ? n("button", {
                        on: {
                            click: function (e) {
                                return t.connectWallet()
                            }
                        }
                        // REFACTOR
                    }, [t._v("Connect Wallet")]) : t._e(), t._v(" "), "0x38" !== t.chainId ? n("button", {
                        //}, [t._v("Connect Wallet")]) : t._e(), t._v(" "), "0x61" !== t.chainId ? n("button", {
                        on: {
                            click: function (e) {
                                return t.switchToBsc()
                            }
                        }
                    }, [t._v("Switch to BSC")]) : t._e(), t._v(" "), "" !== t.account ? n("span", [t._v(t._s(t.shortenedAccount(t.account)))]) : t._e()])
                }), [], !1, null, "2cf97046", null);
            e.default = component.exports
        }
    },
    [
        [372, 17, 2, 18]
    ]
]);