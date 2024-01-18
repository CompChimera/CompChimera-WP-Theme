<?php
// Enable WP_DEBUG mode
// define( 'WP_DEBUG', true );

// Enable Debug logging to the /wp-content/debug.log file
// define( 'WP_DEBUG_LOG', true );

	//* Code goes here woop woop */ 
add_action('wp_enqueue_scripts', 'enqueue_parent_styles');

function enqueue_parent_styles(){
	wp_enqueue_style('parent-style', get_template_directory_uri().'/style.css');

}
