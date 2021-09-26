FROM node:14-alpine

ARG GATSBY_API_BASE_URL=http://localhost:4000

ENV GATSBY_API_BASE_URL=$GATSBY_API_BASE_URL

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn --pure-lockfile

COPY . .

RUN npm run build

EXPOSE 9000

CMD [ "npm", "run", "serve" ]