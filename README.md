# README

This is a Rails project with VUE JS as frontend which is going to be upgraded from certain version to another version including its all possible dependencies.

At this phase, I will be just focusing on the frontend of this application:

* Install rvm or rbenv and switch to ruby 2.6.8  `rvm install ruby-2.6.8`

* Install rails in the bundler environment of selected ruby version by using command  `gem install rails --version=6.1.7 --no-document`

* Create an application `rails new RailsAppUpgrade --webpack=vue`

* Or create an rails app by using command `rails new RailsAppUpgrade` and then add vue js to the application by `rails -T`  to see the command to add VUE JS on created Rails app.

* Add gem to gem file ‘net-http’ to remove warning, then select ruby-2.6.8 and `bundle install`

* Run rails server: `bundle exec rails s` ; run webpacker: `bin/wepack-dev-server`

* You will run into some errors while bin/webpack-dev-server is run; vue/dist/vue.esm not found because you are using vue3 and it doesn’t have that file in node module. To have exact the Vue-version: 2.6.14 in this app, you need to remove due 3 by running `yarn remove vue` and install `yarn add vue@2.6.14`. Since you change the Vue version you need to remove and add the compatible version for its vue-template-compiler and vue-loader. Commands for that; `yarn remove vue-template-compiler` ; `yarn add vue-template-compiler@2.6.14`; `yarn remove Vue-loader` ; `yarn add vue-loader@15.9.2`

* Then run webpack-dev-server and rails server using commands;  `bin/webpack-dev-server` in one terminal and `bundle install`, followed by `bundle exec rails s` in another terminal (Obviously being in the project root folder).

* ...
