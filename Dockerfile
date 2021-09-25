FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn --pure-lockfile

COPY . .

RUN npm run build

EXPOSE 9000

CMD [ "npm", "run", "serve" ]