<?php
/**
 * @package WordPress
 * @subpackage ParentTheme
 * @license GPL v2 - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 **/
#################################################################################################### */

?>
<div id="section-footer-advertisement" class="outer-wrap">
	<div class="inner-wrap">
		<?php
		if ( have_rows('_footer_advertisement','option') ) {
			while ( have_rows('_footer_advertisement','option') ) {
				the_row();
				echo "<a href=\"" . get_sub_field('_ad_url') . "\"><img src=\"" . ACFWP::return_image( get_sub_field('_ad_image'), 'large' ) . "\" alt=\"\" /></a>";
			}
		}
		?>
	</div>
</div>