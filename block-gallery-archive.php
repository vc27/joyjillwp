<?php
/**
 * @package WordPress
 * @subpackage ChildTheme
 * @license GPL v2 - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 **/
#################################################################################################### */

$post__in = get_field('_archive_gallery_display_galleries', $post->ID );
echo "<div class=\"block-gallery-archive\">";
foreach ( $post__in as $post_id ) {
	echo "<a href=\"" . get_permalink($post_id) . "?archive=$post->ID\" style=\"background-image:url('" . ACFWP::get_image( '_gallery_featured_image', $post_id, 'large' ) . "');\">";
		echo "<span class=\"text-wrap\"><span class=\"text\">" . get_the_title($post_id) . "</span></span>";
	echo "</a>";
}
echo "</div>";