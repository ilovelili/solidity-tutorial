FROM node:12.18

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

ADD . /usr/src/app

CMD [ "yarn", "start" ]