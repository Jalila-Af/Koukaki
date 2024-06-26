<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          ';_6ABM:!4C%_*Iz(_uHHm=v@MvhQ0G[!M~u1uY?9H>$:blMpf>Wy?/zBRgCsGf q' );
define( 'SECURE_AUTH_KEY',   'Yc~d}QjH7[/_4d-1sE2Udh[o?nGfmB`Xf@Rq,oUO&*~YN5]5~{.WnE(0dhj<?iHt' );
define( 'LOGGED_IN_KEY',     'P`&4k4Yv_Psb.ez`C!$J5yNZiGl5,7|T.*Ff4l<?z3ZQ?jn2xFwZVf~c^xmX0hxR' );
define( 'NONCE_KEY',         'zaV~G(cR*zY+zYAEg2J;|Thx8 pe:~NZcFuFc#IF|z#h%N]OkmT</na(7R@M;F02' );
define( 'AUTH_SALT',         '92_Ll(SBC-KG]DedZk*(vFi}1i#ji0xljx8f?P@UA#J^KJDw+Q3M)Uz%xt](4104' );
define( 'SECURE_AUTH_SALT',  '{PYMbEX+|F0ChztSZ5_LnNplmUZM6*Jv)^a@[QEt2;pc.dWz3B(Q|)A ;ALm,MhF' );
define( 'LOGGED_IN_SALT',    'F7Z?|tFX^u;AZfMr.d+8lyaI-s[@l8s N.7~x`J>p>{,k_]xoQ0&POmIXvc9=dAC' );
define( 'NONCE_SALT',        'r,FZ.F$3;<^&jT02D91%Qq7C+oickV(]%5j+7[kNL{v}|DhIy!{g=raX=Q,1{avf' );
define( 'WP_CACHE_KEY_SALT', '^Fvz2J^Fnx<(]]9aLD?B6,m9B)c-O*U65R)8k SEDkbUK7f_%>;!<(PXo6F_A}P3' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
