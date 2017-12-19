<?php 

/****************************************************\
**************ENQUEUE STYLES AND SCRIPTS**************
\****************************************************/


add_action( 'wp_enqueue_scripts', 'ls_enqueue_styles' );

function ls_enqueue_styles() {

	// Enqueue the parent stylesheet
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );


    // Enqueue ls-styles.css
    $styles = get_stylesheet_directory_uri() . '/ls-styles.css?' . filemtime( get_stylesheet_directory() . '/ls-styles.css' );
    wp_enqueue_style( 'ls-styles', $styles, array( 'parent-style', 'divi-style' ) );

    // Enqueue ls-scripts.js (optional - just uncomment)
    //$scripts = get_stylesheet_directory_uri() . '/ls-scripts.js?' . filemtime( get_stylesheet_directory() . '/ls-scripts.js' );
	//wp_enqueue_script( 'ls-scripts', $scripts, array( 'jquery') );
	

}
