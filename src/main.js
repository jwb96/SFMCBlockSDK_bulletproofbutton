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

	cta_length = button_text.length

	if (cta_length <= 10) {vml_width = '200px !important'}
  		else
    		{vml_width = ((cta_length *10) + 50) + 'px !important'}


	// ALTERED VERSION OF SETCONTENT & SETDATA
	// setContent(content, callback()). Only content attribute value is passed. It sets content stored in the widget as the original HTML(+script) of the body content of content block: CnC_Pickup_Wallet_ES_Omni in Test BU
	sdk.setContent(
		'<table cellspacing="0" cellpadding="0" width="100%" align="left" border="0" style="background-color:#f2f2f2" bgcolor="#f2f2f2">' + 
			'<tr align="center">' + 
				'<td align="center" valign="top">' +         
					'<table border="0" width="600" cellpadding="0" cellspacing="0" class="templateColumns100">' +
						'<tr align="center">' + 
							'<td align="center" valign="top">' + 
								'<table width="100%" cellpadding="0" cellspacing="0" border="0">' + 
									'<tr>' + 
										'<td align="center" valign="middle" style="padding-top:60px; padding-bottom:32px; font-family:Arial; font-size:18px; color:#333333; letter-spacing:0.3em;">Button text: ' + 
											button_text +
										'</td>' + 
									'</tr>' + 
									'<tr>' + 
										'<td style="padding-top:15px; padding-bottom:30px; font-family:Arial; font-size:14px; color:#8b8b8b;" align="center">Button URL: ' + 
											button_url +
										'</td>' + 
									'</tr>' + 
									'<tr>' + 
										'<td style="padding-top:15px; padding-bottom:30px; font-family:Arial; font-size:14px; color:#8b8b8b;" align="center">CTA length: ' + 
											cta_length +
										'</td>' + 
									'</tr>' + 
									'<tr>' + 
										'<td style="padding-top:15px; padding-bottom:30px; font-family:Arial; font-size:14px; color:#8b8b8b;" align="center">VML width: ' + 
											vml_width +
										'</td>' + 
									'</tr>' + 
									'<tr>' + 
										'<td style="padding-top:15px; padding-bottom:30px; font-family:Arial; font-size:14px; color:#8b8b8b;" align="center">Button hex: ' + 
											button_hex +
										'</td>' + 
									'</tr>' + 
									'<tr>' + 
										'<td style="padding-top:15px; padding-bottom:30px; font-family:Arial; font-size:14px; color:#8b8b8b;" align="center">Text color: ' + 
											text_color +
										'</td>' + 
									'</tr>' + 
									'<tr>' + 
										'<td style="padding-top:15px; padding-bottom:30px; font-family:Arial; font-size:14px; color:#8b8b8b;" align="center">VML border: ' + 
											vml_border +
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
	button_color = data.button_color || '';
	block_color = data.block_color || '';
	alignment = data.alignment || '';
	document.getElementById('button_text').value = button_text;
	document.getElementById('button_url').value = button_url;
	document.getElementById('button_color').value = button_color;
	document.getElementById('block_color').value = block_color;
	document.getElementById('alignment').value = alignment;
	createWallet();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(createWallet, 500)();
});
