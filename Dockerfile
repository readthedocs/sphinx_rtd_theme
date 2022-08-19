# python:3-alpine contains node 18 so has to go first
# in order to get overwritten
FROM python:3-alpine
FROM node:14-alpine

# Do not use --update since that will also fetch the
# latest node-current package
# 'make' is needed for building documentation
RUN apk add npm make py3-pip py3-wheel

# Add an extra verification that we have the right node
# because the above caused issues
RUN node -v && node -v | grep -q v14

RUN pip install pip --upgrade

RUN mkdir -p /project/src/ &&\
    mkdir -p /project/docs/ &&\
    mkdir -p /project-static-copy

WORKDIR /project

COPY package.json /project/

# COPY package-lock.json /project/

COPY bin/preinstall.js /project/bin/preinstall.js

RUN cd /project

# It matters that the node environment is installed into the same
# folder, i.e. /project where we will run the environment from
RUN npm install --package-lock-only &&\
    npm audit fix &&\
    npm install

# This is strictly speaking not necessary, just makes
# running the container faster...
# Install dependencies, then uninstall project itself
COPY . /project-static-copy
RUN cd /project-static-copy &&\
    pip install ".[dev]" &&\
    /usr/bin/yes | pip uninstall sphinx_rtd_theme


# Copy in stuff we need to run the project
COPY webpack.common.js webpack.dev.js webpack.prod.js /project/

COPY docker-entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
