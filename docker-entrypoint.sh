#!/bin/sh

# Install the readonly project in editable mode and make sure
# all dependencies are upgrade. This is mounted in from the
# outside, but it is on purpose that it is readonly!
cp -r /project/node_modules /project-working-copy/
cd /project-working-copy
pip install --upgrade -e ".[dev]"

# This helps a potential permission issue, but might be removed
# pending some more investigation of docker host file system
# permissions in the bind mount
npm cache clean --force
npm install

echo "Going to invoke: npm run $@"
npm run $@
