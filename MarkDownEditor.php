<?php
class MarkDownEditorPlugin extends MantisPlugin {

    function register() {
        $this->name        = 'MarkDown Editor';
        $this->description = 'Enable Toopay Bootstrap-Markdown editor on textareas';
        $this->version     = '0.2';
        $this->requires    = array(
						'MantisCore' => '2.3.0',
						);
        $this->author      = 'Manilal K M';
        $this->contact     = 'manilal@ejyothi.com';
        $this->url         = 'https://github.com/eJyothi';
    }

    function hooks() {
        $hooks = array(
				'EVENT_LAYOUT_BODY_END' => 'show_mdeditor',
                );
        return $hooks;
    }

	function show_mdeditor( $p_event, $p_bug_id )
	{
		print '<script type="text/javascript" src="' . plugin_file('bootstrap-markdown.js').'"></script>';
		print '<link type="text/css" href="'.plugin_file('bootstrap-markdown.min.css').'" rel="stylesheet" />';
		print '<script type="text/javascript" src="' . plugin_file('marked.js').'"></script>';
		print '<script type="text/javascript" src="' . plugin_file('textcomplete.js').'"></script>';
		print '<script type="text/javascript" src="' . plugin_file('plugin.js').'"></script>';
	}

}
