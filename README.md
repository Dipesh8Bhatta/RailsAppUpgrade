# README

This is a Rails project with VUE JS as frontend which is going to be upgraded from certain version to another version including its all possible dependencies.

At this phase, I will be just focusing on the frontend of this application:

* Install rvm or rbenv and switch to ruby 2.6.8  `rvm install ruby-2.6.8`

* Install rails in the bundler environment of selected ruby version by using command  `gem install rails --version=6.1.7 --no-document`

* Create an application `rails new RailsAppUpgrade --webpack=vue`

* Or create an rails app by using command `rails new RailsAppUpgrade` and then add vue js to the application by `rails -T`  to see the command to add VUE JS on created Rails app.

(You can skip this git setup part. I only put it here since username and password way of authentication is deprecated and along with SSH this token is alternate to do it.)
After creating the project you need to add it to the git repository. Here is the steps to do that. Hoping to make your ride smooth.
* Go to the root of the project from terminal and run `git init`.
* Add all the files `git add .` and commit it `git commit -m 'some comment'`
* Create a repository in the github and use it link to upload the project created on it. Generate the token from Github profile > Settings > Developer Settings > Personal access tokens > Generate new token > need to select few thigs and go.
* `git remote set-url origin https://<githubtoken>@github.com/<username>/<repositoryname>.git`
* `git push -u origin master`

Now we have our code in the repo, I can continue with the rest of the things.

* Add gem to gem file ‘net-http’ to remove warning, then select ruby-2.6.8 and `bundle install`

* Run rails server: `bundle exec rails s` ; run webpacker: `bin/wepack-dev-server`

* You will run into some errors while bin/webpack-dev-server is run; vue/dist/vue.esm not found because you are using vue3 and it doesn’t have that file in node module. To have exact the Vue-version: 2.6.14 in this app, you need to remove due 3 by running `yarn remove vue` and install `yarn add vue@2.6.14`. Since you change the Vue version you need to remove and add the compatible version for its vue-template-compiler and vue-loader. Commands for that; `yarn remove vue-template-compiler` ; `yarn add vue-template-compiler@2.6.14`; `yarn remove Vue-loader` ; `yarn add vue-loader@15.9.2`

* Then run webpack-dev-server and rails server using commands;  `bin/webpack-dev-server` in one terminal and `bundle install`, followed by `bundle exec rails s` in another terminal (Obviously being in the project root folder).

* Generate hello controller and say_hello action on it by `rails g controller hello say_hello`.

* Add vue-turbolinks in node module; `yarn add vue-turbolinks` and fix hello_vue.js file to work with it.

* Add another vue component and page so that we can confirm that vue-turbolinks is working. Now, you will be able to switch between http://127.0.0.1:3000/hello/say_hello and http://127.0.0.1:3000/hello/show_current_time in your local. What I did here can be found from the related [commit](https://github.com/Dipesh8Bhatta/RailsAppUpgrade/commit/378a2d2a1c7193145ccca18bc20a68da3f9132b0).

* 

* ...
