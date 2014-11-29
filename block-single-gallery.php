<?php
/**
 * @package WordPress
 * @subpackage ChildTheme
 * @license GPL v2 - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 **/
#################################################################################################### */

$gallery_of_photos = get_field('_gallery_of_photos');
echo "<div class=\"block-single-gallery\">";
foreach ( $gallery_of_photos as $image ) {
	echo "<a target=\"_blank\" title=\"" . $image['title'] . "\" rel=\"gallery\" href=\"" . ACFWP::return_image( $image, 'large-ex' ) . "\" style=\"background-image:url('" . ACFWP::return_image( $image, 'medium' ) . "');\"></a>";
}
echo "</div>";