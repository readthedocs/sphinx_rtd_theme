FROM node:14-alpine
FROM python:3.10-alpine

RUN apk add --update npm

RUN mkdir /project

COPY package.json /project
COPY package-lock.json /project

COPY docker-entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

RUN cd /project
RUN npm install

CMD /entrypoint.sh
