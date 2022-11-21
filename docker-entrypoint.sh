#!/bin/sh

# Update latest Python dependencies in case they have changed
# Notice that we are using the 'eager' strategy
# This should only be relevant to development environments where
# the theme is being used. For purposes of "production" or
# building the sdist/wheel, installing dependencies should not
# affect the outcome.
cd /project-readonly
pip install --upgrade --upgrade-strategy eager -e ".[dev]"

# This helps a potential permission issue, but might be removed
# pending some more investigation of docker host file system
# permissions in the bind mount
# npm cache clean --force
# npm install

cd /project

# TODO: This is a bad approach, it copies from the image which
# may be outdated to the current git tree
cp -r /project-readonly/sphinx_rtd_theme .

echo "Going to invoke: npm run $@"
npm run $@
