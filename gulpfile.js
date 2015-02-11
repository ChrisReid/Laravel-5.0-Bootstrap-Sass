var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as copying vendor resources.
 |
 bower_components/*/

elixir(function (mix) {
    mix
        .copy(
            'bower_components/bootstrap-sass-official/assets/stylesheets',
            'resources/assets/sass/vendor'
        )
        .copy(
            'bower_components/font-awesome/scss',
            'resources/assets/sass/vendor/font-awesome'
        )
        .sass('app.scss', 'resources/assets/css')
        .copy(
            'bower_components/jquery/dist/jquery.js',
            'resources/assets/js/vendor/jquery.js'
        )
        .copy(
            'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
            'resources/assets/js/vendor/bootstrap.js'
        )
        .copy(
            'bower_components/bootstrap-sass-official/assets/fonts/bootstrap',
            'public/fonts'
        )
        .copy(
            'bower_components/font-awesome/fonts',
            'public/fonts'
        )
        .copy(
            'bower_components/angular/angular.js',
            'resources/assets/js/vendor/angular.js'
        )
        .styles([
            'app.css',
        ], 'public/css/all.css', 'resources/assets/css')
        .scripts([
            'vendor/jquery.js',
            'vendor/bootstrap.js',
            'vendor/angular.js',
            'app.js'
        ], 'public/js/all.js', 'resources/assets/js')
        .version([
            'public/css/all.css',
            'public/js/all.js'
        ]);
});
