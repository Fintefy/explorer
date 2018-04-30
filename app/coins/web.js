var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

module.exports = {
	name:"WEB",
	logoUrl:"/img/logo/web.png",
	siteTitle:"WEB 浏览器",
	siteDescriptionHtml:"<b>WEB 浏览器</b>",
	nodeTitle:"WEB 全节点",
	nodeUrl:"/",
	currencyUnits:[
		{
			name:"WEB",
			multiplier:1,
			default:true,
			values:["", "web", "WEB"],
			decimalPlaces:8
		},
		{
			name:"mWEB",
			multiplier:1000,
			values:["mweb"],
			decimalPlaces:5
		},
		{
			name:"bits",
			multiplier:1000000,
			values:["bits"],
			decimalPlaces:2
		},
		{
			name:"sat",
			multiplier:100000000,
			values:["sat"],
			decimalPlaces:0
		}
	],
	genesisBlockHash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
	genesisCoinbaseTransactionId: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
	genesisCoinbaseTransaction: {
		"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0804ffff001d02fd04ffffffff0100f2052a01000000434104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac00000000",
		"txid": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
		"hash": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
		"size": 204,
		"vsize": 204,
		"version": 1,
		"confirmations":475000,
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
		"000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f":{
			"noteTitle":"Bitcoin Genesis Block",
			"noteBodyHtml":"This is the first block in the Bitcoin blockchain. This block was mined by Bitcoin's anonymous/pseudonymous creator Satoshi Nakamoto. If you're interested, you can <a href='https://en.bitcoin.it/wiki/Genesis_block'>read more about the genesis block</a>."
		}
	},
	specialTransactions:{
		"4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b":{
			"noteTitle":"This transaction doesn't really exist!",
			"noteBodyHtml":"This is the coinbase transaction of the <a href='/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f'>Bitcoin Genesis Block</a>. For more background about this special-case transaction, you can read <a href='https://github.com/bitcoin/bitcoin/issues/3303'>this brief discussion</a> among some of the <a href='https://bitcoin.org'>Bitcoin</a> developers."
		}
	},
	blockRewardFunction:function(blockHeight) {
		var eras = [ new Decimal8(75) ];
		for (var i = 1; i < 34; i++) {
			var previous = eras[i - 1];
			eras.push(new Decimal8(previous).dividedBy(2));
		}

		var index = Math.floor(blockHeight / 4200000);

		return eras[index];
	}
};