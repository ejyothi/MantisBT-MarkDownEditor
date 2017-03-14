// Issue Description
var descMde = new SimpleMDE({ 
					element: document.getElementById("description"),
					autoDownloadFontAwesome: false,
					spellChecker: false,
					toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "link", "image", "|", "quote", "code", "table", "|", "preview", "guide"],
				});

// Steps to reproduce in *Report Issue* and *Edit Bug* pages
var stepsMde = new SimpleMDE({ 
					element: document.getElementById("steps_to_reproduce"),
					autoDownloadFontAwesome: false,
					spellChecker: false,
					toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "link", "image", "|", "quote", "code", "table", "|", "preview", "guide"],
				});

// Additional Information field in *Report Issue* page
var addInfoMde = new SimpleMDE({ 
					element: document.getElementById("additional_info"),
					autoDownloadFontAwesome: false,
					spellChecker: false,
					toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "link", "image", "|", "quote", "code", "table", "|", "preview", "guide"],
				});

// Additional Information field in *Edit Issue* page
var addInfoUpdMde = new SimpleMDE({ 
					element: document.getElementById("additional_information"),
					autoDownloadFontAwesome: false,
					spellChecker: false,
					toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "link", "image", "|", "quote", "code", "table", "|", "preview", "guide"],
				});

// Note field in *Edit Issue* page
var bugNoteMde = new SimpleMDE({ 
					element: document.getElementById("bugnote_text"),
					autoDownloadFontAwesome: false,
					spellChecker: false,
					toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "link", "image", "|", "quote", "code", "table", "|", "preview", "guide"],
				});

// Note field in *View Issue* page
/* This conflicts with the bugnote_text with id. so disabling it for the time being 
var bugNoteViewMde = new SimpleMDE({ 
					element: document.getElementsByName("bugnote_text")[0],
					autoDownloadFontAwesome: false,
					toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "quote", "code", "table", "|", "preview", "guide"],
				});
*/

