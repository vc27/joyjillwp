<?php
/**
 * @package WordPress
 * @subpackage ParentTheme
 * @license GPL v2 - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 **/
#################################################################################################### */

get_template_part( 'header' );
?>
<div class="row-fluid">
	<div class="span10 offset1">
		<div id="section-loop-default" class="clearfix loop">
			<div class="hentry">
				<?php

				if ( get__option( '_404_page_title' ) ) {
					$title = get__option( '_404_page_title' );
				} else {
					$title = __( '404 Not Founds', 'parenttheme' );
				}

				echo "<h1 class=\"h1\">$title</h1>";

				echo "<div class=\"entry\">" . get__option( '_404_content' ) . "</div>";

				?>
			</div>
		</div>

		<div id="section-sitemap" class="clearfix loop layout-sitemap">
			<?php 

			// Display Search Form
			if ( get__option( '_404_display_search_form' ) ) {
				echo get_search_form();
			}

			?>
		</div><!-- end #section-sitemap -->
	</div>
</div>
<?php
get_template_part( 'footer' );