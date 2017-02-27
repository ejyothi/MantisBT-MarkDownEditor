// Issue Description
var descMde = new SimpleMDE({ 
					element: document.getElementById("description"),
					autoDownloadFontAwesome: false,
					toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "quote", "code", "table", "|", "preview", "guide"],
				});

// Steps to reproduce in *Report Issue* and *Edit Bug* pages
var stepsMde = new SimpleMDE({ 
					element: document.getElementById("steps_to_reproduce"),
					autoDownloadFontAwesome: false,
					toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "quote", "code", "table", "|", "preview", "guide"],
				});

// Additional Information field in *Report Issue* page
var addInfoMde = new SimpleMDE({ 
					element: document.getElementById("additional_info"),
					autoDownloadFontAwesome: false,
					toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "quote", "code", "table", "|", "preview", "guide"],
				});

// Additional Information field in *Edit Issue* page
var addInfoUpdMde = new SimpleMDE({ 
					element: document.getElementById("additional_information"),
					autoDownloadFontAwesome: false,
					toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "quote", "code", "table", "|", "preview", "guide"],
				});

// Note field in *Edit Issue* page
var bugNoteMde = new SimpleMDE({ 
					element: document.getElementById("bugnote_text"),
					autoDownloadFontAwesome: false,
					toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "quote", "code", "table", "|", "preview", "guide"],
				});

// Note field in *View Issue* page
var bugNoteViewMde = new SimpleMDE({ 
					element: document.getElementsByName("bugnote_text")[0],
					autoDownloadFontAwesome: false,
					toolbar: ["bold", "italic", "heading", "|", "unordered-list", "ordered-list", "|", "quote", "code", "table", "|", "preview", "guide"],
				});
