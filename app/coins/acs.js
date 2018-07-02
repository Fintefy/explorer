var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

module.exports = {
	name:"ACS",
	logoUrl:"/img/logo/acs.png",
	siteTitle:"ACS 浏览器",
	siteDescriptionHtml:"<b>ACS 浏览器</b>",
	nodeTitle:"ACS 全节点",
	nodeUrl:"/",
	currencyUnits:[
		{
			name:"ACS",
			multiplier:1,
			default:true,
			values:["", "acs", "ACS"],
			decimalPlaces:8
		},
		{
			name:"mACS",
			multiplier:1000,
			values:["macs"],
			decimalPlaces:5
		},
		{
			name:"µACS",
			multiplier:1000000,
			values:["µACS"],
			decimalPlaces:2
		},
		{
			name:"sat",
			multiplier:100000000,
			values:["sat"],
			decimalPlaces:0
		}
	],
	genesisBlockHash: "0000b07cfbaddc7ffadbcee90e5eabf808a00514cd835bebbbe162e3080dc0e1",
	genesisCoinbaseTransactionId: "0ee5434180a5654dc7d250bdc592acd51a01dd81817560667187cd342b12c969",
	genesisCoinbaseTransaction: {
		"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0804ffff001d02fd04ffffffff0100f2052a01000000434104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac00000000",
		"txid": "0ee5434180a5654dc7d250bdc592acd51a01dd81817560667187cd342b12c969",
		"hash": "0ee5434180a5654dc7d250bdc592acd51a01dd81817560667187cd342b12c969",
		"size": 204,
		"vsize": 204,
		"version": 1,
		"confirmations":300,
		"vin": [
			{
				"coinbase": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
				"sequence": 4294967295
			}
		],
		"vout": [
			{
				"value": 50,
				"n": 0,
				"scriptPubKey": {
					"asm": "04f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446a OP_CHECKSIG",
					"hex": "4104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac",
					"reqSigs": 1,
					"type": "pubkey",
					"addresses": [
						"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
					]
				}
			}
		],
		"blockhash": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
		"time": 1230988505,
		"blocktime": 1230988505
	},
	specialBlocks:{
		"0000b07cfbaddc7ffadbcee90e5eabf808a00514cd835bebbbe162e3080dc0e1":{
			"noteTitle":"Apicoureios Genesis Block",
			"noteBodyHtml":"This is the first block in the Apicoureios blockchain. This block was mined by Apicoureios's anonymous/pseudonymous creator."
		}
	},
	specialTransactions:{
		"0ee5434180a5654dc7d250bdc592acd51a01dd81817560667187cd342b12c969":{
			"noteTitle":"This transaction doesn't really exist!",
			"noteBodyHtml":"This is the coinbase transaction of the <a href='/block/0000b07cfbaddc7ffadbcee90e5eabf808a00514cd835bebbbe162e3080dc0e1'>Apicoureios Genesis Block</a>."
		}
	},
	blockRewardFunction:function(blockHeight) {
		var eras = [ new Decimal8(6.18) ];
		for (var i = 1; i < 34; i++) {
			var previous = eras[i - 1];
			eras.push(new Decimal8(previous).dividedBy(2));
		}

		var index = Math.floor(blockHeight / 4204800);

		return eras[index];
	}
};