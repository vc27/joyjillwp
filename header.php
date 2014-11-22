<?php
/**
 * @package WordPress
 * @subpackage ParentTheme
 * @license GPL v2 - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 **/
#################################################################################################### */

get_template_part( 'header-head' );

?>
<!-- Start Body -->
<body <?php body_class(); echo apply_filters( 'tag_body_attr', '' ); ?>>
	<?php do_action('after_body_tag'); ?>
	<div id="page">
			
		<!-- Start Header -->
		<div id="section-header" class="outer-wrap">
			<div class="clearfix inner-wrap">
				<a id="logo" href="<?php echo home_url(); ?>">
					<span class="text"><?php echo bloginfo('name'); ?></span>
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo.png" alt="" />
				</a>
				<?php 
				wp_nav_menu( array( 
					'fallback_cb' => '', 
					'theme_location' => 'primary-navigation', 
					'container' => 'div', 
					'container_id' => 'primary-navigation', 
					'menu_class' => '' 
				) );
				?>
			</div>
		</div>
		
		<!-- Start Main Content -->
		<div id="section-main" class="outer-wrap">
			<div class="clearfix inner-wrap section-main-inner-wrap">
				<?php do_action('section-main-top'); ?>