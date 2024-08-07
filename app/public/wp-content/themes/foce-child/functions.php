<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' ); 

    //  Chargement du style personnalisé pour le theme
    wp_enqueue_style( 'theme-style', get_stylesheet_directory_uri() . '/css/theme.css' );  
    wp_enqueue_style( 'swiper-style', get_stylesheet_directory_uri() . '/css/swiper-bundle.min.css' );    
    wp_enqueue_script( 'swiper-bundle.min', get_theme_file_uri( '/JavaScript/swiper-bundle.min.js'), array(), '9.2.0', true );
    wp_enqueue_script( 'custom-scripts', get_theme_file_uri( '/JavaScript/custom-scripts.js' ), array('jquery'), '1.0.0', true );

}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}

 /* Shortcode footer */
 
function add_footer($string) {
	$string .= '<footer id="colophon" class="site-footer">
        <ul>
            <li><a href="'.get_site_url().'/politique-confidentialite" >Mentions Légales</a></li>
            <li><a href="'.get_site_url().'">STUDIO KOUKAKI</a></li>
            <li><a href="'.get_site_url().'/contact">Contact</a></li>
        </ul>
    </footer>';

	return $string;
}

add_shortcode('footer', 'add_footer');



