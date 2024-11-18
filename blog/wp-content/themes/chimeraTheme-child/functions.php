<?php
	//* Code goes here woop woop */ 
add_action('wp_enqueue_scripts', 'enqueue_parent_styles');

function enqueue_parent_styles(){
	wp_enqueue_style('parent-style', get_template_directory_uri().'/style.css');

}

function cc_hide_wp_version() {
    return '';
}
add_filter('the_generator', 'cc_hide_wp_version');

function cc_login_error(){
	return "Error: Incorrect login.";
}

add_filter('login_errors', 'cc_login_error');