<?php
/* Template Name: Single Gallery */

/**
 * @package WordPress
 * @subpackage ChildTheme
 * @license GPL v2 - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 **/
#################################################################################################### */

get_template_part( 'header' );
do_action( 'before_loop' );
if ( have_posts() ) {
	
	if ( isset( $_GET['archive'] ) AND is_numeric( $_GET['archive'] ) ) {
		echo "<div class=\"back-wrap\">";
			echo "<a href=\"" . get_permalink($_GET['archive']) . "\">&laquo; back to: " . get_the_title($_GET['archive']) . "</a>";
		echo "</div>";
	}
	
	echo "<div id=\"section-loop-default\" class=\"loop\">";
		while ( have_posts() ) { 
			the_post(); 
			echo "<article "; post_class(); echo ">";
				the__title( $post, array( 
					'element' => 'h1'
					,'class' => 'h1'
					,'permalink' => false 
				) );
				the__content( $post );
				
				get_template_part('block-single-gallery');
				
			echo "</article>";
		} // End while(have_post())
	echo "</div>";
} // End if(have_post()) 
do_action( 'after_loop' );
get_template_part( 'footer' );