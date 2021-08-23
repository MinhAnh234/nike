#!/usr/bin/env sh

set -e

npm run build

cd dist 

git init 
git add .
git commit -m "2.0"
git remote add origin git@github.com:MinhAnh234/nike-vueJS.git dev
git push

cd - 
