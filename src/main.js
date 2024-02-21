require('../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

var SDK = require('blocksdk');
var sdk = new SDK();

var subjectLine, salutation, version, veeva, customCopyright, unsubscribe, isi, vib, OP5FAQ, ctoken, utm_source, utm_content, utm_campaign;

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

function createSettings() {
	subjectLine = document.getElementById('subjectLine').value;
	salutation = document.getElementById('salutation').value;
	version = document.getElementById('version').value;
	veeva = document.getElementById('veeva').value;
	customCopyright = document.getElementById('customCopyright').value;
	unsubscribe = document.getElementById('unsubscribe').value;
	isi = document.getElementById('isi').value;
	vib = document.getElementById('vib').value;
	OP5FAQ = document.getElementById('OP5FAQ').value;
	ctoken = document.getElementById('ctoken').value;
	utm_source = document.getElementById('utm_source').value;
	utm_content = document.getElementById('utm_content').value;
	utm_campaign = document.getElementById('utm_campaign').value;

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
			'<td align="' + alignment + '" class="mobile-padding" style=" padding: ' + padding_top + 'px 32px ' + padding_bottom + 'px 32px; background-color: ' + block_color + '">' +
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
		'<div style="color: #d4d4d4; font-family: courier; text-align: center; font-size: 12px;">'+
		'%%[/******* Custom Ampscript Block and Email Settings ******/]%%'+
		'</div>'+
		'<script runat="server" language="ampscript">'+
		'/* Email Settings */'+
		'SET @Salutation = "' + salutation + '" /* for EN only - Hello, Hi, Dear, etc. FR uses Bonjour. */'+
		'SET @subjectLine = "' + subjectLine + '" /* required for HTML archive; copy subject line here */'+
		'SET @version = "' + version + '"'+
		''+
		'/* Footer Settings */'+
		'SET @veeva = "' + veeva + '" /* add INS number here for footer */'+
		'SET @Unsubscribe = "' + unsubscribe + '" /* Y/N toggles whether the unsub link displays - use N for transactional */'+
		'SET @isi = "' + isi + '" /* Y/N toggles whether the footer displays the ISI link */'+
		'SET @vib = "' + vib + '" /* Y/N toggles whether the View In Browser link displays */'+
		'SET @OP5FAQ = "' + OP5FAQ + '" /* N or null uses the old FAQ in the footer, Y uses the OP5-specific FAQ page */'+
		'/*enter  copyright text to display in footer */'+
		'SET @customCopyright = "' + customCopyright + '"'+
		''+
		'/* UTMs - for use in template links; populate based on provided UTMs/links; utm_medium hardcoded as "email" */'+
		'SET @ctoken = "' + ctoken + '"'+
		'SET @utm_campaign = "' + utm_campaign + '"'+
		'SET @utm_source = "' + utm_source + '"'+
		'SET @utm_content = "' + utm_content + '"'+
		'/* add @utm_string to any URL to tag with UTM string; you can also just hardcode the URLs manually */'+
		'/* when you add @utm_string, youll need to add a ? or & depending on whether there is already a parameter string */'+
		'</script>'
			);
	
	// setData(dataObject, callback()). Required to retain the metada of the content block. In case of missing fields, there might be a loss of data.
	sdk.setData({
		subjectLine: subjectLine,
		salutation: salutation, 
		version: version, 
		veeva: veeva, 
		customCopyright: customCopyright, 		
		unsubscribe: unsubscribe, 
		isi: isi,
		vib: vib,
		OP5FAQ: OP5FAQ,
		ctoken: ctoken,
		utm_source: utm_source,
		utm_content: utm_content,
		utm_campaign: utm_campaign
	});
}

sdk.getData(function (data) {
	subjectLine = data.subjectLine || '';
	salutation = data.salutation || '';
	version = data.version || '';
	veeva = data.veeva || '';
	customCopyright = data.customCopyright || '';
	unsubscribe = data.unsubscribe || '';
	isi = data.isi || '';
	vib = data.vib || '';
	OP5FAQ = data.OP5FAQ || '';
	ctoken = data.ctoken || '';
	utm_source = data.utm_source || '';
	utm_content = data.utm_content || '';
	utm_campaign = data.utm_campaign || '';
	document.getElementById('subjectLine').value = subjectLine;
	document.getElementById('salutation').value = salutation;
	document.getElementById('version').value = version;
	document.getElementById('veeva').value = veeva;
	document.getElementById('customCopyright').value = customCopyright;
	document.getElementById('unsubscribe').value = unsubscribe;
	document.getElementById('isi').value = isi;
	document.getElementById('vib').value = vib;
	document.getElementById('OP5FAQ').value = OP5FAQ;
	document.getElementById('ctoken').value = ctoken;
	document.getElementById('utm_source').value = utm_source;
	document.getElementById('utm_content').value = utm_content;
	document.getElementById('utm_campaign').value = utm_campaign;
	createSettings();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(createSettings, 500)();
});
