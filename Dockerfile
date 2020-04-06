FROM node:12-alpine

RUN apk update && apk add --no-cache bash git ca-certificates

WORKDIR /opt

COPY package.json /opt
COPY yarn.lock /opt

ENV CI=true

RUN NODE_ENV=production yarn
COPY . /opt
EXPOSE 8080

CMD ["node", "run.js"]