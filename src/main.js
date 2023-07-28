require('../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

var SDK = require('blocksdk');
var sdk = new SDK();

var button_text, button_url, button_color, block_color, alignment, button_hex, text_color, vml_border, border_style, cta_length, vml_width;

function debounce (func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

function createWallet() {
	button_text = document.getElementById('button_text').value;
	button_url = document.getElementById('button_url').value;
	button_color = document.getElementById('button_color').value;
	block_color = document.getElementById('block_color').value;
	alignment = document.getElementById('alignment').value;

	if (button_color == 'GRAPE') {
		button_hex = '#8250C3'
		text_color = '#FFFFFF'
		border_style = '0px'
		vml_border = '#8250C3'
	} 
		else if (button_color == 'MANGO') {
			button_hex = '#FFA700'
			text_color = '#000000'
			border_style = '0px'
			vml_border = '#FFA700'
		}
  			else if (button_color == 'ARCTIC') {
				button_hex = '#1AD1DB'
				text_color = '#000000'
				border_style = '0px'
				vml_border = '#1AD1DB'
			}
				else if (button_color == 'WHITE') {
					button_hex = '#FFFFFF'
					text_color = '#743DBC'
					border_style = '1px solid #743DBC'
					vml_border = '#743DBC'
				} 
					else {
						button_hex = '#8250C3'
						text_color = '#FFFFFF'
						border_style = '0px'
						vml_border = '#8250C3'
					}

	cta_length = ${button_text.length}

	if cta_length <= 10 {vml_width = '200px !important'}
  		else
    		{vml_width = ((cta_length *10) + 50) + 'px !important'}


	// ALTERED VERSION OF SETCONTENT & SETDATA
	// setContent(content, callback()). Only content attribute value is passed. It sets content stored in the widget as the original HTML(+script) of the body content of content block: CnC_Pickup_Wallet_ES_Omni in Test BU
	sdk.setContent(
	'<table cellspacing="0" cellpadding="0" width="100%" align="left" border="0" style="background-color:#f2f2f2" bgcolor="#f2f2f2">' + 
		'<tr align="center">' + 
			'<td align="center" valign="top">' +         
				'<table border="0" width="640" cellpadding="0" cellspacing="0" class="templateColumns100">' +
					'<tr align="center">' + 
						'<td align="center" valign="top">' + 
							'<table width="100%" cellpadding="0" cellspacing="0" border="0">' + 
								'<tr>' + 
									'<td name="body-wallet-heading-text" id="body-wallet-heading-text" class="xspace-orhead_3_2d" align="center" valign="middle" style="padding-top:60px; padding-bottom:32px; font-family:Arial; font-size:18px; color:#333333; letter-spacing:0.3em;">' + 
										button_text + 
									'</td>' + 
								'</tr>' + 
								'<tr>' + 
									'<td name="body-wallet-subheading-text" id="body-wallet-subheading-text" class="xspace-headtop_3_2d" style=" padding-top:15px; padding-bottom:30px; font-family:Arial; font-size:14px; color:#8b8b8b;" align="center">' + 
										button_url + 
									'</td>' + 
								'</tr>' + 
								'<tr>' + 
									'<td height="40" align="center" valign="middle">' + 
										'<a name="body-wallet-link" id="body-wallet-link" href="https://scv-stg.adidas.com/cdc/pass.action?ident=cncES&euci=%%=v(@EUCI)=%%&lang=es&order=%%=v(@orderNumber)=%%&date=%%=v(@validity_date)=%%" _label="applewallet"><img name="body-wallet-image" id="body-wallet-image" src="http://image.link.adidas.com/lib/fe6515707c62007e7715/m/2/ca3de34d-6a1f-4e9c-90fe-7cb9b1623531.png?b=1520451857000" _label="applewallet" border="0" alt="Apple Wallet" style="display:block;"></a>' + 
									'</td>' + 
								'</tr>' + 
								'<tr>' + 
									'<td height="55" align="left" valign="middle">' + 
										'<img class="resizeImg" height="55" src="http://image.link.adidas.com/lib/fe6515707c62007e7715/m/1/37231f63-3f72-48f3-8047-2650e11742e8.gif" border="0" alt="" style="display:block;">' + 
									'</td>' + 
								'</tr>' + 
							'</table>' +   
						'</td>' + 
					'</tr>' +
				'</table>' +
			'</td>' + 
		'</tr>' +
	'</table>');
	
	// setData(dataObject, callback()). Required to retain the metada of the content block. In case of missing fields, there might be a loss of data.
	sdk.setData({
		button_text: button_text, 
		button_url: button_url, 
		button_color: button_color, 
		block_color: block_color, 
		alignment: alignment
	});
}

sdk.getData(function (data) {
	button_text = data.button_text || '';
	button_url = data.button_url || '';
	document.getElementById('text-input-id-0').value = title;
	document.getElementById('text-input-id-1').value = description;
	createWallet();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(createWallet, 500)();
});
