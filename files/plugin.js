/* Bootstrap-markdown implementation */
/* Ref: https://github.com/toopay/bootstrap-markdown */

$("#description").markdown({
	savable:false,
})

$("#steps_to_reproduce").markdown({
	savable:false,
})

$("#additional_info").markdown({
	savable:false,
})

$("#additional_information").markdown({
	savable:false,
})

$("#bugnote_text").markdown({
	savable:false,
})

/** Textcomplete Integration **/
/* https://github.com/yuku-t/textcomplete */

var Textarea = Textcomplete.editors.Textarea;
var userStrategy = {
	id: 'user',
	match: /(^|\s)@([a-z]{3,5})$/i,
	//match: /^(?.*[a-z]{3})[a-z0-9]+$/i,
	search: function (term, callback) {
		$.getJSON('plugin.php?page=MarkDownEditor/search', {term: term} )
			.done(callback)
			.fail([]);
	},
	replace: function (name) {
			 return '$1@' + name + ' ';
	}
};

var elementId = document.getElementById('description');
if(elementId) {
	var edDescription = new Textarea(elementId);
	var tcDescription = new Textcomplete(edDescription);
	tcDescription.register([userStrategy]);
}

var elementId = document.getElementById('steps_to_reproduce');
if(elementId) {
	var edSteps = new Textarea(elementId);
	var tcSteps = new Textcomplete(edSteps);
	tcSteps.register([userStrategy]);
}

var elementId = document.getElementById('additional_info');
if(elementId) {
	var edAddInfo = new Textarea(elementId);
	var tcAddInfo = new Textcomplete(edAddInfo);
	tcAddInfo.register([userStrategy]);
}

var elementId = document.getElementById('additional_information');
if(elementId) {
	var edAddInfon = new Textarea(elementId);
	var tcAddInfon = new Textcomplete(edAddInfon);
	tcAddInfon.register([userStrategy]);
}

var elementId = document.getElementById('bugnote_text');
if(elementId) {
	var edBugnote = new Textarea(elementId);
	var tcBugnote = new Textcomplete(edBugnote);
	tcBugnote.register([userStrategy]);
}
