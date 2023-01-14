FROM node:alpine

RUN apk update

RUN npm install -g typescript

RUN npm install -g ts-node

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm","start"]