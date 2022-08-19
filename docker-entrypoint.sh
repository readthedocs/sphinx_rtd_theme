#!/bin/sh

# Install the readonly project in editable mode and make sure
# all dependencies are upgrade. This is mounted in from the
# outside, but it is on purpose that it is readonly!
cp -r /project/node_modules /project-working-copy/
cd /project-working-copy
pip install --upgrade -e ".[dev]"

npm run $@
