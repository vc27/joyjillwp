# current 
UPDATE wp_posts SET post_content = replace( post_content, 'stage.joyjill.com', 'joyjill.com' );
UPDATE wp_posts SET guid = replace( guid, 'stage.joyjill.com', 'joyjill.com' );

UPDATE wp_options SET option_value = replace( option_value, 'stage.joyjill.com', 'joyjill.com' ) WHERE option_name = 'siteurl';
UPDATE wp_options SET option_value = replace( option_value, 'stage.joyjill.com', 'joyjill.com' ) WHERE option_name = 'home';



UPDATE wp_posts SET post_content = replace( post_content, 'stage.joyjill.com', 'loc.v1.joyjill.com' );
UPDATE wp_posts SET guid = replace( guid, 'stage.joyjill.com', 'loc.v1.joyjill.com' );

UPDATE wp_options SET option_value = replace( option_value, 'stage.joyjill.com', 'loc.v1.joyjill.com' ) WHERE option_name = 'siteurl';
UPDATE wp_options SET option_value = replace( option_value, 'stage.joyjill.com', 'loc.v1.joyjill.com' ) WHERE option_name = 'home';