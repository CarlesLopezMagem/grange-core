#!/bin/bash

git config --global user.email "build@travis-ci.com"
git config --global user.name "Travis CI"
export PACKAGE_VERSION=$(npm run get_version | tail -n 1)
echo "TAGGING $PACKAGE_VERSION..."
git tag $PACKAGE_VERSION
git push --quiet https://$GITHUB_TOKEN@github.com/guillotinaweb/grange-core --tags