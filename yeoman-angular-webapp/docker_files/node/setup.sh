#!/bin/sh

npm install yo bower generator-webapp generator-angular grunt-cli
./node_modules/.bin/yo
./node_modules/.bin/bower --config.interactive=false install
