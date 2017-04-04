Mantis MarkDownEditor
====================

*A MantisBT plugin to enable SimpleMDE Editor (http://simplemde.com) in forms*

Pre-requisites
--------------

* MantisBT v2.1.0

Installation Steps
------------------

1. Clone the repository from Github to the plugins folder
2. Rename the folder MantisBT-MarkDownEditor to MarkDownEditor
3. Go to Manage-->Manage Plugins and install the plugin

Known Issues
------------
It is not possible to report issues with attachments if the MarkDownEditor plugin is enabled. A workaround is to disable Dropzone in MantisBT by setting  `$g_dropzone_enabled = OFF;` in `config/config_inc.php`


