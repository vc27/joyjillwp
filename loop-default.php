<?php
/**
 * @package WordPress
 * @subpackage ParentTheme
 * @license GPL v2 - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 **/
#################################################################################################### */



do_action( 'before_loop' );
if ( have_posts() ) {
	echo "<div id=\"section-loop-default\" class=\"loop\">";
		while ( have_posts() ) { 
			the_post(); 
			$class = 'span12';
			echo "<article "; post_class('row-fluid'); echo ">";
				if ( has_post_thumbnail() ) {
					$class = 'span8';
					echo "<div class=\"span4 block-image\">";
						featured__image( $post, array( 
							'post_thumbnail_size' => 'medium'
						) );
					echo "</div>";
				}
				echo "<div class=\"$class\">";
					the__title( $post, array( 
						'element' => 'h3'
						,'class' => 'h3'
						,'permalink' => true 
					) );
					the__excerpt( $post, array( 
						'count' => 55
						,'read_more' => 'Read More'
						,'strip_tags' => '<p>'
					) );
				echo "</div>";
			echo "</article>";
		} // End while(have_post())
	echo "</div>";
} // End if(have_post())
do_action( 'after_loop' ); 