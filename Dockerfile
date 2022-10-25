# This implicitely includes Python 3.10
FROM node:14-alpine

# Do not use --update since that will also fetch the
# latest node-current package
# 'make' is needed for building documentation
RUN apk add npm make py3-pip py3-wheel

# Add an extra verification that we have the right node
# because the above caused issues
RUN node -v && node -v | grep -q v14 &&\
    python3 --version && python3 --version | grep -q "3.10"

RUN pip install pip --upgrade

RUN mkdir -p /project/src/ &&\
    mkdir -p /project/docs/build/ &&\
    mkdir -p /project-minimal-copy/sphinx_rtd_theme &&\
    touch /project-minimal-copy/sphinx_rtd_theme/__init__.py

# This is the main working directory where node_modules
# gets built. During runtime, it's mixed with directories
# from an external environment through a bind mount
WORKDIR /project

# Copy files necessary to run "npm install" and save
# installed packages in the docker image (makes the runtime
# so much faster)
COPY package.json /project/
COPY bin/preinstall.js /project/bin/preinstall.js

RUN cd /project

# It matters that the node environment is installed into the same
# folder, i.e. /project where we will run the environment from
# TODO: We don't want to update package-lock.json here, we
# should use npm ci instead
RUN npm install --package-lock-only &&\
    npm audit fix &&\
    npm install

# This is strictly speaking not necessary, just makes
# running the container faster...
# Install dependencies, then uninstall project itself
COPY setup.py README.rst /project-minimal-copy/
RUN cd /project-minimal-copy &&\
    pip install ".[dev]" &&\
    /usr/bin/yes | pip uninstall sphinx_rtd_theme


# Copy in files that we need to run the project. These files
# will not be mounted into the runtime from external environment
# so we copy them during build.
COPY webpack.common.js webpack.dev.js webpack.prod.js /project/

# Copy in the entrypoint and we're done
COPY docker-entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
