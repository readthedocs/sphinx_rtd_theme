#!/bin/sh

# Install the readonly project in editable mode and make sure
# all dependencies are upgrade. This is mounted in from the
# outside, but it is on purpose that it is readonly!
cd /project-readonly
pip install --upgrade -e ".[dev]"

cd /project

npm run $@
