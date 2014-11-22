/**
 * File Name childTheme.js
 * @license GPL v2 - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 **/
// ######################################################################


/**
 * childTheme
 **/
var childTheme = {
	
	
	/**
	 * init
	 **/
	init : function() {
		
		this.colorbox();
		this.mbpScaleFix();
		
	} // end init : function
	
	
	
	/**
	 * colorbox
	 **/
	,colorbox : function() {
		
		jQuery("#section-loop-default .block-single-gallery a").colorbox({
			rel :'gallery'
			,transition : "none"
			,width : "99%"
			,height : "99%"
		});
		
	} // end colorbox : function
	
	
	
	/**
	 * mbpScaleFix
	 **/
	,mbpScaleFix : function() {
		
		if ( typeof MBP !== 'undefined' ) {
			MBP.scaleFix();
		}
		
	} // end mbpScaleFix : function 
	
	
	
}; // end var childTheme






/**
 * jQuery
 **/
jQuery(document).ready(function() {
	childTheme.init();	
});