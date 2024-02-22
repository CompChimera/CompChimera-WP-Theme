# CompChimera-WP-Theme
Child theme for my WordPress site. Based on the [twentyfifteen](Https://wordpress.org/themes/twentyfifteen) template.

# Setup
## Pre Requisites- Windows
Install [Local by Flywheel](https://localwp.com/)
Install [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)

In WordPress:
Install [twentyfifteen](Https://wordpress.org/themes/twentyfifteen) theme - this is the parent theme. This can be installed by visiting the themes page ( `/wp-admin/themes.php` ) and clicking 'Add New Theme' and searching for `twentyfifteen`.


## Setup steps - Windows
Once a site is created in Local - in the app/public folder of your site, clone this repo into it's own folder.

Create a symlink between that new folder and a folder in themes folder. 
Ex: 
```mklink /D "C:\Local Sites\compchimera\app\public\wp-content\themes\chimeraTheme-child" "C:\Local Sites\compchimera\app\public\CompChimera-WP-Theme\blog\wp-content\themes\chimeraTheme-child"```

The CompChimera child theme should now be available to activate in wordpress. ( `/wp-admin/themes.php` ) 

# Development
Everything should be set to begin compiling everything. This theme uses Grunt as the taskrunner. 

Run `npm i` in the build folder to install dependencies. 

See `build/package.json` for a full list of available commands. 



