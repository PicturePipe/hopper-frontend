# Hopper-frontend

[![Build Status](https://travis-ci.org/transcode-de/hopper-frontend.svg)](https://travis-ci.org/transcode-de/hopper-frontend)

Hopper-frontend is a JavaScript frontend for the Hopper API. It allows
your users to easily create there own formulars.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [nvm](https://github.com/creationix/nvm)

## Installation

To make sure you are using the right version of Node.js, we are providing a `.nvmrc`. Therefore, to install all dependencies from `hopper-frontend`, make sure you have `nvm` installed.

* `git clone <repository-url>` this repository
* change into the new directory
* `nvm install`
* `npm install -g ember-cli`
* `npm install -g bower`
* `npm install`
* `bower install`

After that, you just have to type `nvm use` everytime you want to run, test or develop this project. This will make sure, that you use the correct Node.js version.

## Running / Development

To run hopper-frontend, you have to do the following:

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests and generating coverage

To run the testuise, you have to install `karma-cli`:

* `npm install -g karma-cli`

Now, to run the testsuite you now can use the following command. This will also generate the coverage:

* `karma start`

### Generating Documentation

You can use `ember-cli-yuidoc` to generate the documentation in the `docs/` directory:

* `ember ember-cli-yuidoc`

You can also automatically generate, update and serve it at [http://localhost:4200/docs/](http://localhost:4200/docs/):

* `ember serve --docs`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

