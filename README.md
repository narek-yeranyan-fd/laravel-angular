# laravel-angular
Testing project with Laravel+Angular PDF upload

## About Project
- Used following frameworks/components
- Laravel 5.4
- AngularJS 2
- Angular Material
- Laravel+Angular Project starter seed
- Rectangular
- Angular File Upload
- Bootsrap 3
- GULP
- Karam JS
- GIT - Project directory contain .git which keeps changes and version hostory.


## Requirements:

- PHP >= 5.6.4
- MySQL and PHP MySQL module
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- PHP mode rewrite

## Installation for usage

- Create database
- Fix database credentials in .env
- Run below command to migrate database:
- php artisan migrate
- Set up Document root to /public
- Run bellow command line to change permission for cache and storage files
- sudo chown -R www-data:www-data bootstrap/cache/
- sudo chown -R www-data:www-data storage
- To check if Apache user is www-data run bellow command
- ps aux | egrep '([a|A]pache|[h|H]ttpd)'

## Installation for development

## Command line
- npm install -g gulp bower
- npm install
- bower install
- bower install --save if bower-components doesn't updates
- php artisan migrate
- gulp
- gulp && gulp watch
- php artisan serve and browse to localhost:8000
