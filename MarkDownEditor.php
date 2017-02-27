<?php
class MarkDownEditorPlugin extends MantisPlugin {

    function register() {
        $this->name        = 'SimpleMDE MarkDown Editor';
        $this->description = 'Enable MarkDown editor for various fields';
        $this->version     = '0.1';
        $this->requires    = array(
						'MantisCore' => '2.1',
						);
        $this->author      = 'Manilal K M';
        $this->contact     = 'manilal@ejyothi.com';
        $this->url         = 'https://github.com/eJyothi';
    }

    function hooks() {
        $hooks = array(
				'EVENT_LAYOUT_BODY_END' => 'show_tagsinput',
                );
        return $hooks;
    }

	function show_tagsinput( $p_event, $p_bug_id )
	{
		print '<script type="text/javascript" src="' . plugin_file('simplemde.min.js').'"></script>';
		print '<link type="text/css" href="'.plugin_file('simplemde.min.css').'" rel="stylesheet" />';
		print '<script type="text/javascript" src="' . plugin_file('plugin.js').'"></script>';
	}

}
