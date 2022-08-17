FROM node:14-alpine
FROM python:2-alpine

RUN apk add --update npm

RUN mkdir -p /project/bin

WORKDIR /project

COPY package.json /project/
#COPY package-lock.json /project/
COPY bin/preinstall.js /project/bin/preinstall.js

COPY docker-entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

RUN cd /project

# There is a very stubborn npm package that keeps complaining even though
# we try to set its environment config vars
# RUN ln -s `which python` /usr/bin/python3

RUN npm install --package-lock-only &&\
    npm audit fix &&\
    npm install

CMD /entrypoint.sh
