<?php
/**
 * @package WordPress
 * @subpackage ParentTheme
 * @license GPL v2 - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 **/
#################################################################################################### */
global $s;

get_template_part( 'header' );
?>
<div class="row-fluid">
	<div class="span10 offset1">
		<?php
		if ( ! have_posts() ) {

			get_template_part( 'loop-no-search' ); 

		} else {

			echo "<div class=\"page-title-wrapper\">";
				echo "<h1 class=\"h1\">" . get__option( '_search_title' ) . " " . $s . "</h1>";
			echo "</div>";

			get_template_part( 'loop-default' );

		}
		?>
	</div>
</div>
<?php
get_template_part( 'footer' );