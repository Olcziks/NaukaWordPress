<?php

// BEGIN iThemes Security - Do not modify or remove this line
// iThemes Security Config Details: 2
define( 'DISALLOW_FILE_EDIT', true ); // Disable File Editor - Security > Settings > WordPress Tweaks > File Editor
// END iThemes Security - Do not modify or remove this line

define( 'ITSEC_ENCRYPTION_KEY', 'WExdeC9dPFA2ZS40XUZ7VW96Zi1yNkMmOSAuWFFBVHI2fTxSSlNWQCpRdjIhXyk7VkA+MzFbLXVeajNeRUNmIA==' );

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
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'testwordpress_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         '|J#F-kaan1#x6%$I@zy+BaGuF[l`6L/[W;u_jok(c<gM:3a5:*@b<kzQ@e/YCf^a' );
define( 'SECURE_AUTH_KEY',  'K!h];wg`h@&is5dw#9|bYSLMA?}8$<7U K`- v%.Ruxd6I-YwW/F?938/*SJ~R2-' );
define( 'LOGGED_IN_KEY',    'u8YhP>=P[yLl9m(3c2eI9N;U,#YMiS}NHF*i^*<(CQ@UGp:BTRO_Fa8*JQ5W<5Ct' );
define( 'NONCE_KEY',        'Z-C9@MF={/*S9f6NmWGT*;p$T,#jX9]t=LYtj /9?bGlmNI84Z>L$>Q[DZnA@+Pg' );
define( 'AUTH_SALT',        '(b(jjXyr{ky7#c:),?g48Kcu`-=MF^J%[]C&%|z,5zhNyeYyzxP5SFU(iw{OE_.V' );
define( 'SECURE_AUTH_SALT', 'Gd# }Z 8q7]]TO9sSE^i7J!t-K|V4$KDv1Obi^%|d)B>]AxZo43.#,b18dad75Iq' );
define( 'LOGGED_IN_SALT',   'p5`FAmenOWCj *A-GX%c>/U!Ci~!MQi=o# _^|uM:#F4C)8 $~Z(/u^h/g.6KKeV' );
define( 'NONCE_SALT',       'A7V&X0?:g8jGur5L;fGsv>a*4G}c!(@w^xfg-VfYl>$|])Dk)SB9;[F(qTK9=n7(' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
