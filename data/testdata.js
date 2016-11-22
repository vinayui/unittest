var cdnBaseURL = "//qicm.americanexpress.com/";
var errorObj = "";

var apiData = {
	"card": {
		"displayAccountNumber": "XXXX-XXXXXX-01002",
		"firstName": "GIL",
		"lastName": "BROWN",
		"embossedName": "GIL BROWN",
		"assetDescription": "Blue from American Express",
		"assetName": "FIXED LENDING",
		"digtitalAssetId": "NUS000000011",
		"accountStatus": ["Active", "PastDue"],
		"cardAssets": [{
			"cardArtURL": "https://e1qonline.americanexpress.com/myca/shared/summary/cardasset/images/NUS000000011.jpg",
			"digitalAssetID": "NUS000000011",
			"cardAssetSize": "S1",
			"cardAssetResolution": "96",
			"status": {
				"respCode": "0000",
				"respDesc": "Exact match found."
			}
		}, {
			"cardArtURL": "https://e1qonline.americanexpress.com/myca/shared/summary/cardasset/images/NUS000000011_S2.jpg",
			"digitalAssetID": "NUS000000011",
			"cardAssetSize": "S2",
			"cardAssetResolution": "96",
			"status": {
				"respCode": "0000",
				"respDesc": "Exact match found."
			}
		}, {
			"cardArtURL": "https://e1qonline.americanexpress.com/myca/shared/summary/cardasset/images/NUS000000011_S3.jpg",
			"digitalAssetID": "NUS000000011",
			"cardAssetSize": "S3",
			"cardAssetResolution": "96",
			"status": {
				"respCode": "0000",
				"respDesc": "Exact match found."
			}
		}]
	},
	"offers": [{
		"offer_id": "offer2",
		"offer_src_system": "Arkansas",
		"offer_desc": "1Click test offer 1",
		"start_date": "2016-10-04T12:00:00Z",
		"end_date": "2016-11-21T12:00:00Z",
		"offer_status": "ELIGIBLE",
		"extended_param": [{
			"name": "promo_exp_date",
			"value": "11/2016"
		}, {
			"name": "promo_baseapr",
			"value": "3.74"
		}, {
			"name": "source_cd",
			"value": "CELL111111"
		}, {
			"name": "threshold_ind",
			"value": "N"
		}, {
			"name": "promo_rate",
			"value": "7.24"
		}, {
			"name": "gotorate_ptr",
			"value": "38"
		}, {
			"name": "market_offerid",
			"value": "CLK1"
		}, {
			"name": "econsent_ind",
			"value": "Y"
		}, {
			"name": "gotorate_baseapr",
			"value": "13.99"
		}, {
			"name": "goto_ratetypecd",
			"value": "V"
		}, {
			"name": "solicited_flag",
			"value": "Y"
		}, {
			"name": "promo_eff_date",
			"value": "2016-10-05"
		}, {
			"name": "rate_typecd",
			"value": "V"
		}, {
			"name": "goto_rate",
			"value": "17.24"
		}, {
			"name": "eligibility_flag",
			"value": "true"
		}],
		"programType": "CLP",
		"decmOfferId": "offer1",
		"sorParams": {
			"promo_exp_date": "11/2016",
			"promo_baseapr": "3.74",
			"source_cd": "CELL111111",
			"threshold_ind": "N",
			"promo_rate": "7.24",
			"gotorate_ptr": "38",
			"market_offerid": "CLK1",
			"econsent_ind": "Y",
			"gotorate_baseapr": "13.99",
			"goto_ratetypecd": "V",
			"solicited_flag": "Y",
			"promo_eff_date": "2016-10-05",
			"rate_typecd": "V",
			"goto_rate": "17.24",
			"eligibility_flag": "true"
		}
	}],
	"termsData": {
		"promoRate": "7.24",
		"endDate": "11/21/2016",
		"startDate": "10/04/2016",
		"cardName": "Blue from American Express",
		"goToBaseAPR": "13.99",
		"billingPeriod": "12",
		"goToTotalAPR": "17.24",
		"cardHolderName": "Gil Brown"
	}
};