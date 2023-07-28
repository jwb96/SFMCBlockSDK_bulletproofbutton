require('../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

var SDK = require('blocksdk');
var sdk = new SDK();

var button_text, button_url, button_color, block_color, alignment, button_hex, text_color, vml_border, border_style, cta_length, vml_width, padding_top, padding_bottom;

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
	padding_top = document.getElementById('padding_top').value;
	padding_bottom = document.getElementById('padding_bottom').value;

	if (button_color == 'grape') {
		button_hex = '#8250C3'
		text_color = '#FFFFFF'
		border_style = '0px'
		vml_border = '#8250C3'
	} 
		else if (button_color == 'mango') {
			button_hex = '#FFA700'
			text_color = '#000000'
			border_style = '0px'
			vml_border = '#FFA700'
		}
  			else if (button_color == 'arctic') {
				button_hex = '#1AD1DB'
				text_color = '#000000'
				border_style = '0px'
				vml_border = '#1AD1DB'
			}
				else if (button_color == 'white') {
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
		'<div>' +
		'<!--[if mso]>' +
		'<table align="' + alignment + '" style=" padding: ' + padding_top + 'px 32px ' + padding_bottom + 'px 32px;" bgcolor="' + block_color + '">' +
		'<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="line-height:45px;v-text-anchor:middle;width:' + vml_width + '; height:55px;" arcsize="75%"  fillcolor="' + button_hex + '" strokecolor="' + vml_border + '">' +
		'<w:anchorlock>' +
			'<center>' +
			'<!--[endif]---->' +
		'<div style="display:none;visibility:hidden;overflow:hidden;max-height:0px;width:' + vml_width + ';">' +
			'<a alias="btn_' + button_text + '" href="' + button_url + '" style="color: '+ text_color + ';font-family: arial,sans-serif; font-size:16px; font-weight:bold; text-decoration:none;">' + button_text + '</a></div>' +
		'<!--[if mso]>' +
		'</center>' +
		'</v:roundrect>' +
		'</table>' +
		'<![endif]-->' +
		'</div>' +
		'<!--[if !mso]-->' +
		'<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">' +
		'<tr>' +
			'<td align="' + alignment +'" class="mobile-padding" style=" padding: ' + padding_top + 'px 32px ' + padding-bottom + 'px 32px; background-color: ' + block_color + '">' +
			'<table border="0" cellpadding="0" cellspacing="0" role="presentation">' +
				'<tr>' +
				'<td bgcolor="' + button_hex + '" style="padding: 0; font-size: 16px; font-weight: bold; font-family: Arial, helvetica, sans-serif; color: ' + text_color + '; text-align: left;border-radius: 30px; -moz-border-radius: 30px; -webkit-border-radius: 30px; text-align: center; background-color: ' + button_hex + ';padding-left: 32px; padding-right: 32px; border: ' + border_style + ';">' +
					'<a alias="btn_' + button_text + '" conversion="false" data-linkto="other" href="' + button_url + '" style="color:' + text_color + ' !important;text-decoration:none; display: block; background-color: ' + button_hex + ';border: 0px;line-height: 40px;" target="_blank" title="">' + button_text + '</a></td>' +
				'</tr>' +
			'</table>' +
			'</td>' +
		'</tr>' +
		'</table>' +
		'<!--[endif]-->'
		);

	sdk.setSuperContent (
		'<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">' +
		'<tr>' +
			'<td align="' + alignment +'" class="mobile-padding" style=" padding: ' + padding_top + 'px 32px ' + padding-bottom + 'px 32px; background-color: ' + block_color + '">' +
			'<table border="0" cellpadding="0" cellspacing="0" role="presentation">' +
				'<tr>' +
				'<td bgcolor="' + button_hex + '" style="padding: 0; font-size: 16px; font-weight: bold; font-family: Arial, helvetica, sans-serif; color: ' + text_color + '; text-align: left;border-radius: 30px; -moz-border-radius: 30px; -webkit-border-radius: 30px; text-align: center; background-color: ' + button_hex + ';padding-left: 32px; padding-right: 32px; border: ' + border_style + ';">' +
					'<a alias="btn_' + button_text + '" conversion="false" data-linkto="other" href="' + button_url + '" style="color:' + text_color + ' !important;text-decoration:none; display: block; background-color: ' + button_hex + ';border: 0px;line-height: 40px;" target="_blank" title="">' + button_text + '</a></td>' +
				'</tr>' +
			'</table>' +
			'</td>' +
		'</tr>' +
		'</table>' 
			);
	
	// setData(dataObject, callback()). Required to retain the metada of the content block. In case of missing fields, there might be a loss of data.
	sdk.setData({
		alignment: alignment,
		button_text: button_text, 
		button_url: button_url, 
		button_color: button_color, 
		 		
		block_color: block_color, 		
		padding_top: padding_top, 
		padding_bottom: padding_bottom
	});
}

sdk.getData(function (data) {
	button_text = data.button_text || '';
	button_url = data.button_url || '';
	button_color = data.button_color || '';
	block_color = data.block_color || '';
	alignment = data.alignment || '';
	padding_top = data.padding_top || '';
	padding_bottom = data.padding_bottom || '';
	document.getElementById('button_text').value = button_text;
	document.getElementById('button_url').value = button_url;
	document.getElementById('button_color').value = button_color;
	document.getElementById('block_color').value = block_color;
	document.getElementById('alignment').value = alignment;
	document.getElementById('padding_top').value = padding_top;
	document.getElementById('padding_bottom').value = padding_bottom;
	createWallet();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(createWallet, 500)();
});
